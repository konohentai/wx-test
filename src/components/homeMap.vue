<template>
  <div>
    <map
      id='map'
      :longitude='longitude'
      :latitude='latitude'
      scale='13'
      :controls='controls'
      bindcontroltap='controltap'
      :markers='markers'
      bindmarkertap='markertap'
      :polyline='polyline'
      bindregionchange='regionchange'
      show-location
      style='width: 100%; height: 300px;'
    ></map>
  </div>
</template>
<script>
export default {
  data () {
    return {
      markers: [
        {
          iconPath: '/static/images/mp.svg',
          id: 0,
          latitude: 23.099994,
          longitude: 113.32452,
          width: 40,
          height: 40
        }
      ],
      polyline: [
        {
          points: [
            {
              longitude: 113.3245211,
              latitude: 23.10229
            },
            {
              longitude: 113.32452,
              latitude: 23.21229
            }
          ],
          color: '#58bc58bc',
          width: 2,
          dottedLine: true
        }
      ],
      controls: [
        {
          id: 1,
          iconPath: '/static/images/地图.svg',
          position: {
            left: 0,
            top: 300 - 50,
            width: 50,
            height: 50
          },
          clickable: true
        }
      ],
      longitude: '',
      latitude: ''
    }
  },
  methods: {
    regionchange (e) {
      console.log(e.type)
    },
    markertap (e) {
      console.log(e.markerId)
    },
    controltap (e) {
      console.log(e.controlId)
    }
  },
  created () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.latitude = res.latitude
        this.longitude = res.longitude
        // const speed = res.speed
        // const accuracy = res.accuracy
        console.log(this.longitude)
      }
    })
  }
}
</script>

