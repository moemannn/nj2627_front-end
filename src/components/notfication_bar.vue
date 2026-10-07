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

  <nav style="right: .5%;left: unset;" :class="{ open: isOpen }" @click.self="isOpen = false">
    <ul :class="{ open: isOpen }"  @click.self="isOpen = false">
      <li>discord: message</li>
      <li>discord: message</li>
      <li>discord: message</li>
      <li>discord: message</li>
    </ul>

    <div class="profile-container" @click.stop="isOpen = !isOpen">
      <i class="fa-regular fa-envelope"></i>
    </div>
  </nav>
</template>