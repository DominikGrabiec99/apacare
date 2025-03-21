<template>
  <div class="flex flex-col items-center gap-4 py-4">
    <div class="flex items-center justify-center rounded-full bg-secondary p-3">
      <NuxtIcon :name="icon" class="text-5xl text-primary" />
    </div>
    <div class="flex h-full flex-col justify-between gap-1">
      <p class="text-center font-semibold text-primary-black">{{ title }}</p>
      <p class="text-center text-sm text-primary-black">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
});
</script>
