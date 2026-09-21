<script setup>
import { reactive, ref, computed, onMounted, onUnmounted } from 'vue';
import { GridLayout, GridItem } from 'vue-grid-layout-v3';

const windowWidth = ref(window.innerWidth);

function updateWindowWidth() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});

const gridColumns = computed(() => {
  if (windowWidth.value < 480) return 120;
  if (windowWidth.value < 768) return 180;
  if (windowWidth.value < 1200) return 240;

  return 300;
});

const gridRowHeight = computed(() => {
  if (windowWidth.value < 480) return 3;
  if (windowWidth.value < 768) return 4;
  return 5;
});

const gridMargin = computed(() => {
  if (windowWidth.value < 480) return [5, 5];
  if (windowWidth.value < 768) return [8, 8];

  return [10, 10];
});

const state = reactive({
  layout: [
    { x: 0,   y: 0,  w: 60, h: 40, i: 'widget-spotify' },
    { x: 65,  y: 0,  w: 60, h: 40, i: 'widget-news' },
    { x: 130, y: 0,  w: 60, h: 40, i: 'widget-weather' },
    { x: 195, y: 0,  w: 60, h: 40, i: 'widget-calendar' },

    { x: 0,   y: 45, w: 60, h: 40, i: '4' },
    { x: 65,  y: 45, w: 60, h: 40, i: '5' },
    { x: 130, y: 45, w: 60, h: 40, i: '6' },
    { x: 195, y: 45, w: 60, h: 40, i: '7' },
  ],

  draggable: true,
  resizable: true,
});
</script>

<template>
  <div id="dashboard">
    <GridLayout
        v-model:layout="state.layout"
        :col-num="gridColumns"
        :row-height="gridRowHeight"
        :margin="gridMargin"
        :is-draggable="state.draggable"
        :is-resizable="state.resizable"
        :vertical-compact="false"
        :use-css-transforms="true"
        :responsive="false"
    >
      <GridItem
          v-for="item in state.layout"
          :key="item.i"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
      >
        <!-- widget -->
      </GridItem>
    </GridLayout>
  </div>
</template>