<template>
  <div>
    <ShareNetwork
      network="facebook"
      :url="'http://thedatatalks.in'+$route.path"
      :title="title"
      :description="description"
      quote="Don't be in delusion, understand the reality from historical data"
      hashtags="theDataTalks"
      :img="'http://thedatatalks.in/images/'+section+'/'+name+'/_thumbnail.png'"
    >
      <font-awesome-icon :icon="['fab', 'facebook']" />
    </ShareNetwork>
    <ShareNetwork
      network="twitter"
      :url="'http://thedatatalks.in'+$route.path"
      :title="title"
      :description="description"
      quote="Don't be in delusion, understand the reality from historical data"
      hashtags="theDataTalks"
      :img="'http://thedatatalks.in/images/'+section+'/'+name+'/_thumbnail.png'"
    >
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </ShareNetwork>
    <ShareNetwork
      network="linkedin"
      :url="'http://thedatatalks.in'+$route.path"
      :title="title"
      :description="description"
      quote="Don't be in delusion, understand the reality from historical data"
      hashtags="theDataTalks"
      :img="'http://thedatatalks.in/images/'+section+'/'+name+'/_thumbnail.png'"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" />
    </ShareNetwork>
  </div>
</template>

<script>
// import Facebook from '~/svgfiles/facebook.svg'
export default {
  components: {
    // Facebook
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    section: {
      type: String,
      required: true
    }
  }

}
</script>
<style scoped>

</style>
