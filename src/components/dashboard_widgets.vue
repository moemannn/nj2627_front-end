<script setup>
import { reactive } from 'vue'
import { GridLayout, GridItem } from 'vue-grid-layout-v3'

const state = reactive({
  layout: [
    { x: 0, y: 0, w: 5, h: 5, i: 'widget-spotify'  },
    { x: 5, y: 0, w: 5, h: 5, i: 'widget-news'     },
    { x:10, y: 0, w: 5, h: 5, i: 'widget-weather'  },
    { x:15, y: 0, w: 5, h: 5, i: 'widget-calendar' },
  ],
  draggable: true,
  resizable: true,
})
</script>

<template>
  <main id="dashboard" class="dashboard">
    <GridLayout
        v-model:layout="state.layout"
        :col-num="100"
        :row-height="10"
        :margin="[2, 2]"
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
          class="grid-item"
      >
        <div class="widget-content"></div>
      </GridItem>
    </GridLayout>
  </main>
</template>
