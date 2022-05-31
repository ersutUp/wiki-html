<template>
  <div>
    <router-link to="/keepAlive/use/counter">计数器</router-link>
    |<router-link to="/keepAlive/use/form">表单</router-link>
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>
