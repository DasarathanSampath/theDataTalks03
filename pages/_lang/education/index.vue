<template>
  <div>
    <article>
      <BlogCards
        :blogs="blogs"
        :section="name"
        :noofblogs="noOfBlogs"
      />
    </article>
  </div>
</template>

<script>
import BlogCards from '~/components/blogCardLayout.vue'
import blogsEn from '~/docs/en/education/blogsEn.js'
import blogsTa from '~/docs/ta/education/blogsTa.js'
const fm = require('front-matter')
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})
export default {
  components: {
    BlogCards
  },
  async asyncData ({ route, params, store }) {
      const blogs = params.lang === 'ta' ? blogsTa : blogsEn
      const page = await import(`~/docs/${store.state.locale}/education.md`)
      const fileContent = fm(page.default)
      const attributes = fileContent.attributes
      async function asyncImport (blogName) {
        const wholeMD = await import(`~/docs/${store.state.locale}/education/${blogName}.md`)
        const res = fm(wholeMD.default)
        return res.attributes
      }
      return Promise.all(blogs.map(blog => asyncImport(blog)))
      .then((res) => {
        return {
          blogs: res,
          title: attributes.title,
          description: attributes.desc,
          date: attributes.date,
          noMainImage: attributes.noMainImage,
          content: md.render(fileContent.body),
          name: attributes.name,
          imgDesc: attributes.imgDesc,
          altLang: attributes.altLang,
          noOfBlogs: blogs.length
        }
      })
    },
    computed: {
      ogImage () {
        return `${process.env.baseUrl}/images/${this.name}/_thumbnail.png`
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
