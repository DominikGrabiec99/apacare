<template>
  <div>
    <NuxtLink :to="`./produkt/${product.id}`">
      <div
        class="flex items-center justify-center rounded-lg bg-secondary py-4"
      >
        <img class="h-64" :src="product.photo" :alt="product.name" />
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
/** INTERFACES */
import type { IRecommendedProducts } from '@/ts/interfaces/RecommendedProducts';

defineProps({
  product: {
    type: Object as PropType<IRecommendedProducts>,
    default: () => ({}),
  },
});
</script>
