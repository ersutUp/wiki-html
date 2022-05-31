<template>
  <div>
    <router-link to="/keepAlive/maxCache/counter">计数器</router-link>
    |<router-link to="/keepAlive/maxCache/form">表单</router-link>
    |<router-link to="/keepAlive/maxCache/form2">表单</router-link>
    <router-view v-slot="{Component}">
      <keep-alive max="2">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>
