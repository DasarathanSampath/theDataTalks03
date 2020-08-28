<template>
  <section v-show="showError" class="container container-pd text-center">
    <h1 class="title" :class="{'chunkfailed-title' : isChunkLoadingFailed}">
      {{ isChunkLoadingFailed ? 'Page load failed' : error.statusCode }}
    </h1>
    <h2 class="info" :class="{'chunkfailed-info' : isChunkLoadingFailed}">
      {{ isChunkLoadingFailed ? 'The content of this page may have been changed and re-implemented, and the page will be refreshed automatically. If it is not refreshed automatically, your network may be hijacked, please refresh manually and try again' : error.message }}
    </h2>
    <nuxt-link v-if="error.statusCode === 404" class="button" to="/">
      Back to homepage
    </nuxt-link>
  </section>
</template>

<script>

export default {
  props: { error: { type: Array, required: true } },
  data () {
    return {
      showError: false,
      isChunkLoadingFailed: false
    }
  },
  mounted () {
    if (this.error.statusCode === 500 && /^Loading chunk (\d)+ failed\./.test(this.error.message)) {
      this.isChunkLoadingFailed = true
      this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
    }
    this.showError = true
  }
}
</script>

<style lang="scss">
</style>

<style scoped>
.title {
  margin-top: 15px;
  font-size: 5em;
}

.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 20px 0;
}

.chunkfailed-title {
  font-size: 2.5em
}

.chunkfailed-info {
  font-size: 20px;
}
</style>
