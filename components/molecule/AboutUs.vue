<template>
  <div>
    <h3 class="text-2xl font-bold text-primary-black md:text-4xl">O nas</h3>
    <div
      class="mt-8 flex flex-col items-center gap-4 rounded-lg bg-secondary p-4 md:flex-row md:gap-12 md:p-8"
    >
      <img
        src="/images/about-company.png"
        alt="zdjęcie firmy"
        class="rounded-lg md:max-w-[400px]"
      />
      <AtomExpandingText :text="ABOUT_US_TEXT" :truncate-length="100" />
    </div>
  </div>
</template>

<script setup lang="ts">
/** CONSENTS */
import { ABOUT_US_TEXT } from '@/constants/aboutUs';
</script>
