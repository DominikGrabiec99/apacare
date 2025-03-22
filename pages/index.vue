<template>
  <div class="flex flex-col gap-10 md:gap-16">
    <OrganismMainInformation />
    <div class="container flex flex-col gap-10 px-4 md:gap-16 md:px-8">
      <OrganismRecommendedProducts
        :apaCareProducts="apaCareRecommendedProducts || []"
        :oraLactinProducts="oraLactinRecommendedProducts || []"
      />
      <MoleculeAboutUs />
      <OrganismSalesProductsAdvantages />
      <OrganismCareOfTeeth />
    </div>
  </div>
</template>

<script setup lang="ts">
/** COMPOSABLES */
import { useRecommendedProducts } from '@/composables/useRecommendedProducts';

const { apaCareRecommendedProducts, oraLactinRecommendedProducts } =
  useRecommendedProducts();
</script>
