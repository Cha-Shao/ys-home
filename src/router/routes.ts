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
  }, {
    path: 'register',
    component: () => import('../components/SSO/register.vue'),
  }, {
    path: 'check_email',
    component: () => import('../components/SSO/checkEmail.vue'),
  }, {
    path: 'confirm_account',
    component: () => import('../components/SSO/confirmAccount.vue'),
  }, {
    path: 'authorized_login',
    component: () => import('../components/SSO/authorizedLogin.vue'),
  }, {
    path: 'authorizes',
    component: () => import('../components/SSO/authorizes.vue'),
  }],
}]
