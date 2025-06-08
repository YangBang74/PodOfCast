<script setup lang="ts">
const props = defineProps<{
  text: string
  btnType?: number
  to: string
  class?: string
}>()
</script>

<template>
  <RouterLink
    :to="to"
    :class="props.class"
    v-if="props.btnType === 1"
    class="px-7 py-2 rounded-lg text-sm bg-black text-white drop-shadow whitespace-nowrap cursor-pointer"
  >
    {{ props.text }}
  </RouterLink>
  <RouterLink
    :to="to"
    :class="props.class"
    v-if="props.btnType === 2"
    class="px-5 py-1 rounded-lg text-sm border-3 whitespace-nowrap"
  >
    {{ props.text }}
  </RouterLink>
</template>
