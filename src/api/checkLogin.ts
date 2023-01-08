import axios from 'axios'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const loginStatus: Ref<any> = ref({ msg: '登录中', username: null, status: null })

const checkLogin = () => {
  const token = localStorage.getItem('token')

  // 登录信息存在
  if (token) {
    axios
      .post('https://sso.elfmc.com/account/get_info', {
        token,
      }, {
        withCredentials: true,
      })
      .then((response) => {
        loginStatus.value = response.data
      })
      .catch((error) => {
        console.error(error)
        loginStatus.value = error.response.data
        if (error.response.status === 401)
          localStorage.removeItem('token')
      })
  }
  else {
    loginStatus.value = {
      msg: '未登录',
      username: null,
      status: false,
    }
  }
}

checkLogin()
