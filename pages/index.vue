<template>
  <div>
    <article>
      <BlogCards
        :blogs="results"
        :section="name"
        :noofblogs="noOfBlogs"
        :politics="blogsPoliticsLength"
        :economics="blogsEconomicsLength"
        :education="blogsEducationLength"
        :others="blogsOthersLength"
      />
    </article>
  </div>
</template>

<script>
import BlogCards from '~/components/blogCardLayoutHome.vue'
import blogsEnPolitics from '~/docs/en/politics/blogsEn.js'
import blogsTaPolitics from '~/docs/ta/politics/blogsTa.js'
import blogsEnEconomics from '~/docs/en/economics/blogsEn.js'
import blogsTaEconomics from '~/docs/ta/economics/blogsTa.js'
import blogsEnEducation from '~/docs/en/education/blogsEn.js'
import blogsTaEducation from '~/docs/ta/education/blogsTa.js'
import blogsEnOthers from '~/docs/en/others/blogsEn.js'
import blogsTaOthers from '~/docs/ta/others/blogsTa.js'
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
  const blogsPolitics = store.state.locale === 'en' ? blogsEnPolitics : blogsTaPolitics
  const blogsPoliticsLength = blogsPolitics.length
  const blogsEconomics = store.state.locale === 'en' ? blogsEnEconomics : blogsTaEconomics
  const blogsEconomicsLength = blogsEconomics.length
  const blogsEducation = store.state.locale === 'en' ? blogsEnEducation : blogsTaEducation
  const blogsEducationLength = blogsEducation.length
  const blogsOthers = store.state.locale === 'en' ? blogsEnOthers : blogsTaOthers
  const blogsOthersLength = blogsOthers.length

  const page = await import(`~/docs/${store.state.locale}/index.md`)
  const fileContent = fm(page.default)
  const attributes = fileContent.attributes
  async function asyncImport (blogNamePolitics/* , blogNameEconomics */) {
      const wholeMDPolitics = await import(`~/docs/${store.state.locale}/politics/${blogNamePolitics}.md`)
      const resPolitics = fm(wholeMDPolitics.default)
      return resPolitics.attributes
    }
  async function asyncImport2 (blogNameEconomics) {
      const wholeMDEconomics = await import(`~/docs/${store.state.locale}/economics/${blogNameEconomics}.md`)
      const resEconomics = fm(wholeMDEconomics.default)
      return resEconomics.attributes
    }
  async function asyncImport3 (blogNameEducation) {
      const wholeMDEducation = await import(`~/docs/${store.state.locale}/education/${blogNameEducation}.md`)
      const resEducation = fm(wholeMDEducation.default)
      return resEducation.attributes
    }
  async function asyncImport4 (blogNameOthers) {
      const wholeMDOthers = await import(`~/docs/${store.state.locale}/others/${blogNameOthers}.md`)
      const resOthers = fm(wholeMDOthers.default)
      return resOthers.attributes
    }
  return Promise.all(blogsPolitics.map(blog => asyncImport(blog)).concat(blogsEconomics.map(blog2 => asyncImport2(blog2)).concat(blogsEducation.map(blog3 => asyncImport3(blog3))).concat(blogsOthers.map(blog4 => asyncImport4(blog4)))))
    .then((results) => {
      return {
        results,
        title: attributes.title,
        description: attributes.desc,
        date: attributes.date,
        noMainImage: attributes.noMainImage,
        content: md.render(fileContent.body),
        name: attributes.name,
        imgDesc: attributes.imgDesc,
        altLang: attributes.altLang,
        blogsPoliticsLength,
        blogsEconomicsLength,
        blogsEducationLength,
        blogsOthersLength,
        noOfBlogs: results.length
      }
    })
    },
  data () {
    return {

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
          href: `${process.env.baseUrl + (this.altLanguage[0].code === 'en' ? '' : '/ta')}`,
          hreflang: this.altLanguage[0].code
        }
      }
    },
    /* mounted: {
      googleAnalytics () {
        return this.$config.googleAnalytics.id
      }
    }, */
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

<style lang="scss">

</style>
