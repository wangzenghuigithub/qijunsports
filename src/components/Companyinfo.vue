<template>
    <div class="companyinfo">
      <p class="title">门店信息</p>
      <p class="companyName">奇骏运动综合健身馆</p>
      <p class="companyAddress">公司地址：</p>
      <p class="Address" style="display: inline">青岛市市南区东海西路五四广场
        <a :href="map" style="display: inline">
        <img class="im" src="../../static/img/position.png" :href="map">
        </a>
      </p>
      <p class="companyAddress">预约电话：</p>
      <p class="Address">{{phoneNumber1}}

          <img class="im" src="../../static/img/phone.png"  @click="phoneMethod"  >


      </p>
      <p class="companyAddress">交通方式：</p>
      <p class="Address">
        乘坐地铁二号线三号线，23路、11路公交直达
      </p>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        phoneNumber1: '0532-08886243'
      }
    },
    computed: {
      map () {
        return '/pages/map/main'
      }
    },
    methods: {
      async phoneMethod () {
        wx.makePhoneCall({
          phoneNumber: '15764219742'
        })
      }
    }
  }
</script>

<style scoped>
  .companyinfo{
    box-shadow: 0 2px 3px 2px rgba(0,0,0,0.03);
    margin-bottom: 30px;
    padding-bottom: 30px;
  }
.title{
  text-align: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #919191;
  font-size: 16px;
}
  .companyName{
    font-size: 24px;
    margin-left: 30px;
    margin-top: 20px;
    font-weight: bold;
  }
  .companyAddress{
    font-size: 12px;
    margin-left: 30px;
    margin-top: 20px;
    color:#919191 ;
  }
  .Address{
    font-size: 16px;
    margin-left: 30px;
  }
  .im{
    float: right;
    width:20px;
    height:20px;
    margin-right: 50px;
  }
</style>
