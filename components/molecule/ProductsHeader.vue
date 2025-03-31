<template>
  <div class="flex flex-col gap-4">
    <AtomBreadCrumpPath :paths="paths" />

    <h3 class="text-2xl font-bold text-primary-black md:text-4xl">
      Nasze produkty
    </h3>
  </div>
</template>

<script setup lang="ts">
/** INTERFACES */
import type { ICurrentResourcePath } from '@/ts/interfaces/CurrentResourcePath';

defineProps({
  paths: {
    type: Array as PropType<ICurrentResourcePath[]>,
    default: () => [],
  },
});
</script>
