import axios from 'axios'
import type { Ref } from 'vue'
import { ref } from 'vue'
import type { LocationQueryValue } from 'vue-router'

export const resultText: Ref<any> = ref({
  title: '错误',
  msg: '未知错误',
})

export const confirmAccount = (token: LocationQueryValue | LocationQueryValue[]) => {
  axios
    .get('https://sso.elfmc.com/confirm_account', {
      params: {
        token,
      },
    })
    .then((response) => {
      resultText.value = response.data
    })
    .catch((error) => {
      resultText.value = error.response.data
    })
}
