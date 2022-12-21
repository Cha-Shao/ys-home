import axios from 'axios'
import { sha256 } from 'js-sha256'

const register = (username: string, email: string, password: string, confirmPassword: string) => {
  if (username === '') {
    window.$message.error('未输入用户名')
  }
  else if (username.length > 16) {
    window.$message.error('用户名长度不得超过16位')
  }
  else if (username.match(/[^a-zA-Z0-9]/)) {
    window.$message.error('用户名仅接受字母与数字组合')
  }
  else if (password === '') {
    window.$message.error('未输入密码')
  }
  else if (password.length < 8 || password.length > 16) {
    window.$message.error('密码长度应在8-16位')
  }
  else if (password !== confirmPassword) {
    window.$message.error('两次输入的密码不一致')
  }
  else {
    password = sha256(password)
    axios
      .post('https://sso.elfmc.com/register', {
        username,
        email,
        password,
      })
      .then((response) => {
        window.$message.success(response.data.msg)
      })
      .catch((error) => {
        window.$message.error(error.response.data.msg)
      })
  }
}

export default register
