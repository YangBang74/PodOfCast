<script setup lang="ts">
defineProps<{
  podcast: string[]
}>()
</script>
<template>
  <div
    v-for="(item, i) in podcast.reverse()"
    :key="i"
    data-aos="zoom-in"
    class="shadow-2 border-3 flex-col rounded-xl p-4 gap-y-5 flex transition md:w-[49%] w-full bg-white"
  >
    <div class="flex justify-start gap-5">
      <div class="flex flex-col justify-between w-full">
        <img :src="item.img" :alt="item.imgText" class="object-cover w-42 h-42 rounded-xl" />
      </div>
      <div>
        <h3 class="font-bold text-xl mt-3 mb-4">
          <span class="text-red">{{ item.eps }}</span> <br />
          {{ item.title }}
        </h3>
        <p class="line-clamp-2 text-gray-600 pt-4 border-t text-sm border-gray-600">
          {{ item.description }}
        </p>
      </div>
    </div>
    <div class="flex justify-between gap-5 items-center">
      <div class="flex mt-2.5 text-[12px] flex-row gap-x-1.5">
        <div
          v-for="(x, i) in item.tags"
          :key="i"
          class="border py-1.5 px-2 rounded-lg text-gray border-gray-600"
        >
          {{ x }}
        </div>
      </div>
      <div class="flex items-center gap-2.5">
        <p class="font-bold text-[12px]">Hosted by:</p>
        <img :src="item.authorImg" :alt="item.author" />
      </div>
    </div>
  </div>
</template>
