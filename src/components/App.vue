<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue';
</script>

<style lang="scss">
.app, #app {
  width: 100%;
  height: 100%;
}
</style>
