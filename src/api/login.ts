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
      })
      .then((response) => {
        window.$message.success(response.data)
        setTimeout(() => {
          window.location.href = 'https://ys.elfmc.com/sso/check-email'
        }, 1000)
      })
      .catch((error) => {
        window.$message.error(`登录失败，${error}`)
      })
  }
}

export default login
