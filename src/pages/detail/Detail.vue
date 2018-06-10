<template>
  <div>
    <p>产品ID：{{productid}}</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        productid: ''
      }
    },
    methods: {
      test () {
        console.log('aaa')
      }
    },
    mounted () {
      this.productid = this.$root.$mp.query.id
    }
  }
</script>
<style lang='scss'>


</style>
