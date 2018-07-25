<template>
  <div class='swiper'>
    <swiper
      :indicator-dots='true'
      indicator-color='#EA5A49'
      :autoplay='true'
      :interval='6000'
      :duration='1000'
      :circular='true'
    >
      <div :key='imgindex' v-for='(top,imgindex) in tops'>
        <swiper-item>
          <img
            @click='productDetail(top)'
            class='slide-image'
            mode='scaleToFill'
            :src="top.pic_top"
            >
        </swiper-item>
      </div>

    </swiper>
  </div>
</template>

<script>
export default {
  props: ['tops'],
  methods: {
    productDetail (item) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + item.id
      })
    }
  }

}
</script>
<style lang="scss">
.swiper{
  margin-top:5px;
  .slide-image{
    width:100%;
    height:350rpx;
  }
}
</style>

