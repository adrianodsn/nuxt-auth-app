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

  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],

  axios: {
    baseURL: 'http://localhost:8000/api'
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token',
          type: 'Bearer', // `tokenType` is now `token.type`
          required: true // `tokenRequired` is now `token.required`
        },
        refreshToken: {
          property: 'access_token' // change to your refresh token property
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'access_token' },
          refresh: { url: '/auth/refresh', method: 'post', propertyName: 'access_token' }, // change to your refresh token url
          user: { url: 'auth/me', method: 'get', propertyName: 'data' },
          logout: false
        }
      }
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
