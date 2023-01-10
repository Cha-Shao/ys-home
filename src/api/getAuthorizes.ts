import axios from 'axios'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Authorize {
  msg: string
  authorzes: string[]
}

export const authorizeData: Ref<Authorize | null> = ref(null)

const token: string | null = localStorage.getItem('token')
const getAuthorize = (token: string) => {
  axios
    .get('https://sso.elfmc.com/account/get_authorize', {
      params: {
        token,
      },
    })
    .then((resp) => {
      authorizeData.value = resp.data
    })
    .catch((error) => {
      console.error(error)
    })
}

const router = useRouter()
if (token)
  getAuthorize(token)
else
  router.push('/')
