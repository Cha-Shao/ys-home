import axios from 'axios'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const appInfo: Ref<any> = ref({
  status: 'loading',
})

class ClassAuthorizedLogin {
  getAppInfo = (appid: string) => {
    axios
      .get('https://sso.elfmc.com/authorized_login/get_app', {
        params: {
          appid,
        },
      })
      .then((response) => {
        appInfo.value = response.data
        appInfo.value.status = 'success'
      })
      .catch((error) => {
        console.error(error)
        appInfo.value.status = 'error'
      })
  }

  getToken = async (appid: string, token: string) => {
    let authorizeToken
    await axios
      .post('https://sso.elfmc.com/authorized_login/get_token', {
        appid,
        token,
      })
      .then((response) => {
        authorizeToken = response.data.uuid
      })
      .catch((error) => {
        console.error(error)
        authorizeToken = null
      })
    return authorizeToken
  }
}

export const authorizedLogin = new ClassAuthorizedLogin()
