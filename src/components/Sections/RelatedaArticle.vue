<script setup>
import NewsCard from '@/components/NewsCard.vue'
import blogs from '@/dates/blogs'
const blog = blogs
</script>
<template>
  <section class="py-40 relative secont-bg">
    <div class="container">
      <h1 class="font-bold text-5xl text-center" data-aos="zoom-in">Article and News</h1>
      <p class="text-gray text-center mt-3" data-aos="zoom-in">News, tips, tricks and more</p>
      <div class="flex flex-wrap justify-between mt-20 gap-5">
        <NewsCard
          data-aos="zoom-in"
          v-for="(item, i) in blog.slice(0, 2)"
          :key="i"
          :genre="item.genre"
          :img="item.image"
          :title="item.title"
          :decrip="item.article"
          :tags="item.tags"
          :date="item.date"
        />
      </div>
    </div>
    <SectionVector color="red" />
  </section>
</template>
