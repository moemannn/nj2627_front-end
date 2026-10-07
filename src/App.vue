<script setup lang="ts">
import DashboardWidgets from './components/dashboard_widgets.vue'
import MenuBar from "./components/menu_bar.vue";
import NotifcationBar from "./components/notfication_bar.vue";
</script>
<template>
  <div id="app">
    <MenuBar />
    <DashboardWidgets />
    <NotifcationBar />
  </div>
</template>