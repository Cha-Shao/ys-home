import axios from 'axios'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const loginStatus: Ref<any> = ref({ msg: '登录中', name: null, status: null })

const checkLogin = () => {
  axios
    .post('https://sso.elfmc.com/check_login', {}, {
      withCredentials: true,
    })
    .then((response) => {
      loginStatus.value = response.data
    })
    .catch((error) => {
      console.error(error)
      loginStatus.value.status = false
    })
}

checkLogin()
