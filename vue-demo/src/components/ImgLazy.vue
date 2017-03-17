<template>
  <div class="hello">
    <router-link to="/Login">login</router-link>
    <div class="lazy-wrap">
       <h3>图片懒加载三种形式</h3>

    <ul>
      <li  v-for="img in list">
        <img v-lazy="img">
      </li>
    </ul>
       <ul>
        <li v-for="img in list0">
          <div v-lazy:background-image="img" class="bg-box"></div>
        </li>
       </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     list:[
        './static/0.jpg',
        './static/1.jpg',
        './static/3.jpg',
        './static/4.jpg',
        './static/5.jpg',
        './static/6.jpg',
        './static/7.jpg',
        './static/8.png',
        './static/9.png',
        './static/10.png',
       './static/12.jpg',
       './static/13.jpg',
       './static/14.jpg'
     ],
      list0: [
        './static/00.jpg',
        './static/11.jpg',
        './static/33.jpg',
        './static/44.jpg',
        './static/55.jpg',
        './static/66.jpg',
        './static/77.jpg',
        './static/88.png',
        './static/99.png'
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

.lazy-wrap li {
   display:block;
}

.bg-box {
  width:200px;
  height:200px;
  margin:0 auto 10px;
}
img {
 width:100px;
 height:100px;
}

</style>
