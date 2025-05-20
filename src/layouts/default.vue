<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from '@/components/UI/Button.vue'
</script>

<template>
  <header class="fixed w-full left-0 secont-bg">
    <div class="contain">
      <div class="flex flex-row items-center justify-between font-bold py-3">
        <img src="/logo.svg" alt="PotOfCast" class="h-15" />
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
  <main class="pt-21"><slot /></main>
  <footer>
    <div class="contain">
      <div class="flex items-center py-3 border-t border-gray-500 justify-between text-[12px]">
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
