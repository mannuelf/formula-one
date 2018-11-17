<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <slot>{{ name }}</slot>
          </h1>
          <h2 class="subtitle">
            <slot>{{ message }}</slot>
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',
  props: {
    site_name: name,
    message: message
  }
}
</script>

