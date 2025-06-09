<script setup lang="ts">
//modules
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation as CarouselNavigation } from 'vue3-carousel'

//components
import Button from '@/components/UI/Button.vue'
import PodcastImg from '@/components/PodcastImg.vue'
import Icon from '@/components/Icons/Icon.vue'
import SectionVector from '@/components/UI/SectionVector.vue'
import Quote from '@/components/Sections/Quote.vue'
import MobileApp from '@/components/Sections/MobileApp.vue'
import RelatedaArticle from '@/components/Sections/RelatedaArticle.vue'

//dates
import coments from '@/dates/coments'
import podcast from '../dates/podcasts'
import priceDate from '@/dates/prices'

const pod = podcast
const coment = coments
const prices = priceDate

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
    data-aos="zoom-in fade-up"
    class="hero relative secont-bg"
    style="background: url('/hero-bg.png') no-repeat 0 0 / 100% #f7ede8"
  >
    <div class="mx-auto text-center pb-20">
      <div class="container">
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
      <div class="container">
        <div class="flex md:flex-row flex-col gap-y-10 items-center justify-between border-y py-10">
          <h1 class="font-bold text-4xl">Supported by:</h1>
          <div
            class="flex sm:items-center justify-between gap-5 md:w-1/2 w-full sm:flex-row flex-col gap-y-10 items-start"
          >
            <Icon name="spotify-text" class="text-white hover:text-green-500" />
            <Icon name="google-text" class="text-white hover:text-yellow-500" />
            <Icon name="youtube-text" class="text-white hover:text-red-500" />
          </div>
        </div>
      </div>
    </div>
    <SectionVector color="red" />
  </section>
  <section class="my-40">
    <div class="container">
      <h1 class="font-bold text-4xl text-center md:w-1/2 w-full mx-auto" data-aos="zoom-in">
        Talk. Listen. Get inspired by every minute of it.
      </h1>
      <div class="my-20 flex justify-between md:items-end items-center md:flex-row flex-col">
        <div data-aos="zoom-in" class="flex flex-col justify-center gap-y-10">
          <div class="h-69 w-69 flex justify-center mx-auto items-center">
            <img src="/home/think.png" alt="Some man think" />
          </div>
          <p class="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
          </p>
        </div>
        <div data-aos="zoom-in" class="flex flex-col justify-center gap-y-10">
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
    <div class="container">
      <div class="text-center">
        <h1
          data-aos="zoom-in"
          class="inline font-bold text-5xl mx-auto text-center relative w-full"
        >
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
          <Slide v-for="item in coment" :key="item.id">
            <div class="bg-white text-left p-10 rounded-lg h-full shadow-sm">
              <p class="text-7xl text-red font-bold">“</p>
              <p class="max-w-80">{{ item.coment }}</p>
              <p class="mt-3">{{ item.name }}</p>
            </div>
          </Slide>
          <template #addons>
            <CarouselNavigation>
              <template #prev>
                <span>
                  <Icon name="arrow-circle" :size="37" class="hover:text-red-500" />
                </span>
              </template>
              <template #next>
                <span>
                  <Icon name="arrow-circle" class="rotate-180 hover:text-red-500" :size="37" />
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
    <div class="container">
      <div class="text-center">
        <h1 data-aos="zoom-in" class="relative inline text-5xl font-bold">
          Membership benefits
          <img
            src="/home/title.png"
            alt=""
            class="md:block hidden absolute right-[-80px] top-[-80px]"
          />
        </h1>
        <p data-aos="zoom-in" class="text-gray text-xl mt-2.5">
          Become our sponsor and get all benefits
        </p>
      </div>
      <div class="flex flex-wrap justify-between items-start gap-y-20 gap-x-5 mt-15">
        <div
          data-aos="zoom-in"
          v-for="(item, i) in membership"
          :key="i"
          class="sm:w-[30%] w-1/1 flex-col flex items-center text-center gap-x-2.5"
        >
          <img :src="item.img" alt="" />
          <h3 class="font-bold text-xl my-2">{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
      <div class="mt-25 text-center pb-40" data-aos="zoom-in">
        <Button text="SEE PRICING" class="py-3 px-9 font-bold" to="/" :btn-type="1" />
      </div>
    </div>
    <SectionVector color="black" />
  </section>
  <section class="py-40 relative secont-bg">
    <div class="container">
      <h1 data-aos="zoom-in" class="text-5xl text-center font-bold">Recent Episodes</h1>
      <p data-aos="zoom-in" class="text-gray text-center mt-2.5">
        Available on your favorite platform
      </p>
      <div class="reltive flex flex-wrap justify-between items-start gap-y-5 gap-x-2 my-20">
        <div
          v-for="(item, i) in podcast.reverse()"
          :key="i"
          data-aos="zoom-in"
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
      <div class="py-10 text-center" data-aos="zoom-in">
        <Button text="BROWSE ALL EPISODES" to="/" :btn-type="1" class="py-6 px-9" />
      </div>
    </div>
    <SectionVector color="black" />
  </section>
  <section class="py-40 relative overflow-hidden">
    <div class="container">
      <div class="text-center">
        <h1 data-aos="zoom-in" class="inline relative font-bold text-5xl text-center">
          Become our sponser
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
        <p data-aos="zoom-in" class="text-gray mt-4">Get exclusive episodes, merch and more</p>
      </div>
      <div
        class="mt-25 flex lg:flex-nowrap flex-wrap justify-between md:items-start items-center gap-5"
      >
        <div
          data-aos="zoom-in"
          class="sm:w-[48%] w-[90%] gap-y-5 mx-auto z-10"
          v-for="(item, i) in prices"
          :key="i"
        >
          <div
            class="rounded-lg border-3 pt-15 md:px-10 px-8 pb-10 flex flex-col sm:min-w-75 min-w-auto justify-between h-85"
            :class="item.popular ? 'border-red-500 secont-bg' : 'bg-white'"
          >
            <div>
              <div class="flex items-center font-bold justify-between flex-wrap gap-y-2.5">
                <h1 class="text-4xl">{{ item.title }}</h1>
                <div
                  v-if="item.popular"
                  class="bg-red-500 text-sm text-white rounded-sm px-2 py-px whitespace-nowrap"
                >
                  MOST POPULAR
                </div>
              </div>
              <p class="text-gray text-sm mt-2.5">
                {{ item.text }}
              </p>
            </div>
            <div class="flex justify-between items-center gap-2 flex-wrap">
              <Button to="/" text="SUBCRIBE" :btn-type="1" />
              <div class="font-bold">
                <p class="text-red text-xl">{{ item.price }}</p>
                <p class="text-sm">/month</p>
              </div>
            </div>
          </div>
          <div
            class="rounded-lg mt-5 border-3 md:p-10 p-8 text-sm sm:min-w-75 min-w-auto justify-between h-85"
            :class="item.popular ? 'border-red-500 secont-bg' : 'bg-white'"
          >
            <p class="mb-5">{{ item.ul }}</p>
            <ul class="space-y-3 text-base">
              <li v-for="(li, i) in item.li" :key="i">
                {{ li }}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="absolute sm:top-70 top-82 xl:right-16 lg:right-0 sm:right-[-10px] right-[-30px]"
        >
          <svg
            width="147"
            height="153"
            viewBox="0 0 147 153"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M52.4746 4.99512C53.6975 -0.0414607 61.0157 0.454833 61.5469 5.61035L65.1426 40.5264C65.5665 44.6421 70.1155 46.8569 73.5908 44.7793L73.9238 44.5645L110.157 19.4512C114.254 16.6117 119.318 21.3859 116.725 25.6426L99.1699 54.4551C97.1924 57.7013 98.9458 61.9332 102.64 62.8301L142.562 72.5234C146.99 73.5987 147.344 79.76 143.067 81.335L101.835 96.5215C98.3548 97.8033 97.0519 102.048 99.2139 105.062L114.647 126.572C117.577 130.656 112.79 135.816 108.498 133.201L80.5449 116.17C77.2987 114.192 73.0668 115.946 72.1699 119.64L65.2334 148.207C64.0192 153.206 56.7701 152.767 56.1689 147.657L51.2148 105.549C50.6961 101.14 45.5062 99.0498 42.0762 101.868L15.043 124.081C10.9337 127.458 5.31519 122.348 8.28809 117.938L33.498 80.542C36.0875 76.7005 33.1711 71.5527 28.5449 71.7988L5.62598 73.0186C0.119259 73.3115 -1.1675 65.444 4.14551 63.9668L23.6777 58.5361C27.6246 57.4388 29.1045 52.6198 26.4541 49.4961L9.17188 29.1279C5.78299 25.1339 10.6167 19.4778 15.0898 22.2031L37.4551 35.8301C40.7013 37.8076 44.9332 36.0542 45.8301 32.3604L52.4746 4.99512Z"
              fill="black"
              stroke="black"
            />
          </svg>
        </div>
        <div
          class="absolute sm:bottom-28 bottom-42 xl:left-16 lg:left-0 sm:left-[-10px] left-[-30px]"
        >
          <svg
            width="124"
            height="124"
            viewBox="0 0 124 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.3474 2C76.4722 11.0172 63.6396 29.7092 31.2177 32.9779C-0.450531 36.1705 74.6031 3.02726 97.5111 17.6517C124.289 34.7467 -8.1881 84.113 8.77193 64.9345C18.2604 54.205 106.907 33.3564 106.907 50.2606C106.907 71.7648 8.77179 104.986 2.66813 97.3922C-8.09955 83.9963 114.757 54.8902 121.001 72.7607C128.447 94.07 50.0547 119.321 35.4387 111.169C23.7459 104.647 110.256 89.7993 122 122"
              stroke="#81ADC8"
              stroke-width="2.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
  <RelatedaArticle />
  <MobileApp />
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
