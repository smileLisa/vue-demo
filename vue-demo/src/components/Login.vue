<template>
 <el-row class="content">
   <el-col :span="12" :offset="6">
     <el-switch v-model="value1" on-color="#13ce66" off-color="#ff4949"></el-switch>
   </el-col>
    <el-col :span="12" :offset="6">
      <el-input v-model="name" placeholder="账号" type="text"></el-input>
    </el-col>
   <el-col :span="12" :offset="6" v-if="value1 === true">
     <el-input v-model="password" placeholder="密码" type="text"></el-input>
   </el-col>
   <el-col :span="12" :offset="6">
     <el-button type="primary" @click="pop">提交</el-button>
   </el-col>

 </el-row>
</template>

<script>
export default {
  data () {
    return {
      value1: true,
      name: '',
      password: '',
      password_r: '',
      inOut: true,
      tips: '请输入密码'
    }
  },
  watch:{
      name : function(val,oldVal) {
          console.log('new: %s,old: %s',val,oldVal);
      }
  },
  methods: {
      pop () {
          this.$message('请输入账号');
          console.log(this.type);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.el-input {
   margin:10px 0;
}
</style>
