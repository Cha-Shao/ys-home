import axios from 'axios'
import { sha256 } from 'js-sha256'

const login = (username: string, password: string) => {
  if (username === '') {
    window.$message.error('未输入用户名')
  }
  else if (password === '') {
    window.$message.error('未输入密码')
  }
  else {
    axios
      .post('https://sso.elfmc.com/account/login', {
        username,
        password: sha256(password),
      }, {
        withCredentials: true,
      })
      .then((response) => {
        window.$message.success(response.data.msg)
        setTimeout(() => {
          window.location.href = 'https://ys.elfmc.com/'
        }, 1000)
      })
      .catch((error) => {
        window.$message.error(error.response.data.msg)
      })
  }
}

export default login
