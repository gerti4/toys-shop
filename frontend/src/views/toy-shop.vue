<template class="shops-location-container">
  <GmapMap
    :center="center"
    :zoom="10"
    map-type-id="terrain"
    style="width: 500px; height: 500px; margin-bottom:80px; margin-top:100px;"
    
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    />
  </GmapMap>
</template>

<script>
export default {
  data() {
    return {
      markers: [
        { position: { lat: 	32.109333, lng: 34.855499 } },
        { position: { lat: 	32.017136, lng: 	34.745441 } }
      ],
      center: { lat: 	32.109333, lng: 34.855499 }
    };
  }
};
</script>
