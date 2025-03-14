<template>
  <div>
    <Carousel>
      <CarouselContent>
        <CarouselItem
          v-for="product in products"
          :key="product.id"
          class="basis-3/4 md:basis-1/2 lg:basis-1/4"
        >
          <MoleculeProductBox :product="product" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="hidden" />
      <CarouselNext class="hidden" />
    </Carousel>
  </div>
</template>

<script setup lang="ts">
/** UI */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

/** INTERFACES */
import type { IRecommendedProducts } from '@/ts/interfaces/RecommendedProducts';

defineProps({
  products: {
    type: Array as PropType<IRecommendedProducts[]>,
    default: [],
  },
});
</script>
