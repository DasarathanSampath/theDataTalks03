<template>
  <div class="blogContent">
    <SocialShare :title="title" :description="description" :name="name" section="" />
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
    <div v-html="content" />
  </div>
</template>

<script>

import SocialShare from '@/components/social.vue'

const fm = require('front-matter')
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})
export default {
  components: {
    SocialShare
  },
    async asyncData ({ store, params, route }) {
      const page = await import(`~/docs/${store.state.locale}/disclaimer.md`)
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
        return `${process.env.baseUrl}/icon.png`
      },
      pageTitle () {
        return this.title
      },
      altLanguage () {
        return this.$store.state.langcodes.filter(i => i.code !== this.$store.state.locale)
      },
      hreflang () {
        if (!this.altLang) {
          return ''
        }
        return {
          hid: 'alternate-hreflang-' + this.altLanguage[0].iso,
          rel: 'alternate',
          href: `${process.env.baseUrl + (this.altLanguage[0].code === 'en' ? '' : '/ta')}/${this.name}`,
          hreflang: this.altLanguage[0].code
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
        ]
      }
    }
}
</script>
