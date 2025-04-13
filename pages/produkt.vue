<template>
  <div class="flex flex-col gap-4 pt-6 md:gap-6 md:pt-12">
    <div class="container grid grid-cols-12 px-4 md:px-8">
      <div
        class="col-span-12 flex flex-col items-center justify-center gap-3 md:col-span-6"
      >
        <MoleculeProductLabelsSection
          v-if="productLabels.length"
          class="w-full"
          :product-labels="productLabels"
        />
        <NuxtImg :src="productImg" :alt="productTitle" class="max-h-[340px]" />
      </div>
      <MoleculeProductTitleSection
        :title="productTitle"
        :texts-after-title="productTextsAfterTitle"
        class="col-span-12 md:col-span-6"
      />
    </div>
    <div
      v-if="productListInformation?.type !== EListType.EMPTY"
      class="bg-secondary py-4 md:py-6"
    >
      <div class="container px-4 md:px-8">
        <OrganismProductListInformation
          :list="productListInformation?.elementsText || []"
          :textsAfterList="textsAfterList"
        />
      </div>
    </div>

    <div class="container flex flex-col gap-4 px-4 md:gap-6 md:px-8">
      <div v-if="productRelation?.length">
        <h3 class="text-2xl font-bold">Polcane dla ciebie</h3>
        <OrganismCarouselContent
          class="mt-3"
          :items="productRelation"
          showPagination
        >
          <template #default="{ item }">
            <MoleculeRecommendedProductBox :product="item" />
          </template>
        </OrganismCarouselContent>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/** COMPOSABLES */
import { useProductInformation } from '@/composables/useProductInformation';
import { useProduct } from '@/composables/useProduct';

/** SCHEMA */
import { EListType } from '@/schema/index';

const { productRelation, product } = useProduct();

const {
  getProductMainImg,
  getProductTitle,
  getProductTextsAfterTitle,
  getProductLabel,
  getProductListInformation,
  getTextsAfterList,
} = useProductInformation();

const productImg = computed(() => getProductMainImg(product.value));
const productLabels = computed(() => getProductLabel(product.value));
const productTitle = computed(() => getProductTitle(product.value));
const productTextsAfterTitle = computed(() =>
  getProductTextsAfterTitle(product.value),
);
const productListInformation = computed(() =>
  getProductListInformation(product.value),
);
const textsAfterList = computed(() => getTextsAfterList(product.value));
</script>
