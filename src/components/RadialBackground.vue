<template>
  <div>
    <div class="radial-background" />
  </div>
</template>

<style lang="css">
.radial-background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: transparent;
  background-image: radial-gradient(
    circle at top left,
    rgba(255, 255, 255, 1) 30%,
    rgba(255, 255, 255, 0.3) 90%
  );
}
</style>
<script>
export default {
  name: 'RadialBackground'
}
</script>
