<template>
  <div style="width: 100%;height: 100%">
    <map
      id="myMap"
      style="width: 100%;height: 750px"
      :latitude="latitude"
      :longitude="longitude"
      :markers="markers"
      :covers="covers"
      show-location
    ></map>
  </div>
</template>

<script>
  const latitude = 23.099994
  const longitude = 113.324520
  export default {
    data () {
      return {
        latitude: latitude,
        longitude: longitude,
        // markers: [{
        //   id: 1,
        //   latitude: latitude,
        //   longitude: longitude,
        //   name: 'T.I.T 创意园'
        // }],
        covers: [{
          latitude: latitude,
          longitude: longitude,
          iconPath: '../../static/img/location.png'
        }
        //   {
        //   latitude: latitude,
        //   longitude: longitude
        //   // iconPath: '../../static/img/location.png'
        // }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
