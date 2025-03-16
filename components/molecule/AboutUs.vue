<template>
  <div>
    <h3 class="text-2xl font-bold text-primary-black md:text-4xl">O nas</h3>
    <div class="mt-6 flex flex-col items-center gap-4 md:flex-row md:gap-12">
      <img
        src="/images/about-us.png"
        alt="zdjęcie firmy"
        class="rounded-lg md:max-w-[300px]"
      />
      <!-- <div class="rounded-lg bg-secondary p-4 md:p-6"> -->
      <p class="text-primary-black">{{ ABOUT_US_TEXT }}</p>
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
/** CONSENTS */
import { ABOUT_US_TEXT } from '@/constants/aboutUs';
</script>
