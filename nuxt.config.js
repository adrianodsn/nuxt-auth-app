module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-auth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
      }
    ]
  },

  mode: 'universal',
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  axios: {
    baseURL: 'http://localhost:8000'
  },

  auth: {
    localStorage: false,
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/profile'
    },
    strategies: {
      // local: {
      //   token: {
      //     property: 'access_token',
      //   }
      // },
      // localRefresh: {
      //   scheme: 'refresh',
      //   token: {
      //     property: 'access_token',
      //     maxAge: 15
      //   },
      //   refreshToken: {
      //     property: 'access_token',
      //     maxAge: false
      //   }
      // },
      laravelJWT: {
        provider: 'laravel/jwt',
        url: '/',
        endpoints: {
          login: {
            url: '/api/auth/login'
          },
          refresh: {
            url: '/api/auth/refresh'
          },
          logout: {
            url: '/api/auth/logout'
          },
          user: {
            url: '/api/auth/user'
          }
        }
      },
    }
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: 'auth/login', method: 'post', propertyName: 'data.access_token' },
  //         user: { url: 'auth/me', method: 'get', propertyName: 'data' },
  //         logout: false
  //       }
  //     }
  //   }
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
