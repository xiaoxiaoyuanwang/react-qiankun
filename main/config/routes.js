export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './TableList',
              },
              {
                name: '微服务1',
                icon: 'table',
                path: '/app1',
                microApp: 'app1',
                routes: [
                  {
                    name: '微服务1List',
                    path: '/app1/list',
                  },
                  {
                    name: '微服务1Welcome',
                    path: '/app1/welcome',
                  }
                ]
              },
              {
                name: '微服务2',
                icon: 'table',
                path: '/app2',
                microApp: 'app2',
                routes: [
                  {
                    name: '微服务2List',
                    path: '/app2/list',
                  },
                  {
                    name: '微服务2Welcome',
                    path: '/app2/welcome',
                  }
                ]
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
