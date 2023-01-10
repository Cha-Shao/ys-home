import axios from 'axios'
import type { Ref } from 'vue'
import { ref } from 'vue'

interface AppInfo {
  app_name?: string
  app_avatar?: string
  status: boolean | null
}

export const appInfo: Ref<AppInfo> = ref({
  status: null,
})

class ClassAuthorizedLogin {
  getAppInfo = (app_id: string) => {
    axios
      .get('https://sso.elfmc.com/authorize/get_app', {
        params: {
          app_id,
        },
      })
      .then((resp) => {
        appInfo.value = resp.data
        appInfo.value.status = true
      })
      .catch((error) => {
        console.error(error)
        appInfo.value.status = false
      })
  }

  getToken = async (app_id: string, token: string) => {
    let authorizeToken
    await axios
      .get('https://sso.elfmc.com/authorize/authorize_token', {
        params: {
          app_id,
          token,
        },
      })
      .then((resp) => {
        authorizeToken = resp.data.token
      })
      .catch((error) => {
        console.error(error)
      })
    return authorizeToken
  }
}

export const authorizedLogin = new ClassAuthorizedLogin()
