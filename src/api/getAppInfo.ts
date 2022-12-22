import axios from 'axios'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const appInfo: Ref<any> = ref({
  status: 'loading',
})

export const getAppInfo = (appid: string) => {
  axios
    .get('https://sso.elfmc.com/get_app_info', {
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
