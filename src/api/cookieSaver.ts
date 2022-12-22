import { useRoute } from 'vue-router'

const route = useRoute()

const setCookie = route.query.token

document.cookie = `token=${setCookie}; expires=${new Date()}`
