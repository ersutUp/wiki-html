<template>
  <div>
    <router-link to="/keepAlive/include/counter">计数器</router-link>
    |<router-link to="/keepAlive/include/form">表单</router-link>
    <router-view v-slot="{Component}">
      <keep-alive :include="['counter']">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>
