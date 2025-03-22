<template>
  <footer class="bg-secondary">
    <div
      class="container flex w-full flex-col gap-2 px-4 py-8 text-primary-black md:px-8"
    >
      <h5 class="text-2xl font-medium">Jesteś zainteresowany naszą ofertą?</h5>
      <p class="text-xl">
        Zadzwoń do nas:
        <a href="tel:+48226354541" class="font-bold" target="_blank">
          22 635 45 41
        </a>
        lub
        <a href="tel:+48601385559" class="font-bold" target="_blank">
          601 38 55 59
        </a>
      </p>
      <div>
        <p>Od poniedziałku do piątku w godzinach 8:00 - 21:00</p>
        <p>Opłata zgodna z taryfądostawcy usług</p>
      </div>

      <span class="mt-8 text-xs"
        >Copyright© {{ year }} Kodent. Wszelkie prawa zastrzeżone.</span
      >
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
