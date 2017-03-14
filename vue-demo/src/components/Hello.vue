<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Please Smile</h2>
    <ul>
      <li v-for="item in navLink"><a href="https://vuejs.org" target="_blank">{{ item.link }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'My First Vue-demo',
      navLink: [
        {link: 'pageHome'},
        {link: 'pageSec'},
        {link: 'pageThird'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
