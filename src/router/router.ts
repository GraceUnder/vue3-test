export const constantRouter = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', //命名路由
    meta: {
      title: '登录', //登录标题
      hidden: false //是否在菜单隐藏 true:隐藏 false:不隐藏
    },
    children: [
      {
        path: '/home_one',
        component: () => import('@/layout/index.vue'),
        name: 'home', //命名路由
        meta: {
          title: '登录下的首页',
          hidden: false
        }
      }
    ]
  },
  {
    //登录成功后展示数据的路由
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout', //命名路由
    meta: {
      title: 'layout', //登录标题
      hidden: false
    },
    children: [
      {
        path: '/home',
        component: () => import('@/layout/index.vue'),
        name: 'home', //命名路由
        meta: {
          title: '首页',
          hidden: false
        }
      },
      {
        path: '/test',
        component: () => import('@/layout/index.vue'),
        name: 'test', //命名路由
        meta: {
          title: '测试',
          hidden: false
        }
      }
    ]
  },
  {
    //登录成功后展示数据的路由
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404', //命名路由
    meta: {
      title: '404页面', //登录标题
      hidden: true
    }
  },
  {
    //登录成功后展示数据的路由
    path: '/:patchMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '其他页面', //登录标题
      hidden: true
    }
  }
]
