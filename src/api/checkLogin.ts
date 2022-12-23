import axios from 'axios'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const loginStatus: Ref<any> = ref({ msg: '登录中', name: null, status: null })

const checkLogin = () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token')
  // 登录信息存在
  if (token) {
    axios
      .post('https://sso.elfmc.com/check_login', {
        token,
      }, {
        withCredentials: true,
      })
      .then((response) => {
        loginStatus.value = response.data
        if (response.data.msg === '未登录') {
          // 如果登陆凭证失效就顺便清一下垃圾
          localStorage.removeItem('token')
          localStorage.removeItem('token_exp')
        }
        else { loginStatus.value.status = true }
      })
      .catch((error) => {
        console.error(error)
        loginStatus.value.status = false
      })
  }
  else {
    loginStatus.value.status = false
  }
}

checkLogin()
