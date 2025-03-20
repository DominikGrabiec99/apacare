<template>
  <div>
    <div class="mb-6">
      <p class="text-primary-black">
        {{ shortDescription }}
        <OrganismSidebarContent
          open-button-text="Dowiedz się więcej"
          :sidebar-title="sidebarTitle"
          :sidebar-content="description"
        />
      </p>
    </div>
    <OrganismCarouselContent>
      <CarouselItem
        v-for="product in products"
        :key="product.id"
        class="basis-3/4 md:basis-1/2 lg:basis-1/4"
      >
        <MoleculeProductBox :product="product" />
      </CarouselItem>
    </OrganismCarouselContent>
  </div>
</template>

<script setup lang="ts">
/** INTERFACES */
import type { IRecommendedProducts } from '@/ts/interfaces/RecommendedProducts';

defineProps({
  products: {
    type: Array as PropType<IRecommendedProducts[]>,
    default: [],
  },
  description: {
    type: String,
    default: '',
  },
  shortDescription: {
    type: String,
    default: '',
  },
  sidebarTitle: {
    type: String,
    default: '',
  },
});
</script>
