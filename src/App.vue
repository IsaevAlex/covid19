<template>
  <div id="app">
    <VWorldMap></VWorldMap>
    <router-view/>
  </div>
</template>

<script>
import VWorldMap from '@/components/v-world-map'
export default {
  components: {
    VWorldMap
  }
}
</script>

<style lang="scss">

</style>
