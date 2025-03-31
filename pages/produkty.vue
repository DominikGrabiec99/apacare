<template>
  <div
    class="container flex flex-col gap-4 px-4 pt-6 md:gap-6 md:px-8 md:pt-12"
  >
    <MoleculeProductsHeader :paths="currentResourcePath" />
    <div class="md:hidden">filtry</div>
    <div class="grid grid-cols-12 gap-4">
      <div class="hidden h-min bg-white p-4 md:col-span-3 md:flex">filtry</div>
      <div class="col-span-12 flex flex-col gap-4 md:col-span-9">
        <div
          class="flex flex-col justify-between gap-2 md:flex-row md:items-center"
        >
          <p class="text-primary-black">
            Liczba produktów:
            <span class="font-semibold">{{ numberOfProducts }}</span>
          </p>
          <div
            class="flex w-full flex-col gap-2 md:w-2/3 md:flex-row md:justify-end md:gap-4 xl:w-4/5"
          >
            <MoleculeProductsSearch />
            <MoleculeProductsSortButton />
          </div>
        </div>

        <OrganismProductsList :products="allProducts || []" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/** INTERFACES */
import type { ICurrentResourcePath } from '@/ts/interfaces/CurrentResourcePath';

/** COMPOSABLES */
import { useProducts } from '@/composables/useProducts';

definePageMeta({
  layout: 'products-page',
});

const currentResourcePath = computed<ICurrentResourcePath[]>(() => [
  {
    text: 'Strona głowna',
    link: '/',
    icon: 'mingcute:home-3-line',
  },
]);

const { allProducts, numberOfProducts } = useProducts();
</script>
