<template>
  <div>
    <nav
      class="navbar header is-primary"
      role="navigation"
      aria-label="main navigation">

      <div class="navbar-brand">
          <router-link
          to="/"
          class="navbar-item">
          Formula 1
        </router-link>

        <div class="navbar-menu">
          <div class="navbar-start">
            <!-- Loop through router dynamically create nav items as new routes get written -->
            <router-link
              v-for="route in routes"
              :key="route.path"
              :to="route.path"
              class="navbar-item"
              exact-active-class="is-active">

              {{ route.name }}

            </router-link>

          </div>
        </div>

        <div class="navbar-burger">
          <span/>
          <span/>
          <span/>
        </div>

      </div>

    </nav>
  </div>
</template>
<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      routes: this.$router.options.routes
    }
  }
}
</script>
