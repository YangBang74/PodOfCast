<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from '@/components/UI/Button.vue'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
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
          <img src="/logo.svg" alt="PotOfCast" class="h-10" />
          <div class="flex sm:gap-15 gap-5">
            <RouterLink to="/">Episodes</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/">More</RouterLink>
          </div>
          <div class="lg:flex hidden justify-end gap-5">
            <Button text="RECENT EPISODES" :btn-type="2" to="/" />
            <Button text="SUBSCRIBE" :btn-type="1" to="/" />
          </div>
        </div>
      </div>
    </header>
    <main class="pt-16 flex-1"><slot /></main>
    <footer class="border-t border-gray-500">
      <div class="container">
        <div class="flex items-center py-3 justify-between text-[12px]">
          <p class="text-gray">
            ©2022. All Rights Reserved. <span class="text-red">Pod of Cast</span>
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
