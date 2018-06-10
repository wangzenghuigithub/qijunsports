<template>
  <div>
    <p>产品ID：{{id}}}</p>
  </div>
</template>
<script>
  export default {
    props: ['id'],
    methods: {
      test () {
        console.log('aaa')
      }
    }
  }
</script>
<style lang='scss'>


</style>
