<template>
  <div>
    <div
      class="flex flex-col md:mb-10 md:flex-row md:items-center md:justify-between"
    >
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
    <div class="mt-8">
      <OrganismCarouselContent :items="SALES_PRODUCTS_ADVANTAGES">
        <template #default="{ item }">
          <MoleculeSalesProductAdvantage
            :title="item.title"
            :text="item.text"
            :icon="item.icon"
          />
        </template>
      </OrganismCarouselContent>
    </div>
  </div>
</template>

<script setup lang="ts">
/** CONSTANTS */
import { SALES_PRODUCTS_ADVANTAGES } from '@/constants/salesProductsAdvantages';
</script>
