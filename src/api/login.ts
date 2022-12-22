import axios from 'axios'
import { sha256 } from 'js-sha256'

const login = (username: string, password: string, keepLogin: boolean) => {
  if (username === '') {
    window.$message.error('未输入用户名')
  }
  else if (password === '') {
    window.$message.error('未输入密码')
  }
  else {
    axios
      .post('https://sso.elfmc.com/login', {
        username,
        password: sha256(password),
        keepLogin,
      }, {
        withCredentials: true,
      })
      .then((response) => {
        window.$message.success(response.data.msg)
        const token = response.data.token
        let expTime
        if (keepLogin) {
          const expDays = new Date()
          expDays.setTime(expDays.getTime() + (28 * 24 * 60 * 60 * 1000))
          expTime = expDays.toUTCString()
        }
        else { expTime = 0 }
        document.cookie = `uuid=${token};expires=${expTime};path=/`
        setTimeout(() => {
          // window.location.href = 'https://ys.elfmc.com/'
        }, 1000)
      })
      .catch((error) => {
        window.$message.error(error.response.data.msg)
      })
  }
}

export default login
