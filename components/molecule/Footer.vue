<template>
  <footer class="bg-secondary">
    <div
      class="container flex w-full flex-col gap-2 px-4 py-8 text-primary-black md:px-8"
    >
      <h5 class="text-2xl font-medium">Jesteś zainteresowany naszą ofertą?</h5>
      <p class="flex flex-col gap-1 text-xl md:flex-row">
        Zadzwoń do nas:
        <a href="tel:+48226354541" class="font-bold" target="_blank">
          22 635 45 41
        </a>
        lub
        <a href="tel:+48601385559" class="font-bold" target="_blank">
          601 38 55 59
        </a>
      </p>

      <span class="mt-8 text-xs">
        Copyright© {{ year }} Kodent. Wszelkie prawa zastrzeżone.
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
