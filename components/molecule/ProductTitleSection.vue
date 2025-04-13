<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-3xl font-bold text-primary-black">{{ title }}</h1>
    <div class="flex flex-col gap-1">
      <p
        v-for="(text, index) in textsAfterTitle"
        :key="index"
        class="text-justify font-medium text-primary-black"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
  textsAfterTitle: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
</script>
