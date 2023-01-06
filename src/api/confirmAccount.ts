import axios from 'axios'
import type { Ref } from 'vue'
import { ref } from 'vue'
import type { LocationQueryValue } from 'vue-router'

export const resultText: Ref<any> = ref({
  title: '加载中',
  msg: '请稍后...',
})

export const confirmAccount = (token: LocationQueryValue | LocationQueryValue[]) => {
  axios
    .post('https://sso.elfmc.com/account/confirm', {
      token,
    })
    .then((response) => {
      resultText.value = response.data
    })
    .catch((error) => {
      console.error(error)
      resultText.value.title = '错误'
      resultText.value.msg = error.response.data.msg || '未知错误'
    })
}
