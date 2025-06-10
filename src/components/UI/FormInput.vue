<template>
  <div class="flex flex-col md:w-[48.5%] w-full gap-4" :class="props.class">
    <label :for="name" class="text-sm font-bold">{{ label }} <span class="text-red">*</span></label>
    <input
      :type="text"
      :name="name"
      :placeholder="place"
      class="px-5 py-2.5 border-2 rounded-lg focus:border-red-500 outline-0 h-full items-start"
      required
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  label: string
  text: string
  name: string
  place: string
  class?: string
}>()
</script>

<style lang="scss" scoped></style>
