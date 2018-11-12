<template>
  <div id="app">
    <app-header-nav />

    <section class="main-content">
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
import HeaderNav from '@/components/HeaderNav'
import Footer from '@/components/Footer'
import Bulma from 'bulma'
import MainCss from '@/assets/sass/main.sass'
import Welcome from '@/views/Welcome'

export default {
  name: 'app',
  components: {
    appHeaderNav: HeaderNav,
    appWelcome: Welcome,
    appFooter: Footer
  },
  data() {
    return {
      minScreenHeight: this.getWindowHeight()
    }
  },
  mounted() {
    this.$nextTick(function() {
      // show loading bar between page transitions
      this.getWindowHeight()
    })
  },
  methods: {
    getWindowHeight: function() {
      let height = window.height || document.documentElement.clientHeight
      return height
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.main-content
  z-index: 2
  position: relative
</style>
