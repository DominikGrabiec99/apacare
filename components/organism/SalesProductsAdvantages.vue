<template>
  <div>
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
      <h3 class="text-2xl font-bold text-primary-black md:text-4xl">
        Zalety naszych produktów
      </h3>
      <AtomUnderlineNuxtLink
        link="/badania"
        text="Sprawdź badania"
        text-class="font-medium !text-sm md:!text-base flex items-center"
        showIcon
      />
    </div>
    <div class="mt-8 flex flex-col md:flex-row">
      <OrganismCarouselContent>
        <CarouselItem
          v-for="(advantage, index) in SALES_PRODUCTS_ADVANTAGES"
          :key="index"
          class="basis-3/4 md:basis-1/4 lg:basis-1/4"
        >
          <MoleculeSalesProductAdvantage
            class="h-full"
            :title="advantage.title"
            :text="advantage.text"
            :icon="advantage.icon"
          />
        </CarouselItem>
      </OrganismCarouselContent>
    </div>
  </div>
</template>

<script setup lang="ts">
/** CONSTANTS */
import { SALES_PRODUCTS_ADVANTAGES } from '@/constants/salesProductsAdvantages';
</script>
