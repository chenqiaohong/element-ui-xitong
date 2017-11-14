<template>
  <div class="home">
    <div class="main">
      <div>
        <v-header></v-header>
      </div>
      <div class="left">
        <v-menu></v-menu>
      </div>
      <div class="content">
        <transition name="el-zoom-in-top">
          <router-view v-show="show"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/header'
import leftNav from '../components/leftNav'
  export default{
    data(){
      return{
        show: true
      }
    },
    components:{
      'v-header': Header,
      'v-menu': leftNav
    }
  }
</script>

<style lang="scss">
  @import '../common/scss/element-variables';
  $commonColor: '#20a0ff';
  .home {
    .content {
      position: absolute;
      left: 200px;
      top: 70px;
      bottom: 0;
      overflow: scroll;
      width: calc(100% - 210px);
    }
    .content::-webkit-scrollbar {
      display: none;
    }
  }
</style>
