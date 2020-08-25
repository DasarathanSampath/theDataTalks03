<template>
  <div>
    <ul style="padding: 0; list-style-type: none;">
      <div class="blogLayout">
        <div>
          <li v-for="blog in blogs.slice(0,Math.round(noofblogs/3))" :key="blog.name" :blog="blog" class="blogList">
            <!-- <nuxt-link :to="$i18n.path(`${blog.name}`)" class="nuxtLink"> -->
            <nuxt-link :to="$i18n.path(`${section}/${blog.name}`)" class="nuxtLink">
              <div class="blogCardH">
                <div class="blogCardH__image">
                  <ImageResponsive :image-u-r-l="`${section}/${blog.name}/_thumbnail.png`" />
                </div>
                <div class="blogCardH__text">
                  <h1 class="blogCard__title">
                    {{ blog.title }}
                  </h1>
                  <h2 class="blogCard__desc">
                    {{ blog.desc }}
                  </h2>
                  <h1 class="blogCard__date">
                    {{ blog.date }}
                  </h1>
                  <h2 class="blogCard__desc">
                    {{ blog.imgDesc }}
                  </h2>
                </div>
              </div>
            </nuxt-link>
          </li>
        </div>
        <div>
          <li v-for="blog in blogs.slice(Math.round(noofblogs/3),Math.round(1.75*noofblogs/3))" :key="blog.name" :blog="blog" class="blogList">
            <nuxt-link :to="$i18n.path('custom/economics/compound-interest')" class="nuxtLink">
              <div class="blogCardV2">
                <ImageResponsive :image-u-r-l="`custom/economics/compound-interest/_thumbnail.png`" :width="'50%'" />
                <h1 class="blogCard__title">
                  Compound Interest <br> கூட்டு வட்டி
                </h1>
                <h2 class="blogCard__desc">
                  Calculator <br> கணக்கி
                </h2>
              </div>
            </nuxt-link>
            <nuxt-link :to="$i18n.path('custom/economics/recurring-deposit')" class="nuxtLink">
              <div class="blogCardV2">
                <ImageResponsive :image-u-r-l="`custom/economics/recurring-deposit/_thumbnail.png`" :width="'50%'" />
                <h1 class="blogCard__title">
                  Recurring Deposit <br> தொடர் வைப்பு
                </h1>
                <h2 class="blogCard__desc">
                  Calculator <br> கணக்கி
                </h2>
              </div>
            </nuxt-link>
            <nuxt-link :to="$i18n.path(`${section}/${blog.name}`)" class="nuxtLink">
              <div class="blogCardV">
                <ImageResponsive :image-u-r-l="`${section}/${blog.name}/_thumbnail.png`" :width="'50%'" />
                <h1 class="blogCard__title">
                  {{ blog.title }}
                </h1>
                <h2 class="blogCard__desc">
                  {{ blog.desc }}
                </h2>
                <h1 class="blogCard__date">
                  {{ blog.date }}
                </h1>
              </div>
            </nuxt-link>
          </li>
        </div>
        <div>
          <li v-for="blog in blogs.slice(Math.round(1.75*noofblogs/3),noofblogs)" :key="blog.name" :blog="blog" class="blogList">
            <nuxt-link :to="$i18n.path(`${section}/${blog.name}`)" class="nuxtLink">
              <div class="blogCardV2">
                <h1 class="blogCard__title">
                  {{ blog.title }}
                </h1>
                <h2 class="blogCard__desc">
                  {{ blog.desc }}
                </h2>
              </div>
            </nuxt-link>
          </li>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    blogs: {
      type: Array,
      required: true
    },
    section: {
      type: String,
      required: true
    },
    noofblogs: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss">

</style>
