<template>
  <div>
    <AtomTitleElementSection text="O nas" />
    <div
      class="flex flex-col items-center gap-4 rounded-lg bg-secondary p-4 md:flex-row md:gap-12 md:p-8"
    >
      <img
        src="/images/about-company.webp"
        alt="zdjęcie firmy"
        class="rounded-lg md:max-w-[400px]"
      />
      <AtomExpandingText
        :text="ABOUT_US_TEXT"
        :truncate-length="120"
        text-class="text-justify"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
/** CONSENTS */
import { ABOUT_US_TEXT } from '@/constants/aboutUs';
</script>
