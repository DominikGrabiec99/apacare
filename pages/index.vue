<template>
  <div class="flex flex-col gap-6 md:gap-8">
    <OrganismMainInformation />
    <div class="container flex flex-col gap-8 px-4 md:px-8">
      <OrganismRecommendedProducts
        :apaCareProducts="apaCareRecommendedProducts || []"
        :oraLactinProducts="oraLactinRecommendedProducts || []"
      />

      <MoleculeAboutUs />
    </div>
    <footer class="h-40 bg-primary" />
  </div>
</template>

<script setup lang="ts">
/** COMPOSABLES */
import { useRecommendedProducts } from '@/composables/useRecommendedProducts';

const { apaCareRecommendedProducts, oraLactinRecommendedProducts } =
  useRecommendedProducts();
</script>
