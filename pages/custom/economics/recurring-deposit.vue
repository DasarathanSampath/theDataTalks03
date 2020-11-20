<template>
  <!--  eslint-disable  -->
  <client-only>
  <div >
    <SocialShare :title="title" :description="description" :name="name" section="economics"/>
    <article>
    <div class="thisLayout">
      <h1 class="blogCard__title">
        {{ headA1 }}
        <h2 class="blogCard__desc">
          {{ headA2 }}
        </h2>
      </h1>
      <form @submit.prevent="onSave">
        <AppControlInput v-model="inputValues.monthlyDeposit">
          {{ headA3 }}
        </AppControlInput>
        <AppControlInput v-model="inputValues.period">
          {{ headA4 }}
        </AppControlInput>
        <AppControlInput v-model="inputValues.rateOfInterest">
          {{ headA5 }}
        </AppControlInput>
        <AppControlInput v-model="inputValues.compoundingPeriod" control-type="dropdownbox">
          {{ headA6 }}
        </AppControlInput>
        <div class="result">
          {{ headA7 }}:  {{ inputValues.monthlyDeposit*inputValues.period }}<br>
          {{ headA8 }}: {{ recurringDeposit }} <br>
          {{ headA9 }}: {{ (+recurringDeposit + inputValues.monthlyDeposit*inputValues.period) }}
        </div>
      </form>      
    </div>
    <div >
      <h1 class="blogCard__title">
      {{ title }}
    </h1>
    <h2 class="blogCard__desc">
      {{ description }}
    </h2>
    <h3 class="blogCard__date">
      {{ date }}
    </h3>
      <div v-html="content" />
    </div>
    </article>
  </div>
  </client-only>
</template>

<script>
import SocialShare from '@/components/social.vue'
import AppControlInput from '~/components/AppControlInput.vue'

const fm = require('front-matter')
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})
export default {
    components: {
        AppControlInput,
        SocialShare
    },
    async asyncData ({ store, params, route }) {
      const page = await import(`~/docs/${store.state.locale}/economics/recurring-deposit.md`)
      const fileContent = fm(page.default)
      const attributes = fileContent.attributes
      return {
        title: attributes.title,
        description: attributes.desc,
        date: attributes.date,
        noMainImage: attributes.noMainImage,
        content: md.render(fileContent.body),
        name: attributes.name,
        altLang: attributes.altLang,
        headA1: attributes.headA1,
        headA2: attributes.headA2,
        headA3: attributes.headA3,
        headA4: attributes.headA4,
        headA5: attributes.headA5,
        headA6: attributes.headA6,
        headA7: attributes.headA7,
        headA8: attributes.headA8,
        headA9: attributes.headA9
      }
    },
    data () {
        return {
          inputValues: {
              monthlyDeposit: '',
              period: '',
              rateOfInterest: '',
              compoundingPeriod: 'Monthly',
              result: 0
            }
        }
      },
      computed: {
          CompoundingTimes () {
            let calculatedTimes
              if (this.inputValues.compoundingPeriod === 'HalfYearly') {
                calculatedTimes = 2
              }
              if (this.inputValues.compoundingPeriod === 'Yearly') {
                calculatedTimes = 1
              }
              if (this.inputValues.compoundingPeriod === 'Quarterly') {
                calculatedTimes = 4
              }
              if (this.inputValues.compoundingPeriod === 'Monthly') {
                calculatedTimes = 12
              }
              return calculatedTimes
          },
          recurringDeposit () {
              const cmpPeriod = 12 / this.CompoundingTimes
              let cumulateTime = cmpPeriod + 1
              let cumulateInterest = 0
              let deposit = 0
              let totalInterest = 0
              const interest = this.inputValues.rateOfInterest / 100
              let i
              for (i = 1; i <= this.inputValues.period; i++) {
                if (i === cumulateTime) {
                  deposit = +deposit + +this.inputValues.monthlyDeposit + +cumulateInterest
                  cumulateInterest = 0
                  // eslint-disable-next-line
                  console.log(i)
                  // eslint-disable-next-line
                  /* console.log(deposit) */
                  cumulateTime = cumulateTime + cmpPeriod
                } else {
                  deposit = +deposit + +this.inputValues.monthlyDeposit
                  // eslint-disable-next-line
                  /* console.log(deposit) */
                }
                totalInterest = totalInterest + (deposit * interest / 12)
                // eslint-disable-next-line
                  console.log(totalInterest)
                cumulateInterest = cumulateInterest + (deposit * interest / 12)
              }
              return Math.round(totalInterest)
          },
          ogImage () {
        return `${process.env.baseUrl}/images/custom/economics/${this.name}/_thumbnail.png`
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
          href: `${process.env.baseUrl + (this.altLanguage[0].code === 'en' ? '' : '/ta')}/custom/economics/${this.name}`,
          hreflang: this.altLanguage[0].code
        }
      }

      },

      methods: {
          /* onSave () {
              // eslint-disable-next-line
             console.log(this.editedPost)
          },
          onCancel () {
              this.editedPost.author = ''
          } */
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

<style scoped lang="scss">
.result
{
  display: block;
  width: 80%;
  box-sizing: border-box;
  font: inherit;
  font-weight: bold;
  background-color: lightgray;
  border: 1px solid #ccc;
  padding: 5px;
  text-align: left;
  margin: 10px 40px 10px 10px;
}

.thisLayout{
float: left;
}
</style>
