export const constantRouter = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', //命名路由
    meta: {
      title: '登录', //登录标题
      hidden: true, //是否在菜单隐藏 true:隐藏 false:不隐藏
      icon: 'Loading'
    },
    children: [
      {
        path: '/home_one',
        component: () => import('@/layout/index.vue'),
        name: 'home', //命名路由
        meta: {
          title: '登录子',
          hidden: true,
          icon: 'Loading'
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
      title: '首页', //登录标题
      hidden: false,
      icon: 'HomeFilled'
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home', //命名路由
        meta: {
          title: '首页',
          hidden: false,
          icon: 'User'
        }
      }
    ]
  },
  {
    //登录成功后展示数据的路由
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'acl', //命名路由
    meta: {
      title: '权限管理', //登录标题
      hidden: false,
      icon: 'Lock'
    },
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/user/index.vue'),
        name: 'user', //命名路由
        meta: {
          title: '用户',
          hidden: false,
          icon: 'User'
        }
      },
      {
        path: '/test',
        component: () => import('@/views/test/index.vue'),
        name: 'test', //命名路由
        meta: {
          title: '测试',
          hidden: false,
          icon: 'More'
        }
      }
    ]
  },
  {
    //登录成功后展示数据的路由
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'screen', //命名路由
    meta: {
      title: '权限管理', //登录标题
      hidden: false,
      icon: 'Lock'
    }
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
