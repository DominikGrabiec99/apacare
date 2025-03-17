<template>
  <div>
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
      <h3 class="text-2xl font-bold text-primary-black md:text-4xl">
        Zalety naszych produktów
      </h3>
      <AtomUnderlineNuxtLink
        link="/badania"
        text="Sprawdź badania"
        text-class="font-medium"
        showIcon
      />
    </div>
    <div class="mt-8 flex flex-col gap-4 md:flex-row md:gap-8">
      <MoleculeSalesProductAdvantage
        v-for="(advantage, index) in SALES_PRODUCTS_ADVANTAGES"
        :key="index"
        :photo="advantage.photo"
        :text="advantage.text"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
/** CONSTANTS */
import { SALES_PRODUCTS_ADVANTAGES } from '@/constants/salesProductsAdvantages';
</script>
