# 导航栏demo

### 需求：

- 支持自定义导航背景颜色
- 支持自定义导航跳转地址、导航图片、导航文字、文字颜色
- 可灵活增删导航
- 导航增删可自适应样式
- 导航**选中状态**时图片切换，文字颜色切换
- 导航**丢失选中状态**时图片切换，文字颜色切换

### 难点：

#### 导航选中时图片的切换和文字颜色的更换

通过vue提供的`$route`来获取当前路由的path，与当前导航的跳转地址进行比较来判断是否选中的当前导航。

代码示例：

```vue
...

<script>
export default{
  ...
  computed: {
    isActive:{
      get(){
        return this.$route.path.indexOf(this.path) == 0?true:false;
      }
    }
  }
}
</script>

...
```

通过`v-if`判断`isActive`进行图片的切换，代码示例：

```vue
<template>
  <div class="tab-ber-item" @click="$router.replace(path)">
    <div v-if="isActive" class="icon">
      <slot name="icon_activate">
        <img src="@/assets/img/home-bar/home_activate.svg"/>
      </slot>
    </div>
    <div v-else class="icon"> 
      <slot name="icon">
        <img src="@/assets/img/home-bar/home.svg"/>
      </slot>
    </div>
    ...
  </div>
</template>

<script>
export default{
  ...
  computed: {
    isActive:{
      get(){
        return this.$route.path.indexOf(this.path) == 0?true:false;
      }
    }
  }
}
</script>

...
```

通过计算属性获取不同颜色，代码示例

```vue
<template>
  <div class="tab-ber-item" @click="$router.replace(path)">
    <div v-if="isActive" class="icon">
      <slot name="icon_activate">
        <img src="@/assets/img/home-bar/home_activate.svg"/>
      </slot>
    </div>
    <div v-else class="icon"> 
      <slot name="icon">
        <img src="@/assets/img/home-bar/home.svg"/>
      </slot>
    </div>
    <div class="text">
      <slot name="text">主页</slot>
    </div>
  </div>
</template>

<script>
export default{
  computed: {
    isActive:{
      get(){
        return this.$route.path.indexOf(this.path) == 0?true:false;
      }
    },
    isActiveColor:{
      get(){
        return this.isActive?"#1296db":"#000";
      }
    }
  }
}
</script>

<style lang="less">
.tab-ber-item{
  .text{
    color: v-bind(isActiveColor);
  }
}
</style>
```

*style中的`v-bind(isActiveColor)`是在读取vue中的计算属性`isActiveColor`

[demo完整示例](./)

### 使用

背景颜色自定义：通过配置`backgroundColor`属性实现

```html
<Tabber backgroundColor="#ccc"/>
```

导航跳转地址、导航图片、导航文字、文字颜色的定义：通过配置json数据实现

```json
[
  {
    //全部自定义
    text:"购物车",
    path:"/cart",
    textActiveColor:"red",
    iconActivate:cartActivate,
    textInvalidColor:"#7348f9",
    iconInvalid:cart,
  },
]
```

- text：导航文字
- path：跳转的地址
- textActiveColor：选中状态时文本的颜色
- iconActivate：选中状态时展示的图片
- textInvalidColor：丢失选中状态时文本的颜色
- iconInvalid：丢失选中状态时展示的图片

[示例：](./src/components/MainTabBer.vue)

```vue
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
```

