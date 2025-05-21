<script setup lang="ts">
import Icon from './Icons/Icon.vue'

const props = defineProps<{
  img: string
  text: string
}>()
</script>

<template>
  <div
    class="p-4 rounded-lg shadow bg-cover h-80 w-80 flex flex-col justify-between"
    :style="{ backgroundImage: `url(${props.img})` }"
  >
    <div class="flex gap-2.5 items-center self-end">
      <Icon name="google" />
      <Icon name="spotify" class="text-white" />
      <Icon name="youtube" />
    </div>
    <h3 class="font-bold mb-2 text-left text-blue text-3xl">{{ props.text }}</h3>
  </div>
</template>
