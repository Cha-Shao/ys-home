import { ref } from 'vue'

export const isMobile = ref(false)

const checkCilent = () => {
  const flag = window.navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  )
  if (flag)
    isMobile.value = true
}

checkCilent()
