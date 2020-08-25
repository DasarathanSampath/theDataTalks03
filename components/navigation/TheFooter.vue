<template>
  <div>
    <div class="footer">
      <!-- eslint-disable -->
    <nuxt-link :to="$i18n.path('')" class="footerMenu"> <span v-html="$t('links.home')" /> </nuxt-link>
    <nuxt-link :to="$i18n.path(`about`)" class="footerMenu"> <span v-html="$t('links.about')" /> </nuxt-link>
    <nuxt-link :to="$i18n.path('contact')" class="footerMenu"> <span v-html="$t('links.contact')" /> </nuxt-link>
    <nuxt-link :to="$i18n.path('disclaimer')" class="footerMenu"> <span v-html="$t('links.disclaimer')" /> </nuxt-link>
    <nuxt-link :to="$i18n.path('privacy')" class="footerMenu"> <span v-html="$t('links.privacy')" /> </nuxt-link>
  </div>
  <div class="footerSlogan">
    <span v-html="$t('links.slogan')" />
  </div>
</div>
</template>

<script>
export default {
    data () {
        return {

        }
    }

}
</script>

<style lang="scss">
.footer{
  margin-left: 1rem;
  /* border-top: solid; */
  /* margin-right:250px; */
  border-color: darkgray;
  padding: 0rem 0rem 0.1rem 0rem;
/*   @media only screen and (max-width: 1024px){
    margin-right:50px;
  }*/
  @media only screen and (max-width: 800px){
    margin-left: 0rem;
  }
}
.footerMenu{
  padding: 0rem 1.5rem 0rem 0rem;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 900;
  color: black;

  @media only screen and (max-width: 1024px){
    font-size: 1rem;
    padding: 0rem 1rem 0rem 0rem;
  }
  @media only screen and (max-width: 800px){
    font-size: 1rem;
    padding: 0rem 0.25rem 0rem 0rem;
  }
  @media only screen and (max-width: 640px){
    font-size: 0.8rem;
    padding: 0rem 0.25rem 0rem 0rem;
  }
}

.footerSlogan{
  padding: 0rem 0rem 0rem 0rem;
  text-decoration: none;
  /* margin-left: 4rem; */
  text-align: left;
  /* float: left; */
  font-size: 0.8rem;
  font-weight: 900;
  color: black;
  font-style: italic;
  margin-left: 1rem;
  @media only screen and (max-width: 640px){
    font-size: 0.5rem;
    font-style: italic;
  }
}

</style>
