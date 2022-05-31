<template>
  <div>
    <router-link to="/keepAlive/exclude/counter">计数器</router-link>
    |<router-link to="/keepAlive/exclude/form">表单</router-link>
    <router-view v-slot="{Component}">
      <keep-alive :exclude="['counter']">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>
