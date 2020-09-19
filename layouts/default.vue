<template>
  <div>
    <TheHeader />
    <div class="layoutGrid">
      <div>
      <!-- adds by google -->
      </div>

      <div>
        <nuxt />
      </div>

      <div>
      <!-- adds by google -->
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/navigation/TheHeader'
import TheFooter from '~/components/navigation/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  },
  asyncData ({ $config: { id } }) {
    return fetch(`${id}`)
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
