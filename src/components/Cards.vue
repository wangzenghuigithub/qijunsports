<template>
  <a :href="detailUrl">
    <div class="product-card">
      <div class="thumb" @click.stop="preview">
        <img :src="product.thumbnail"
             class="img"
             mode="scaleToFill"
        />
      </div>
      <div class="detail">
        <div class="row text-primary">
          <div class="name">
            {{product.title}}
          </div>
        </div>
        <div class="row">
          <div class="text-people text-primary">
            游戏人数:{{people}}人
          </div>
        </div>
        <div class="row">
          <div class="text-introduction">
            {{product.describe}}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
  export default {
    data () {
      return {
        people: ''
      }
    },
    props: ['product'],
    computed: {
      detailUrl () {
        return '/pages/detail/main?id=' + this.product.id
      }
    },
    methods: {
      preview () {
        wx.previewImage({
          current: this.product.thumbnail,
          urls: [this.product.thumbnail]
        })
      }
    },
    mounted () {
      if (this.product.min_people_number === this.product.max_people_number) {
        this.people = this.product.min_people_number
      } else {
        this.people = this.product.min_people_number + '~' + this.product.max_people_number
      }
    }
  }
</script>
<style lang='scss' scoped>
  .product-card{
    padding:5px;
    overflow: hidden;
    margin-top:5px;
    margin-bottom:5px;
    font-size:14px;

    .thumb{
      width:150px;
      height:122px;
      float: left;
      margin:0 auto;
      overflow:hidden;
      .img{
        max-width: 100%;
        max-height: 100%;
      }
    }
    .detail{
      height:120px;
      border: 1px solid #919191;
      margin-left: 100px;
      .row{
        line-height:20px;
        margin-bottom:3px;
      }
      .text-introduction{
        margin-top: 5px;
        color:#919191;
        font-size: 12px;
        margin-left: 80px;
      }
      .text-people{
        color:#919191;
        font-size: 10px;
        margin-left: 80px;
      }
      .right{
        float: right;

      }
      .name{
        margin-top: 10px;
        margin-left:80px;
        font-size: 16px;
        color: black;
      }
    }

  }
</style>










