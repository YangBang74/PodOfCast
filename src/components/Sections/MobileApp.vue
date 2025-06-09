<script setup>
import Button from '../UI/Button.vue'
import Icon from '../Icons/Icon.vue'
</script>
<template>
  <section class="py-40 relative app">
    <div class="container">
      <div class="text-center">
        <p
          data-aos="zoom-in"
          class="text-sm px-1 text-red border border-red-500 rounded-sm inline-block text-center font-bold"
        >
          BETA
        </p>
        <h1 data-aos="zoom-in" class="text-5xl font-bold mt-4 mb-8">
          Available now <br />
          Pod of Cast App
        </h1>
        <p data-aos="zoom-in" class="text-sm text-gray mb-25">We just launched our podcast app!</p>
        <Button
          data-aos="zoom-in"
          text="DOWNLOAD NOW"
          to="/"
          :btn-type="1"
          class="py-5 px-9 font-bold"
        />
        <div class="mt-13" data-aos="zoom-in">
          <p class="text-sm text-gray">Content also available on:</p>
          <div class="flex justify-center items-center gap-3 mt-2">
            <a href="#">
              <Icon name="google" class="text-black hover:text-yellow-500" :size="24" />
            </a>
            <a href="#">
              <Icon name="spotify" class="text-black hover:text-green-500" :size="24" />
            </a>
            <a href="#">
              <Icon name="youtube" class="text-black hover:text-red-500" :size="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.app {
  background: url('/home/app.png') no-repeat bottom center / cover #edf3f7;
}
</style>
