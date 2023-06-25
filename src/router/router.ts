export const constantRouter = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login' //命名路由
  },
  {
    //登录成功后展示数据的路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout' //命名路由
  },
  {
    //登录成功后展示数据的路由
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404' //命名路由
  },
  {
    //登录成功后展示数据的路由
    path: '/:patchMatch(.*)*',
    redirect: '/404',
    name: 'Any'
  }
]
