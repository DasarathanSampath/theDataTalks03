<template>
  <div>
    <!-- eslint-disable -->
    <div>
      <nuxt-link :to="$i18n.path('')">  
        <ImageResponsive :image-u-r-l="'icon.png'" :height="'75%'" :width="'75%'" :class="'logoImg'"/>
      </nuxt-link>
    </div>
    <div class="header">      
      <nuxt-link :to="$i18n.path('')" class="logo">  
          <span v-html="$t('links.home')"/>
      </nuxt-link>
      <nuxt-link :to="$i18n.path('politics')" class="headerMenu"> <span v-html="$t('links.politics')" /> </nuxt-link>
      <nuxt-link :to="$i18n.path('economics')" class="headerMenu"> <span v-html="$t('links.economics')" /> </nuxt-link>
      <nuxt-link :to="$i18n.path('education')" class="headerMenu"> <span v-html="$t('links.education')" /> </nuxt-link>
      <nuxt-link :to="$i18n.path('others')" class="headerMenu"> <span v-html="$t('links.others')" /> </nuxt-link>
    </div>
    <div class="languageSelect">
      <NuxtLink v-if="$i18n.locale === 'en'" :to="`/ta` + $route.fullPath" class="languageText" active-class="none" exact>
            {{ $t('links.tamil') }}
          </NuxtLink>
          <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="languageText" active-class="none" exact>
            {{ $t('links.english') }}
          </NuxtLink>
  </div>
</div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    computed: {
    availableLocales () {
    return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  }
}

}
</script>

<style lang="scss">
.header{
  margin-left: 1rem;
  border-bottom: solid;
  border-color: darkgray;
  padding: 1rem 0rem 0rem 0rem;
  @media only screen and (max-width: 800px){
    margin-left: 0rem;
  }
}
.headerMenu{
  padding: 0rem 1.25rem 0rem 0.5rem;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 900;
  color: black;

  @media only screen and (max-width: 1024px){
    font-size: 1.1375rem;
    padding: 0rem 1.25rem 0rem 1rem;
  }
  @media only screen and (max-width: 800px){
    font-size: 1rem;
    padding: 0rem 0.5rem 0rem 1rem;
  }
  @media only screen and (max-width: 640px){
    font-size: 1rem;
    padding: 0rem 0.25rem 0rem 0.25rem;

  }
}
.languageSelect{
  margin-left: 1rem;
  padding: 5px 10px 5px 0px;
  @media only screen and (max-width: 800px){
    margin-left: 0rem;
  }
}
.languageText{
  text-decoration: none;
  font-weight: 600;
}

.logo{
    font-size: 2rem;
    font-weight: 900;
    color: black;
    text-decoration: none;
    /* float: left; */
    /* display: grid; */
    /* overflow: hidden; */
/*     grid-template-columns: 1fr 1fr;
    display: grid; */
    margin: 0px;
    padding: 0rem 1.5rem 0rem 0rem;
    @media only screen and (max-width: 1024px){
    font-size: 1.75rem;
    padding: 0rem 1rem 0rem 0rem;
    }
    @media only screen and (max-width: 800px){
    font-size: 1.5rem;
    padding: 0rem 0.25rem 0rem 0rem;
    }
    @media only screen and (max-width: 640px){
    /* font-size: 1.25rem;
    padding: 0rem 0.1rem 0rem 0rem; */
    display: none;
    }
  }

</style>
