<template>
  <div class="blogContent">
    <SocialShare :title="title" :description="description" :name="name" section="education" />
    <h1 class="blogCard__title">
      {{ title }}
    </h1>
    <h2 class="blogCard__desc">
      {{ description }}
    </h2>
    <h3 class="blogCard__date">
      {{ date }}
    </h3>
    <!-- eslint-disable-next-line -->
    <span ref="mathJaxEl" class="e-mathjax" v-html="content" />
  </div>
</template>

<script>
import SocialShare from '@/components/social.vue'
const fm = require('front-matter')
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  injected: true,
  breaks: false,
  use: [
    'markdown-it-mathjax',
    'markdown-it-container',
    'markdown-it-attrs'
  ]
})
export default {
  components: {
    SocialShare
  },
    async asyncData ({ store, params, route }) {
      const slug = route.params.slug
      const page = await import(`~/docs/${store.state.locale}/education/${slug}.md`)
      const fileContent = fm(page.default)
      const attributes = fileContent.attributes
      return {
        title: attributes.title,
        description: attributes.desc,
        date: attributes.date,
        noMainImage: attributes.noMainImage,
        content: md.render(fileContent.body),
        name: attributes.name,
        altLang: attributes.altLang
      }
    },

    computed: {
      ogImage () {
        return `${process.env.baseUrl}/images/education/${this.name}/_thumbnail.png`
      },
      pageTitle () {
        return this.title
      },
      currentLanguage () {
        return this.$store.state.langcodes.filter(i => i.code !== this.$store.state.locale)
      },
      hreflang () {
        if (!this.altLang) {
          return ''
        }
        return {
          hid: 'alternate-hreflang-' + this.currentLanguage[0].iso,
          rel: 'alternate',
          href: `${process.env.baseUrl + (this.currentLanguage[0].code === 'en' ? '' : '/ta')}/education/${this.name}`,
          hreflang: this.currentLanguage[0].code
        }
      }
    },
    mounted () {
    this.renderMathJax()
  },
  methods: {
    renderMathJax () {
      if (window.MathJax) {
        window.MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true,
            processEnvironments: true
          },
          displayAlign: 'left',
          'HTML-CSS': {
            styles: { '.MathJax_Display': { margin: 0 } },
            linebreaks: { automatic: true }
          }
        })
        window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, this.$refs.mathJaxEl])
        }
      }
    },
    head () {
      return {
        title: this.pageTitle,
        htmlAttrs: {
          lang: this.$store.state.locale
        },
        meta: [
          { name: 'author', content: 'Dasarathan Sampath' },
          { name: 'description', property: 'og:description', content: this.description, hid: 'description' },
          { property: 'og:title', content: this.pageTitle },
          { property: 'og:image', content: this.ogImage },
          { name: 'twitter:description', content: this.description },
          { name: 'twitter:image', content: this.ogImage }
        ],
        link: [
          this.hreflang
        ],
        script: [
          { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML' }
        ]
      }
    }
}
</script>
<style lang="scss">
.e-mathjax{
    text-align: left;

}
</style>
