<template>
  <Tabber :TabBerList="TabBerList" backgroundColor="#ccc"/>
</template>
<script>
import Tabber from '@/components/tabber/TabBer';

//icon图片
import cart from "@/assets/img/home-bar/cart.svg"
import cartActivate from "@/assets/img/home-bar/cart_activate.svg"
import profile from "@/assets/img/home-bar/profile.svg"
import profileActivate from "@/assets/img/home-bar/profile_activate.svg"

export default{
  data(){
    return {
      TabBerList:[
        {
          //全部使用默认值
        },
        {
          //全部自定义
          text:"购物车",
          path:"/cart",
          textActiveColor:"red",
          iconActivate:cartActivate,
          textInvalidColor:"#7348f9",
          iconInvalid:cart,
        },
        {
          //部分使用默认值
          text:"我的",
          path:"/profile",
          iconActivate:profileActivate,
          iconInvalid:profile,
        },
      ]
    }
  },
  components:{
    Tabber,
  }
}
</script>