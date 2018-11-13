<template>
  <div id="app">
    <app-header-nav />

    <section class="main-content push-top-40">
      <article
        :style="{ height: minScreenHeight+'px' }"
        class="container">
        <transition name="fade">
          <router-view />
        </transition>
      </article>
    </section>

    <app-footer />
  </div>
</template>

<script>
import Bulma from 'bulma'
import MainCss from '@/assets/sass/main.sass'
import AnimateCss from "animate.css"

import HeaderNav from '@/components/HeaderNav'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    appHeaderNav: HeaderNav,
    appFooter: Footer
  },
  data() {
    return {
      minScreenHeight: this.getWindowHeight()
    }
  },
  mounted() {
    this.$nextTick(function() {
      // when mounted and view is rendered call getWindowHeight function
      this.getWindowHeight()
    })
  },
  methods: {
    getWindowHeight: function() {
      // calculate and assign screen height
      let screenHeight = window.height || document.documentElement.clientHeight
      return screenHeight
    }
  }
}
</script>

<style lang="sass">

</style>
