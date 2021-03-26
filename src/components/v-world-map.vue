<template>
  <div class="worldmap">
    <world-map-vue
      :country-data="countryData"
      :show-overlay="showMapOverlay"
      @mouseenter="onMouseEnterMapCountry"
      @mouseleave="onMouseLeaveMapCountry"
    >
      <template v-slot:overlay>
        <p>{{ contryInfo }}</p>
      </template>
    </world-map-vue>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import worldMapVue from 'world-map-vue'
export default {
  name: 'v-world-map',
  components: {
    worldMapVue
  },
  data () {
    return {
      countryData: {
        US: '#2200AA',
        CA: 'red',
        UK: 'rgba(200, 200, 255, 0.1)'
      },
      showMapOverlay: false,
      contryInfo: {}
    }
  },
  computed: {
    ...mapGetters([
      'GET_SUMMARY_COUNTRIES'
    ])
  },
  methods: {
    onMouseEnterMapCountry (countryCode) {
      this.showMapOverlay = true
      this.contryInfo = this.GET_SUMMARY_COUNTRIES.find(x => x.countryCode === countryCode)
    },
    onMouseLeaveMapCountry () {
      this.showMapOverlay = false
    }
  }
}
</script>

<style scoped>

</style>
