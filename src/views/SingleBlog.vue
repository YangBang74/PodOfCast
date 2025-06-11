<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import Icon from '@/components/Icons/Icon.vue'
import blogs from '@/dates/blogs'
import MobileApp from '@/components/Sections/MobileApp.vue'
import RelatedaArticle from '@/components/Sections/RelatedaArticle.vue'
const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)
const blog = blogs.find((p) => p.id === id)
</script>
<template>
  <section
    data-aos="zoom-in fade-up"
    class="hero relative secont-bg w-full"
    style="background: url('/hero-bg.png') no-repeat 0 0 / 100% #f7ede8"
  >
    <div class="container">
      <div
        class="flex justify-between items-center gap-5 pt-20 text-sm text-gray text-sm text-gray"
      >
        <button @click="router.back()" class="flex items-center gap-2">
          <Icon name="left" />
          <span>Back to articles</span>
        </button>
        <span>{{ blog.date }}</span>
      </div>
      <div class="pt-10 text-center max-w-140 mx-auto pb-10">
        <span class="text-red text-sm">{{ blog.category.slice(0) }}</span>
        <h1 class="text-4xl font-bold my-2 5">
          {{ blog.title }}
        </h1>
        <div class="flex mt-2.5 text-[12px] flex-row gap-x-1.5 justify-center py-10">
          <div
            v-for="tag in blog.tags"
            :key="tag"
            class="border py-1.5 px-2 rounded-lg text-gray secont-bg border-gray-600"
          >
            {{ tag }}
          </div>
        </div>
        <nav class="flex justify-center items-center gap-3">
          <a href="#" class="text-black hover:text-red-500">
            <Icon name="twitter" />
          </a>
          <a href="#" class="text-black hover:text-red-500">
            <Icon name="instagram" />
          </a>
          <a href="#" class="text-black hover:text-red-500">
            <Icon name="tiktok" />
          </a>
        </nav>
      </div>
    </div>
  </section>
  <section>
    <img :src="blog.image" :alt="blog.title" />
  </section>
  <section class="my-20">
    <div class="container">
      <article v-html="blog.html"></article>
    </div>
  </section>
  <RelatedaArticle />
  <MobileApp />
</template>
<style scoped></style>
