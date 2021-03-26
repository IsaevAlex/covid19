<template>
  <div id="app">
    <vWorldMap></vWorldMap>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import vWorldMap from '@/components/v-world-map'
export default {
  components: {
    vWorldMap
  },
  mounted () {
    this.getSummary()
  },
  methods: {
    ...mapActions(['GET_SUMMARY']),
    async getSummary () {
      try {
        await this.GET_SUMMARY()
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
