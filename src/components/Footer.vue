<template>
  <div>
    <footer class="footer">
      <div class="content has-text-centered">
        Thank you for visiting {{ site_name }} built by {{ site_author }}
      </div>
    </footer>
  </div>
</template>

<script>
import pkg from 'package'

export default {
  name: 'Footer',
  data() {
    return {
      site_name: pkg.site_name,
      site_author: pkg.author
    }
  }
}
</script>
