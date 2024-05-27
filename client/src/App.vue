<template>
  <div class="app">
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script setup>
import AppHeader from "@/layouts/AppHeader.vue";
import AppFooter from "@/layouts/AppFooter.vue";
</script>

<style scoped>
.app {
  position: relative;
}
</style>
