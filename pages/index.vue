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

useSeoMeta({
  title: 'Kodent - profesjonalna pielęgnacja zębów',
  ogTitle: 'Kodent - profesjonalna pielęgnacja zębów',
  description:
    'Odkryj produkty ApaCare: pasty do zębów, płyny i gumy do żucia z hydroksyapatytem. Zdrowe, lśniące zęby każdego dnia. Firma kodent jest polskim dystrybutorem past do zębów, akcesoriów pielegnacyjnych oraz innych produktów marki apacare.',
  ogDescription:
    'Odkryj produkty ApaCare: pasty do zębów, płyny i gumy do żucia z hydroksyapatytem. Zdrowe, lśniące zęby każdego dnia. Firma kodent jest polskim dystrybutorem past do zębów, akcesoriów pielegnacyjnych oraz innych produktów marki apacare.',
});

const { apaCareRecommendedProducts, oraLactinRecommendedProducts } =
  useRecommendedProducts();
</script>
