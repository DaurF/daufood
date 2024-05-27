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
import {getUser} from "@/services/user.ts";
import {useUserStore} from "@/stores";
import {onMounted} from "vue";

const userId = localStorage.getItem('userId')
const store = useUserStore()

onMounted(async () => {
  if (userId && !Number.isNaN(userId)) {
    const user = await getUser(userId)
    store.setUser(user)
  }
})

</script>

<style scoped>
.app {
  position: relative;
}
</style>
