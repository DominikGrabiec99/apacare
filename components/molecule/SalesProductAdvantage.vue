<template>
  <div
    class="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-solid border-primary bg-[#7bcf9a] p-4 md:max-w-[250px]"
  >
    <img :src="photo" :alt="text" class="size-20" />
    <p class="text-center font-medium text-white">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  photo: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
});
</script>
