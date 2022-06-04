<template>
  <div class="tab-ber">
    <TabBerItem v-for="item in TabBerList" 
      :path="item.path != '' && item.path != undefined?item.path:undefined" 
      :textActiveColor="item.textActiveColor != '' && item.textActiveColor != undefined?item.textActiveColor:undefined" 
      :textInvalidColor="item.textInvalidColor != '' && item.textInvalidColor != undefined?item.textInvalidColor:undefined">

      <template v-if="item.iconActivate != '' && item.iconActivate != undefined" #icon_activate>
        <img :src="item.iconActivate"/>
      </template>
      <template v-if="item.iconInvalid != '' && item.iconInvalid != undefined" #icon>
        <img :src="item.iconInvalid"/>
      </template>
      <template v-if="item.text != '' && item.text != undefined" #text>
        {{item.text}}
      </template>
    </TabBerItem>
  </div>
</template>

<script>
import TabBerItem from './TabBerItem';
export default {
  props:{
    TabBerList:{
      type: Array,
      default:[
        {
          //跳转路径
          path:"",
          //当前导航选中时的文字颜色
          textActiveColor:"",
          //选中时的图标
          iconActivate: "",
          //当前导航未选中时的文字颜色
          textInvalidColor:"",
          //未选中时的图标
          iconInvalid:"",
          //展示的文字
          text:""
        }
      ]
    },
    backgroundColor:{
      type:String,
      default:"#cfcfcf"
    },
  },
  components: { TabBerItem }
}
</script>

<style lang="less">
.tab-ber{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: v-bind(backgroundColor);
  box-shadow: 0 -1px 1px v-bind(backgroundColor);
}
</style>