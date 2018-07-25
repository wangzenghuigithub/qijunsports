<template>
  <div>
    <div v-html="detail"></div>
    <Companyinfo></Companyinfo>
  </div>
</template>
<script>
  import Companyinfo from '@/components/Companyinfo'
  import {get} from '@/utils/util'
  // import Vue from 'vue'
export default {
    // props: ['id'],
    components: {
      Companyinfo
    },
    data () {
      return {
        id: '',
        detail: '',
        message: '<div>Hello World<p>appendTo</p></div>'
      }
    },
    methods: {
      async getDetail () {
        console.log(this.id + 'aaa')
        const detail = await get('/weapp/detail', {id: this.id})
        console.log(detail.list[0].detail)
        this.detail = detail.list[0].content
      }
    },
    mounted () {
      this.id = this.$root.$mp.query.id
      // this.setDetail()
      this.getDetail()
    }
  }
</script>
<style lang='scss'>
.pp {
  color: red;
  text-align: right;
}
</style>
