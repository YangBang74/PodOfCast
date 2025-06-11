<script setup lang="ts">
import Icon from './Icons/Icon.vue'

const props = defineProps<{
  img: string
  id?: string
  text: string
  class?: string
}>()
</script>

<template>
  <a
    :href="`/podcast/${props.id}`"
    class="p-4 rounded-lg shadow bg-cover h-80 w-80 flex flex-col justify-between"
    :style="{ backgroundImage: `url(${props.img})` }"
    :class="props.class"
  >
    <div class="flex gap-2.5 items-center self-end">
      <a href="#"><Icon name="google" class="text-white hover:text-yellow-500" /></a>
      <a href="#"><Icon name="spotify" class="text-white hover:text-green-500" /></a>
      <a href="#"><Icon name="youtube" class="text-white hover:text-red-500" /></a>
    </div>
    <h3 class="font-bold mb-2 text-left text-blue text-3xl">{{ props.text }}</h3>
  </a>
</template>
