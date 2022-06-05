<template>
  <div class="tab-ber-item" @click="$router.replace(path)">
    <div v-if="isActive" class="icon">
      <slot name="icon_activate">
        <img src="@assets/img/home-bar/home_activate.svg"/>
      </slot>
    </div>
    <div v-else class="icon"> 
      <slot name="icon">
        <img src="@assets/img/home-bar/home.svg"/>
      </slot>
    </div>
    <div class="text">
      <slot name="text">主页</slot>
    </div>
  </div>
</template>

<script>
export default{
  props:{
    //跳转路径
    path:{
      type:String,
      default:"/home"
    },
    //当前导航选中时的文字颜色
    textActiveColor:{
      type:String,
      default: "#1296db"
    },
    //当前导航未选中时的文字颜色
    textInvalidColor:{
      type:String,
      default: "#000"
    }
  },
  computed: {
    isActive:{
      get(){
        return this.$route.path.indexOf(this.path) == 0?true:false;
      }
    },
    isActiveColor:{
      get(){
        return this.isActive?this.textActiveColor:this.textInvalidColor;
      }
    }
  }
}
</script>

<style lang="less">
.tab-ber-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  .icon{
    margin-top: 3px;
    img{
      vertical-align: middle;
      height: 24px;
    }
  }
  .text{
    color: v-bind(isActiveColor);
  }
}
</style>