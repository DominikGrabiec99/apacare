<template>
  <div class="flex items-start gap-4">
    <div
      class="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-white p-2"
    >
      <NuxtIcon :name="iconName" class="text-3xl text-primary" />
    </div>
    <div class="flex flex-col gap-1 text-white">
      <span>{{ informationTitle }}:</span>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  iconName: {
    type: String,
    default: '',
  },
  informationTitle: {
    type: String,
    default: '',
  },
});
</script>
