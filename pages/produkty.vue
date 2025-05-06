<template>
  <div
    class="container flex flex-col gap-4 px-4 pt-6 md:gap-6 md:px-8 md:pt-12"
  >
    <MoleculeProductsHeader :paths="currentResourcePath" />

    <div class="grid grid-cols-12 gap-4">
      <OrganismProductsFilters
        v-model="productsFilters"
        :disabled="areProductLoading"
        class="hidden h-min bg-white px-4 md:col-span-4 md:flex xl:col-span-3"
      />
      <div class="col-span-12 flex flex-col gap-4 md:col-span-8 xl:col-span-9">
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
            <MoleculeProductsSearch
              v-model="searchValue"
              :disabled="areProductLoading"
            />
            <MoleculeProductsSortButton
              v-model="sortOrder"
              :options="sortValuesOptions"
              :disabled="areProductLoading"
            />
            <OrganismProductsFilters
              v-model="productsFilters"
              :disabled="areProductLoading"
              class="md:hidden"
            />
          </div>
        </div>

        <MoleculeFiltersTabs
          v-if="chosenFilters.length"
          :filters="chosenFilters"
          @remove-chose-from-filter="removeChoseFromFilter"
          @clear-filter="clearFilter"
        />

        <MoleculeProductsSkeleton v-if="areProductLoading" />
        <MoleculeProductsNotFound v-else-if="!allProducts.length" />
        <OrganismProductsList v-else :products="allProducts || []" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/** INTERFACES */
import type { ICurrentResourcePath } from '@/ts/interfaces/CurrentResourcePath';

/** SCHEMA */
import { ESortOrder } from '@/schema';

/** COMPOSABLES */
import { useProductsPage } from '@/composables/useProductsPage';
import { useFilters } from '@/composables/useFilters';

useSeoMeta({
  title: 'Produkty - Kodent | Pasty, płyny i gumy do żucia',
  ogTitle: 'Produkty - Kodent | Pasty, płyny i gumy do żucia',
  description:
    'Oferujemy innowacyjne produkty firmy ApaCare do pielęgnacji jamy ustnej: pasty do zębów, płyny i gumy do żucia z hydroksyapatytem, które dbają o zdrowie Twoich zębów i zapewniają skuteczną ochronę.',
  ogDescription:
    'Oferujemy innowacyjne produkty firmy ApaCare do pielęgnacji jamy ustnej: pasty do zębów, płyny i gumy do żucia z hydroksyapatytem, które dbają o zdrowie Twoich zębów i zapewniają skuteczną ochronę.',
});

definePageMeta({
  layout: 'products-page',
});

const sortValuesOptions = [
  {
    text: 'Polecane',
    value: ESortOrder.RECOMMENDED,
  },
  {
    text: 'Nazwa (A-Z)',
    value: ESortOrder.ALPHABETICAL,
  },
  {
    text: 'Nazwa (Z-A)',
    value: ESortOrder.BACKWARDS,
  },
];

const currentResourcePath = computed<ICurrentResourcePath[]>(() => [
  {
    text: 'Strona głowna',
    link: '/',
    icon: 'mingcute:home-3-line',
  },
]);

const { chosenFilters, productsFilters, removeChoseFromFilter, clearFilter } =
  await useFilters();

const {
  allProducts,
  numberOfProducts,
  sortOrder,
  searchValue,
  areProductLoading,
} = useProductsPage(chosenFilters);
</script>
