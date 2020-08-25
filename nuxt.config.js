const baseUrl = 'http://thedatatalks.in';
export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || 'Blogs of politics, economics, education & others',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'robots', content: 'index, follow' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Arima+Madurai&display=swap"},
      {href:"https://fonts.googleapis.com/css2?family=Pavanam&display=swap", rel: "stylesheet"}
    ],
    script: [ ]
  },
  env: {
    baseUrl
  },
  loading: { color: 'cyan' },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js', '~/plugins/globalComponents', '~/plugins/lazyload', {src: '~plugins/social.js', ssr: true}, { src: '~plugins/ga.js', ssr: false }],
  generate: {
    routes: ['/', '/about', '/ta', '/ta/about']
  },
  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/style.scss'
  ],
  modules: [
    '@nuxtjs/pwa', '@nuxtjs/sitemap',
    'vue-social-sharing/nuxt', ['nuxt-fontawesome', {imports: [{set: '@fortawesome/free-solid-svg-icons', icons: ['fas']}, {set:'@fortawesome/free-brands-svg-icons', icons: ['fab']}]},
    ['@nuxtjs/google-gtag', { /* module options */ }], ['@nuxtjs/google-tag-manager', { }], '@nuxtjs/google-adsense'
  ]
    /* ['nuxt-i18n', I18N], */
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  build: {
     extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      })
      config.module.rules
        .filter(r => r.test.toString().includes("svg"))
        .forEach(r => {
          r.test = /\.(png|jpe?g|gif|svg)$/;
       })
      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader"
      })
    }
  },
  robots: {
    UserAgent: '*',
    Allow: '/'
  },
  'google-adsense': {
    id: 'ca-pub-3042269102042405'
  },
  'google-gtag':{
    id: 'UA-144761111-2', // required
    config:{
      // this are the config options for `gtag
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      anonymize_ip: true, // anonymize IP 
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker:{
        domains:['thedatatalks.in']
      }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...)
    // optional you can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)
    additionalAccounts:[{
      id: 'GTM-57HSHXZ', // required if you are adding additional accounts
      config:{
        anonymize_ip: true,
        send_page_view:false,
        linker:{
          domains:['thedatatalks.in']
        }
        // optional configurations
      },
      debug: true, 
      disableAutoPageTrack: false,
    }]
   },
   sitemap:{ 
    /* hostname: 'http://thedatatalks.in', */
    lastmod: '2020-04-09',
    sitemaps: [
      {
        path: '/sitemap-en.xml',
        routes: [ 
        '/','/about', '/contact', '/disclaimer', '/privacy', '/politics', '/economics', '/education', '/others',
        '/politics/over-view-of-indian-parliamentary-results',
        '/politics/political-spectrum',
        '/politics/vote-share-and-growth',
        '/politics/electors-voters-details',
        '/politics/political-alliances-of-india',
        '/politics/delhi-over-view-of-legislative-results',
        '/politics/delhi-electors-voters-details',
        '/politics/constitution',
        '/politics/delhi-vote-share-and-growth',
        '/politics/tn-electors-voters-details',
        '/politics/tn-over-view-of-legislative-results',
        '/politics/tn-vote-share-and-growth',
        '/politics/leftism',
        '/politics/rightism',
        '/politics/centrism',
        '/politics/bjp-major-milestone',
        '/politics/inc-major-milestone',
        '/politics/tamil-nadu-2001-legislative-election',
        '/politics/tamil-nadu-2006-legislative-election',
        '/politics/tamil-nadu-2011-legislative-election',
        '/politics/tamil-nadu-2016-legislative-election',
        '/economics/analysis-on-imports-and-exports-of-india',
        '/economics/imports-of-india',
        '/economics/exports-of-india',
        '/economics/nifty50-10year-bond-yield',
        '/economics/compound-interest',
        '/economics/recurring-deposit',
        '/economics/reinvestment-deposit-scheme',
        '/others/gun-powder-chicken',
        '/others/garlic-sauteed-vegetables',
        '/others/sponge-cake',
        '/others/murgh-cheese-kebab',
        '/education/pm25-tn-chennai-alandur',
        '/education/pm25-tl-hyderabad-sanathnagar',
        '/education/covid19-corona-virus-world-data',
        '/education/covid19-corona-virus-india-data',
        '/education/covid19-corona-virus-china-data',
        '/education/nginx-pm2-nuxtjs',
        '/education/standard-deviation-and-error',
        '/education/uniform-distribution',
        '/education/bernouli-distribution-binomial-trials',
        '/education/p-value'

        ]
      },
      {
        path: '/sitemap-ta.xml',
        routes: [ 
        '/ta/','/ta/about', '/ta/contact', '/ta/disclaimer', '/ta/privacy', '/ta/politics', '/ta/economics', '/ta/education', '/ta/others',
        '/ta/politics/vote-share-and-growth',
        '/ta/politics/over-view-of-indian-parliamentary-results',
        '/ta/politics/political-spectrum',
        '/ta/politics/tn-electors-voters-details',
        '/ta/politics/tn-over-view-of-legislative-results',
        '/ta/politics/tn-vote-share-and-growth',
        '/ta/politics/delhi-over-view-of-legislative-results',
        '/ta/politics/delhi-electors-voters-details',
        '/ta/politics/tamil-nadu-2001-legislative-election',
        '/ta/politics/tamil-nadu-2006-legislative-election',
        '/ta/politics/tamil-nadu-2011-legislative-election',
        '/ta/politics/tamil-nadu-2016-legislative-election',
        '/ta/economics/analysis-on-imports-and-exports-of-india',
        '/ta/economics/nifty50-10year-bond-yield',
        '/ta/economics/compound-interest',
        '/ta/economics/recurring-deposit',
        '/ta/economics/reinvestment-deposit-scheme',
        '/ta/others/naaladiyar',
        '/ta/others/cirupanjamoolam',
        '/ta/others/gun-powder-chicken',  
        '/ta//others/sponge-cake',
        '/ta/others/garlic-sauteed-vegetables',
        '/ta/others/irattaip-pulavargal',
        '/ta/others/kaalamega-pulavar',
        '/ta/others/nanmanikadigai',
        '/ta/others/anjirai-tamizh-ezhuthu',        
        '/ta/education/pm25-tn-chennai-alandur',
        '/ta/education/covid19-corona-virus-world-data',
        '/ta/education/covid19-corona-virus-india-data',
        '/ta/education/covid19-corona-virus-china-data',
        '/ta/education/nginx-pm2-nuxtjs'
        ]
      }
    ]
  }
}
