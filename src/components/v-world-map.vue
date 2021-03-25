<template>
  <div class="worldmap">
    <vue-world-map countryStrokeColor="red" id="worldmap"  ></vue-world-map>
  </div>
</template>

<script>
import VueWorldMap from 'vue-world-map'
export default {
  name: 'v-world-map',
  components: {
    VueWorldMap
  }
}
</script>

<style scoped>

</style>
