<template>
  <div class="grid grid-cols-12 gap-4">
    <Skeleton
      v-for="(el, idx) in 12"
      :key="idx"
      class="col-span-12 h-[382px] md:col-span-6 md:h-[434px] xl:col-span-4 xl:h-[454px]"
    />
  </div>
</template>

<script setup lang="ts">
/** UI */
import { Skeleton } from '@/components/ui/skeleton';
</script>
