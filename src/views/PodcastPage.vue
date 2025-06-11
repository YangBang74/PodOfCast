<script setup lang="ts">
import { useRoute } from 'vue-router'
import podcast from '../dates/podcasts'
import PodcastImg from '@/components/PodcastImg.vue'
import MobileApp from '@/components/Sections/MobileApp.vue'
import Button from '@/components/UI/Button.vue'
const route = useRoute()
const id = Number(route.params.id)

const pod = podcast.find((p) => p.id === id)
</script>

<template>
  <section
    data-aos="zoom-in fade-up"
    class="hero relative secont-bg"
    style="background: url('/hero-bg.png') no-repeat 0 0 / 100% #f7ede8"
  >
    <div class="container" v-if="!pod">
      <h1 class="font-bold text-4xl text-center py-40">Sorry, this podcast was not found</h1>
    </div>
    <div class="container" v-else>
      <div class="flex items-center justify-center gap-10 pt-20 pb-10 md:flex-nowrap flex-wrap">
        <PodcastImg
          :img="pod?.img"
          :id="pod?.id"
          :text="pod?.imgText"
          class="md:w-1/3 h-full aspect-[1/1] drop-shadow-blue"
        />
        <div class="md:w-1/2 w-full">
          <div class="flex justify-between items-center sm:flex-nowrap flex-wrap gap-3s">
            <span class="font-bold text-red">{{ pod?.eps }}</span>
            <button
              type="button"
              class="border-red border-2 text-red font-bold rounded-lg py-1 px-2"
            >
              FEATURED EPISODE
            </button>
          </div>
          <h1 class="font-bold text-4xl my-5 border-b-2 pb-5 border-gray-700">
            {{ pod?.title }}
          </h1>
          <p class="my-5 text-gray">{{ pod?.description }}</p>
          <div class="flex justify-between items-center gap-5 sm:flex-nowrap flex-wrap">
            <div class="flex items-center gap-2">
              <img :src="pod?.authorImg" alt="Avatar author" />
              <span class="text-gray">Hosted by: </span>
              <span class="text-red">{{ pod?.author }}</span>
            </div>
            <span class="text-gray">{{ pod?.date }}</span>
          </div>
          <div class="flex items-center justify-start gap-5 mt-10">
            <Button
              :btn-type="1"
              text="Subscribe"
              class="font-bold h-14 flex items-center px-9 uppercase"
            />
            <Button
              :btn-type="2"
              text="LISTEN NOW"
              class="font-bold h-14 flex items-center px-9 uppercase drop-shadow"
            />
          </div>
          <div class="flex justify-start gap-10 items-center my-10">
            <div class="flex items-center gap-2.5">
              <p class="font-bold text-sm">Tags:</p>
            </div>
            <div class="flex mt-2.5 text-sm flex-row gap-x-1.5">
              <div
                v-for="(x, i) in pod?.tags"
                :key="i"
                class="border py-1.5 px-2 rounded-lg text-gray border-gray-600"
              >
                {{ x }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <MobileApp />
</template>
