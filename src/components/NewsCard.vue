<script setup lang="ts">
defineProps<{
  blog: string[]
}>()
</script>

<template>
  <div class="md:w-[49%] w-full rounded-lg border-3 p-4 box-shadow transition h-full bg-white">
    <img
      :src="blog.image"
      :alt="blog.title"
      class="object-cover w-full max-h-80 mb-5 aspect-[1/1] rounded-lg"
    />
    <div class="flex flex-col justify-between h-65">
      <div class="h-full">
        <p class="text-gray font-bold text-sm mb-2">{{ blog.genre }}</p>
        <a
          :href="`/blogs/${blog.id}`"
          class="text-4xl font-bold hover:text-red-500 transition cursor-pointer line-clamp-2"
          >{{ blog.title }}</a
        >
        <p class="text-gray text-sm mb-2 mt-2 line-clamp-2">
          {{ blog.article }}
        </p>
      </div>
      <div class="flex justify-between items-center gap-10n pt-5 border-t border-gray-400">
        <div class="flex items-center gap-3">
          <div
            class="border border-gray-600 rounded-sm text-gray py-1 px-3"
            v-for="(x, i) in blog.tags.slice(0, 2)"
          >
            {{ x }}
          </div>
        </div>
        <div class="font-bold text-sm text-end">{{ blog.date }}</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.box-shadow:hover {
  box-shadow: 10px 10px 0 #000;
}
</style>
