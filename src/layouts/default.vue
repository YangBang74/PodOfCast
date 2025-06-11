<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from '@/components/UI/Button.vue'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import Icon from '@/components/Icons/Icon.vue'
const modalIsActive = ref<boolean>(false)
const modalState = ref<boolean>(false)
const showBlackBar = ref(true)
let lastScrollY = 0
const delta = 10

function onScroll() {
  const current = window.scrollY
  if (Math.abs(current - lastScrollY) < delta) return
  showBlackBar.value = current < lastScrollY
  lastScrollY = current
}

onMounted(() => window.addEventListener('scroll', onScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="layout flex flex-col justify-between h-full">
    <header
      :class="[
        'fixed w-full left-0 top-0 second-bg z-100 secont-bg shadow-sm transition',
        showBlackBar ? 'translate-y-0' : '-translate-y-full',
      ]"
    >
      <div class="container">
        <div class="flex flex-row items-center justify-between font-bold py-3 text-sm">
          <RouterLink to="/"><img src="/logo.svg" alt="PotOfCast" class="h-10" /></RouterLink>
          <div class="flex sm:gap-15 gap-5">
            <RouterLink to="/episodes">Episodes</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/blog">More</RouterLink>
          </div>
          <div class="lg:flex hidden justify-end gap-5">
            <Button text="RECENT EPISODES" :btn-type="2" to="/" />
            <Button text="SUBSCRIBE" :btn-type="1" to="/" />
          </div>
        </div>
      </div>
    </header>
    <main class="flex-1 pt-16"><slot /></main>
    <footer class="py-10 border-t border-gray-500">
      <div class="container">
        <div class="flex items-start justify-between gap-5 flex-wrap">
          <div class="space-y-6 5">
            <div class="flex items-end gap-4">
              <img src="/logo.svg" alt="PotOfCast" class="h-10" />
              <p class="text-[12px] font-medium text-gray-500">©2025.</p>
            </div>
            <div class="flex gap-5 items-center">
              <a href="#" class="text-black hover:text-red-500"><Icon name="twitter" /></a>
              <a href="#" class="text-black hover:text-red-500"><Icon name="instagram" /></a>
              <a href="#" class="text-black hover:text-red-500"><Icon name="tiktok" /></a>
            </div>
          </div>
          <nav class="flex items-start gap-20 flex-wrap">
            <ul class="space-y-4 font-medium">
              <li><a href="#" class="hover:text-red-500">About</a></li>
              <li><a href="#" class="hover:text-red-500">Testimonials</a></li>
              <li><a href="#" class="hover:text-red-500">Features</a></li>
            </ul>
            <ul class="space-y-4 font-medium">
              <li><a href="#" class="hover:text-red-500">Episodes</a></li>
              <li><a href="#" class="hover:text-red-500">Pricing</a></li>
              <li><a href="#" class="hover:text-red-500">Blog</a></li>
            </ul>
          </nav>
          <div>
            <p class="text-gray-800">Listen to episodes on your fav platform:</p>
            <div class="flex items-center flex-nowrap justify-start my-5">
              <a href="#"><Icon name="google-text" class="h-6 w-full" /></a>
              <a href="#"><Icon name="spotify-text" class="h-6" /></a>
              <a href="#"><Icon name="youtube-text" class="h-5" /></a>
            </div>

            <p class="text-gray-800 mt-10">App available on:</p>
            <div class="flex items-center flex-nowrap justify-start my-5 gap-5">
              <a href="#"><Icon name="app-store" /></a>
              <a href="#"><Icon name="google-play" /></a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-500 flex items-center py-3 justify-between text-[12px]">
          <p class="text-gray">
            ©2025. All Rights Reserved. <span class="text-red">Pod of Cast</span>
          </p>
          <nav class="flex gap-6">
            <a href="/" class="terms relative">Terms</a>
            <a href="/">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
.terms::after {
  content: '';
  position: absolute;
  right: -13px;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #4d4d4d;
}
</style>
