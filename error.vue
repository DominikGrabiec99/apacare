<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});

if (props.error?.statusCode === 404) {
  await navigateTo('/');
}
</script>

<template>
  <div class="p-8 text-center">
    <p>Przekierowuję na stronę główną...</p>
    <NuxtLink to="/">Przejdz na strone główną</NuxtLink>
  </div>
</template>
