<template lang="html">
  <div
    v-lazy-container="{ selector: 'img' }"
  >
    <img
      :data-src="imageRequired"
      :data-loading="imageRequired.placeholder"
      :class="classes"
      :alt="alt"
      :width="width"
      :height="height"
    >
  </div>
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: "'Blog picture'"
    },
    classes: {
      type: String,
      default: 'cardThumbnail'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }

  },
  computed: {
    imageRequired () {
      return require(`@/assets/images/${this.imageURL}`)
    }
  }
}
</script>

<style scoped lang="scss">

.image-placeholder {
  overflow: hidden;

  line-height: 0;
  &--rounded {
    border-radius: 100%;
  }

}

img {
  transition: all ease .3s;
  opacity: 0;
  border-radius: 2%;
  float: left;
  &[lazy='loading'] {
    opacity: 1;
    filter: blur(15px);
  }
  &[lazy='loaded'] {
    opacity: 1;
  }
}

</style>
