<script setup>
import Button from '@/components/UI/Button.vue'
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
          About <br /><span class="text-red">Pod of Cast</span>
        </h1>
        <p class="mt-10 mb-10 text-gray max-w-88 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
        </p>
        <div class="flex items-center gap-6 justify-center flex-wrap">
          <Button :btn-type="2" text="SUBSCRIBE" to="/" class="py-5 px-8 font-bold drop-shadow" />
          <Button :btn-type="1" text="SUBSCRIBE" to="/" class="py-5 px-8 font-bold" />
        </div>
      </div>
    </div>
    <div class="relative -bottom-25 w-full">
      <div class="container">
        <div class="flex items-center justify-between gap-5 flex-wrap">
          <div
            class="lg:w-[30%] md:w-[w-47%] w-full drop-shadow-red border-3 bg-white rounded-lg py-14 px-18 text-center"
          >
            <h2 class="font-bold xl:text-5xl lg:text-4xl text-3xl">
              <span class="text-red">72</span>K
            </h2>
            <p class="text-gray font-medium mt-5">Community Members</p>
          </div>
          <div
            class="lg:w-[30%] md:w-[w-47%] w-full drop-shadow-red border-3 bg-white rounded-lg py-14 px-18 text-center"
          >
            <h2 class="font-bold xl:text-5xl lg:text-4xl text-3xl">
              <span class="text-red">128</span>K
            </h2>
            <p class="text-gray font-medium mt-5">Podcast Subscribers</p>
          </div>
          <div
            class="lg:w-[30%] md:w-[w-47%] w-full drop-shadow-red border-3 bg-white rounded-lg py-14 px-18 text-center"
          >
            <h2 class="font-bold xl:text-5xl lg:text-4xl text-3xl">
              <span class="text-red">59</span>K
            </h2>
            <p class="text-gray font-medium mt-5">Daily Listeners</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="my-20 pt-20">
    <div class="container">
      <h1 class="font-bold text-4xl text-center">What our listeners say</h1>
      <p class="text-gray text-center mt-5 mb-8">Their experience throughout every platform</p>
      <div class="w-full h-full text-center">
        <img
          src="/about/what.jpg"
          alt="microphone"
          class="object-cover rounded-lg max-h-160 w-full h-full"
        />
      </div>
      <h2 class="text-center relative text-3xl font-bold mt-15 mb-20">About and History</h2>
      <div class="flex items-start justify-between gap-10 md:flex-nowrap flex-wrap">
        <div class="md:w-[48%] w-full space-y-5 text-gray">
          <p>
            Eu non diam phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi
            etiam dignissim. Id diam vel quam elementum pulvinar.
          </p>
          <p>
            Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi quis commodo odio
            aenean sed adipiscing odio diam. uno fablotoson louw uit.
          </p>
        </div>
        <div class="md:w-[48%] w-full space-y-5 text-gray">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum
            euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel,
            senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum,
            libero. Ante enim eget.
          </p>
          <p>Viverra at porttitor accumsan. Orci non here</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
