<template>
  <div class="container mb-5">
    <div class="row mt-3">
      <div class="col d-flex align-items-center justify-content-end">
        <div class="small">Copyright © {{ new Date().getFullYear() }} US ProSoft</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';
  
</style>
