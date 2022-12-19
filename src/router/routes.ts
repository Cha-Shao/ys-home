export default [{
  path: '/',
  component: () => import('../components/Index/index.vue'),
}, {
  path: '/sso',
  component: () => import('../components/SSO/index.vue'),
  redirect: '/sso/login',
  children: [{
    path: 'login',
    component: () => import('../components/SSO/login.vue'),
  }],
}]
