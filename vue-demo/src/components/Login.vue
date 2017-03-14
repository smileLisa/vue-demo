<template>
 <el-row class="content">
    <el-input v-model="name" placeholder="账号" type="text"></el-input>
 </el-row>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: '',
      password_r: '',
      inOut: true,
      tips: '请输入密码'
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
