<template>
  <div class="a">
    <TopSwiper :tops='tops'></TopSwiper>
    <Card :key='product.id' v-for='product in products' :product='product'></Card>
    <p class='text-footer' v-if='!more'>
      没有更多数据
    </p>
  </div>
</template>
<script>
  import {get} from '@/utils/util'
  import Card from '@/components/Cards'
  import TopSwiper from '@/components/TopSwiper'
  export default {
    components: {
      Card,
      TopSwiper
    },
    data () {
      return {
        products: [],
        page: 0,
        more: true,
        tops: []
      }
    },
    methods: {
      async getList (init) {
        if (init) {
          this.page = 0
          this.more = true
        }
        wx.showNavigationBarLoading()
        const products = await get('/weapp/productlist', {page: this.page})
        if (products.list.length < 5 && this.page > 0) {
          this.more = false
        }
        if (init) {
          this.products = products.list
          wx.stopPullDownRefresh()
        } else {
          this.products = this.products.concat(products.list)
        }
        wx.hideNavigationBarLoading()
      },
      async getTop () {
        const tops = await get('/weapp/top')
        this.tops = tops.list
      }
    },
    onPullDownRefresh () {
      // console.log('刷新')
      this.getList(true)
      this.getTop()
    },
    onReachBottom () {
      console.log('加载')
      if (!this.more) {
        return false
      }
      this.page = this.page + 1
      this.getList()
    },
    mounted () {
      this.getList(true)
      this.getTop()
    }
  }
</script>
<style lang="scss">
  .text-footer{
    text-align: center;
    font-size: 12px;
  }

</style>
