<template>
 <el-row class="content">
    <el-col :span="12" :offset="6">
      <el-input v-model="name" placeholder="账号" type="text"></el-input>
    </el-col>
    <el-col :span="12" :offset="6">
      <el-popover
            placement="right"
            title="标题"
            width="200"
            trigger="focus" >
              <el-input v-model="password" placeholder="密码" type="text" Slot="reference"></el-input>
            </el-popover>
    </el-col>


    <el-col :span="12" :offset="6">
      <el-input v-model="password_r" placeholder="确认密码" type="text"></el-input>
    </el-col>
     <el-col :span="12" :offset="6">
      <el-button @click="login">注册</el-button>
     </el-col>
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
  },
  watch: {
    password: function(val,oldVal){
        console.log(val,oldVal)
    },
    password_r: function () {
          if(this.password_r ==''){
            this.tips="输入密码啊"
          }
          else if(this.password_r != this.password)
          {
            this.tips="两次密码不一样哦"
          }
          else
            this.tips="对接成功，可以注册了"
        }
  },
   methods: {
     login() {
       this.$message({
                message:  `欢迎${this.name}同学`,
                type: 'success'
              })
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
