<template>
  <div class="container">
    <h2>新闻列表</h2>
    <ul class="users">
      <li v-for="user in users" :key="user.id">
        <nuxt-link to="/users">{{ user.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  transition: 'bounce',
  async asyncData() {
    // const { data } = await axios.get('http://localhost:8081/getdata')
    // console.log(data)
    return { users: '123' }
  },

}
</script>

<style scoped>
.container {
  text-align: center;
  /* margin-top: 100px; */
  font-family: sans-serif;
}
/* li{
  text-decoration: none;
} */
.users {
  list-style-type: none;
}
.users li a {
  display: inline-block;

  /* border: 1px #ddd solid; */
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.users li a:hover {
  color: orange;
}
</style>