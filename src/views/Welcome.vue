<template>
<div>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
        {{ site_name }}
        </h1>
        <h2 class="subtitle">
        {{ message }}
        </h2>
      </div>
    </div>
  </section>
</div>
</template>
<style lang="sass" scoped>

</style>
<script>
import pkg from 'package'
export default {
  name: 'Welcome',
  data() {
    return {
      site_name: pkg.name,
      message: pkg.description
    }
  }
}
</script>

