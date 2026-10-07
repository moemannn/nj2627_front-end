<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<template>
  <!-- Font Awesome for the toggle icon -->
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        integrity="sha384-…"
        crossorigin="anonymous">

  <nav :class="{ open: isOpen }" @click.self="isOpen = false">
    <ul :class="{ open: isOpen }"  @click.self="isOpen = false">
      <li>Home</li>
      <li>Calendar</li>
      <li>Notes</li>
      <li>Spotify</li>
      <li>Settings</li>
    </ul>

    <div class="profile-container" @click.stop="isOpen = !isOpen">
      <i class="fa-solid fa-bars-staggered"></i>
    </div>
  </nav>
</template>