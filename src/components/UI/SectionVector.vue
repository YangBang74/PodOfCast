<script setup lang="ts">
const props = defineProps<{
  color: string
  class?: string
}>()
</script>

<template>
  <svg
    class="absolute bottom-[-80px] left-1/2 translate-[0 -100%] mx-auto z-10"
    width="46"
    height="154"
    viewBox="0 0 46 154"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="props.class"
  >
    <path
      v-if="color === 'red'"
      d="M2 2C2.00017 120.75 30.6905 85.7939 34.822 77.8929C70.3049 10.0357 -9.53292 47.5357 4.66125 152"
      stroke="#CD4631"
      stroke-width="2.5"
      stroke-linecap="round"
    />
    <path
      v-if="color === 'black'"
      d="M2 2C2.00017 120.75 30.6905 85.7939 34.822 77.8929C70.3049 10.0357 -9.53292 47.5357 4.66125 152"
      stroke="#000"
      stroke-width="2.5"
      stroke-linecap="round"
    />
  </svg>
</template>
