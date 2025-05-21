<script setup lang="ts">
import Button from '@/components/UI/Button.vue'
import podcast from '../dates/podcasts'
import PodcastImg from '@/components/PodcastImg.vue'

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation as CarouselNavigation } from 'vue3-carousel'
import Icon from '@/components/Icons/Icon.vue'
import SectionVector from '@/components/UI/SectionVector.vue'
import Quote from '@/components/Sections/Quote.vue'
import coments from '@/dates/coments'
const pod = podcast
const coment = coments

const membership = [
  {
    img: '/home/Scribble.png',
    title: 'Topic by Request',
    text: 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.',
  },
  {
    img: '/home/stars.png',
    title: 'Exclusive Content',
    text: 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.',
  },
  {
    img: '/home/smile.png',
    title: 'Join the Community',
    text: 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.',
  },
  {
    img: '/home/Faces.png',
    title: 'Exclusive Episodes & Merch',
    text: 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.',
  },
  {
    img: '/home/Fire.png',
    title: 'Topic by Request',
    text: 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.',
  },
  {
    img: '/home/Star.png',
    title: 'And much more!',
    text: 'Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod tempor.',
  },
]
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
        <Button :btn-type="1" text="SUBSCRIBE" to="/" />
      </div>
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
    <div class="pt-20 pb-40">
      <div class="contain">
        <div class="flex md:flex-row flex-col gap-y-10 items-center justify-between border-y py-10">
          <h1 class="font-bold text-4xl">Supported by:</h1>
          <div
            class="flex sm:items-center justify-between gap-5 md:w-1/2 w-full sm:flex-row flex-col gap-y-10 items-start"
          >
            <Icon name="spotify-text" />
            <Icon name="google-text" />
            <Icon name="youtube-text" />
          </div>
        </div>
      </div>
    </div>
    <SectionVector color="red" />
  </section>
  <section class="my-40">
    <div class="contain">
      <h1 class="font-bold text-4xl text-center md:w-1/2 w-full mx-auto">
        Talk. Listen. Get inspired by every minute of it.
      </h1>
      <div class="my-20 flex justify-between md:items-end items-center md:flex-row flex-col">
        <div class="flex flex-col justify-center gap-y-10">
          <div class="h-69 w-69 flex justify-center mx-auto items-center">
            <img src="/home/think.png" alt="Some man think" />
          </div>
          <p class="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
          </p>
        </div>
        <div class="flex flex-col justify-center gap-y-10">
          <div class="h-69 w-69 flex justify-center mx-auto items-center">
            <img src="/home/ideas.png" alt="Some man think" />
          </div>
          <p class="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
          </p>
        </div>
      </div>
    </div>
  </section>
  <Quote />
  <section class="py-40 bg-blue relative">
    <div class="contain">
      <div class="text-center">
        <h1 class="inline font-bold text-5xl mx-auto text-center relative w-full">
          What our listeners say
          <img src="/sun.png" class="absolute top-[-50px] left-[-90px]" />
        </h1>
        <div class="text-gray my-5 text-center">Their experience throughout every platform</div>
        <Carousel
          itemsToShow="auto"
          :loop="true"
          :autoplay="5000"
          :gap="20"
          :wrapAround="true"
          :transition="500"
          class="py-20 relative"
        >
          <Slide v-for="item in coment" :key="item.id" snapAlign="center-even">
            <div class="bg-white text-left p-10 rounded-lg h-full shadow-sm">
              <p class="text-7xl text-red font-bold">“</p>
              <p class="max-w-80">{{ item.coment }}</p>
              <p class="mt-3">{{ item.name }}</p>
            </div>
          </Slide>
          <template #addons>
            <CarouselNavigation class="text-black hover:text-red-500">
              <template #prev>
                <span>
                  <Icon name="arrow-circle" :width="37" :height="37" />
                </span>
              </template>
            </CarouselNavigation>
            <CarouselNavigation class="text-black hover:text-red-500">
              <template #next>
                <span>
                  <Icon
                    name="arrow-circle"
                    class="rotate-180 hover:text-red-500"
                    :width="37"
                    :height="37"
                  />
                </span>
              </template>
            </CarouselNavigation>
          </template>
        </Carousel>
      </div>
    </div>
    <SectionVector color="black" />
  </section>
  <section class="py-40 relative">
    <div class="contain">
      <div class="text-center">
        <h1 class="relative inline text-5xl font-bold">
          Membership benefits
          <img src="/home/title.png" alt="" class="absolute right-[-80px] top-[-80px]" />
        </h1>
        <p class="text-gray text-xl mt-2.5">Become our sponsor and get all benefits</p>
      </div>
      <div class="flex flex-wrap justify-between items-start gap-y-20 gap-x-5 mt-15">
        <div
          v-for="(item, i) in membership"
          :key="i"
          class="sm:w-[30%] w-1/1 flex-col flex items-center text-center gap-x-2.5"
        >
          <img :src="item.img" alt="" />
          <h3 class="font-bold text-xl my-2">{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
      <div class="mt-25 text-center pb-40">
        <Button text="SEE PRICING" class="py-3 px-9 font-bold" to="/" :btn-type="1" />
      </div>
    </div>
    <SectionVector color="black" />
  </section>
  <section class="py-40 relative secont-bg">
    <div class="contain">
      <h1 class="text-5xl text-center font-bold">Recent Episodes</h1>
      <p class="text-gray text-center mt-2.5">Available on your favorite platform</p>
      <div class="reltive flex flex-wrap justify-between items-start gap-y-5 gap-x-2 my-20">
        <div
          v-for="(item, i) in podcast.reverse()"
          :key="i"
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
      </div>
      <div class="py-10 text-center">
        <Button text="BROWSE ALL EPISODES" to="/" :btn-type="1" class="py-5 px-9" />
      </div>
    </div>
  </section>
</template>
<style>
.carousel__next,
.carousel__prev {
  position: absolute;
  top: 425px;
}
.carousel__next {
  left: 55px;
}
</style>
