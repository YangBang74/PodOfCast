<script setup lang="ts">
import Button from '@/components/UI/Button.vue'
import YouTube from '@/components/Icons/Services.vue'
import podcast from '../dates/podcasts'
import PodcastImg from '@/components/PodcastImg.vue'

import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import Services from '@/components/Icons/Services.vue'
import SectionVector from '@/components/UI/SectionVector.vue'

const pod = podcast
</script>

<template>
  <section
    class="hero relative"
    style="background: url('/hero-bg.png') no-repeat 0 0 / contain #f7ede8"
  >
    <div class="mx-auto text-center pb-20">
      <div class="contain">
        <h1 class="xl:text-6xl text-6xl font-bold pt-16">
          Your Daily <br /><span class="text-red">Podcast</span>
        </h1>
        <p class="mt-10 mb-10 text-gray max-w-88 mx-auto">
          We cover all kinds of categories and a weekly special guest.
        </p>
        <Button :btn-type="1" text="SUBSCRIBE" />
      </div>

      <YouTube :type="3" />
    </div>
    <Carousel
      itemsToShow="auto"
      :loop="true"
      :autoplay="3000"
      :gap="20"
      :wrapAround="true"
      :transition="500"
      class="py-20"
    >
      <Slide v-for="item in pod" :key="item.id">
        <PodcastImg :img="item.img" :text="item.imgText" />
      </Slide>
    </Carousel>
    <div class="py-20">
      <div class="contain">
        <div class="flex items-center justify-between border-y py-10">
          <h1 class="font-bold text-4xl">Supported by:</h1>
          <div class="flex items-center justify-between gap-5 w-1/2">
            <Services name="spotify-text" />
            <Services name="google-text" />
            <Services name="youtube-text" />
          </div>
        </div>
      </div>
    </div>
    <SectionVector />
  </section>
</template>
