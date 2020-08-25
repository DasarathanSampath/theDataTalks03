<template>
  <div>
    <ul style="padding: 0; list-style-type: none;">
      <div class="blogLayout">
        <div>
          <li v-for="blog in blogs.slice(0,politics)" :key="blog.name" :blog="blog" class="blogList">
            <nuxt-link :to="$i18n.path(`politics/${blog.name}`)" class="nuxtLink">
              <div class="blogCardH">
                <div class="blogCardH__image">
                  <ImageResponsive :image-u-r-l="`politics/${blog.name}/_thumbnail.png`" />
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
          <li v-for="blog in blogs.slice(politics,politics+economics)" :key="blog.name" :blog="blog" class="blogList">
            <nuxt-link :to="$i18n.path(`economics/${blog.name}`)" class="nuxtLink">
              <div class="blogCardV">
                <ImageResponsive :image-u-r-l="`economics/${blog.name}/_thumbnail.png`" :width="'50%'" />
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
          <li v-for="blog in blogs.slice(politics+economics,politics+economics+education)" :key="blog.name" :blog="blog" class="blogList">
            <nuxt-link :to="$i18n.path(`education/${blog.name}`)" class="nuxtLink">
              <div class="blogCardV2">
                <ImageResponsive :image-u-r-l="`education/${blog.name}/_thumbnail.png`" :width="'50%'" />
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
          <li v-for="blog in blogs.slice(politics+economics+education,politics+economics+education+others)" :key="blog.name" :blog="blog" class="blogList">
            <nuxt-link :to="$i18n.path(`others/${blog.name}`)" class="nuxtLink">
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
    politics: {
      type: Number,
      required: true
    },
    economics: {
      type: Number,
      required: true
    },
    education: {
      type: Number,
      required: true
    },
    others: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss">

</style>
