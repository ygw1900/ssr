<template>
  <div class="wrap">
    <p>这里是详情页</p>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script>
export default {
 transition: 'bounce',
 asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({})
      }, 0)
    })
  
  },
  head: {
    title: '详情页'
  }
}
</script>
<style scoped>
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px
}
</style>