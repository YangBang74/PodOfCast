<script setup lang="ts">
import { ref, computed } from 'vue'
import podcast from '../dates/podcasts'
import MobileApp from '@/components/Sections/MobileApp.vue'
import Episodes from '@/components/Episodes.vue'

const selectCategory = ref<string>('All')

const category: string[] = ['All', 'Business', 'Comedy', 'Education', 'Health', 'News', 'Tech']

const filteredPods = computed(() => {
  return selectCategory.value === 'All'
    ? podcast
    : podcast.filter((p) => p.category === selectCategory.value)
})
</script>

<template>
  <section
    data-aos="zoom-in fade-up"
    class="hero relative secont-bg w-full"
    style="background: url('/hero-bg.png') no-repeat 0 0 / 100% #f7ede8"
  >
    <div class="mx-auto text-center pb-25">
      <div class="container">
        <h1 class="xl:text-6xl text-6xl font-bold pt-16">
          Episodes <br /><span class="text-red">Pod of Cast</span>
        </h1>
        <p class="mt-10 mb-10 text-gray max-w-88 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
        </p>
      </div>
    </div>
  </section>
  <section class="my-40">
    <div class="container">
      <div class="text-center">
        <h1 data-aos="zoom-in" class="inline relative font-bold text-5xl text-center">
          Latest Episode
          <div class="absolute top-[-30px] left-[-50px]">
            <svg
              width="64"
              height="62"
              viewBox="0 0 64 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.7292 30.1456C33.4792 29.1456 33.3333 28.3331 33.0625 27.5414C30.3542 19.5414 26 12.4164 21.0416 5.64556C20.4583 4.8539 19.7291 4.1039 18.9166 3.6039C18.4791 3.33307 17.6041 3.37473 17.1041 3.64557C16.7291 3.8539 16.4583 4.6664 16.5416 5.12473C16.6875 5.99973 17 6.89557 17.4375 7.68723C20.3125 12.9164 23.2083 18.1247 26.1458 23.3122C27.25 25.2497 28.4167 27.1664 29.5625 29.0831C29.9375 29.7289 30.3542 30.3539 30.7917 30.9372C31.2708 31.6039 32 31.9997 32.7292 31.5622C33.2083 31.2706 33.7292 31.0622 33.7292 30.1456Z"
                fill="#CD4631"
              />
              <path
                d="M4.22915 61.1672C5.22915 61.0005 6.39582 60.8755 7.52082 60.6255C11.9583 59.6255 16.3958 58.6255 20.8125 57.5838C21.7708 57.3547 22.7083 56.9588 23.5625 56.5005C24.7083 55.8963 25.1041 55.0422 24.9166 54.1047C24.7291 53.1672 23.9792 52.5838 22.6667 52.563C21.7708 52.5422 20.8125 52.563 19.9583 52.7713C14.3541 54.188 8.74999 55.6463 3.16665 57.1255C2.54165 57.2922 1.89582 57.5838 1.41665 58.0005C0.208319 59.0213 0.583319 60.6255 2.12499 61.0213C2.72915 61.1672 3.41665 61.1047 4.22915 61.1672Z"
                fill="#CD4631"
              />
              <path
                d="M62.7708 5.31238C62.6874 4.33321 62.4791 3.35405 62.2291 2.39571C61.9999 1.54155 61.4166 0.937379 60.4791 0.854046C59.6874 0.791546 58.8333 1.58321 58.7083 2.62488C58.5416 4.02071 58.3958 5.43738 58.4583 6.83321C58.6458 11.0415 58.9166 15.2707 59.2083 19.479C59.3124 20.8749 59.4999 22.2707 59.7291 23.6665C59.8124 24.1457 59.9791 24.6457 60.2499 25.0207C60.9791 26.0832 62.3124 25.9999 62.8333 24.854C63.1249 24.2082 63.2499 23.4165 63.2499 22.7082C63.3541 20.3749 63.0416 8.77071 62.7708 5.31238Z"
                fill="#CD4631"
              />
            </svg>
          </div>
        </h1>
      </div>
      <div
        class="flex items-center justify-between mt-32 pb-5 border-b-2 border-gray-700 flex-wrap"
      >
        <button
          v-for="select in category"
          :key="select"
          type="button"
          class="py-2 px-4 font-bold text-2xl"
          :class="{ 'text-red': selectCategory === select }"
          @click="selectCategory = select"
        >
          {{ select }}
        </button>
      </div>
      <div class="relative flex flex-wrap justify-between items-start gap-y-5 gap-x-2 my-20">
        <Episodes :podcast="filteredPods" />
      </div>
    </div>
  </section>
  <MobileApp />
</template>
