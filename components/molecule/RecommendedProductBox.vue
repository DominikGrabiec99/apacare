<template>
  <div>
    <NuxtLink :to="`./produkt?id=${product.id}`">
      <div
        class="flex h-72 items-center justify-center overflow-hidden rounded-lg bg-secondary py-4"
      >
        <AtomScaleImg
          class="h-full max-h-64 w-auto px-2"
          :photo="product.photo"
          :name="product.name"
        />
      </div>

      <div class="flex flex-col gap-2 p-4">
        <p class="text-xl font-bold text-primary-black">{{ product.name }}</p>
        <p class="text-md text-primary-black">
          {{ product.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
/** SCHEMA */
import type { IRecommendedProducts } from '@/schema/index';

defineProps({
  product: {
    type: Object as PropType<IRecommendedProducts>,
    default: () => ({}),
  },
});
</script>
