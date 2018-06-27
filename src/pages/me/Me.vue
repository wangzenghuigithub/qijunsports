<template>
  <div class="container">
    <div class="userinfo" @click='login'>
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
  </div>
</template>
<script>
import qcloud from 'wafer2-client-sdk'
import {showSuccess} from '@/utils/util'
import config from '@/utils/config'
export default {
  data () {
    return {
      userinfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: '点击登录'
      }
    }
  },
  methods: {
    login () {
      let user = wx.getStorageSync('userinfo')
      const self = this
      if (!user) {
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: function (userinfo) {
            qcloud.request({
              url: config.userUrl,
              login: true,
              success (userRes) {
                showSuccess('登录成功')
                wx.setStorageSync('userinfo', userRes.data.data)
                self.userinfo = userRes.data.data
              }
            })
          }
        })
      }
    }
  },
  onShow () {
    // console.log(123)
    let userinfo = wx.getStorageSync('userinfo')
    // console.log([userinfo])
    if (userinfo) {
      this.userinfo = userinfo
    }
    // console.log(this.userinfo)
  }
}
</script>

<style lang='scss'>
.container{
  padding:0 30rpx;

}
.userinfo{
  margin-top:100rpx;
  text-align:center;
  img{
    width: 150rpx;
    height:150rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
}


</style>
