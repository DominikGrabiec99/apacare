<template>
  <div class="flex flex-col gap-6 pt-6 md:gap-10 md:pt-12">
    <Head>
      <Title>{{ seoTitle }}</Title>
      <Meta name="description" :content="productDescription" />
      <Meta name="og:description" :content="productDescription" />
      <Meta name="og:title" :content="seoTitle" />
    </Head>
    <div class="container grid grid-cols-12 px-4 md:px-8">
      <div
        class="col-span-12 flex flex-col items-center justify-center gap-3 md:col-span-6"
      >
        <MoleculeProductLabelsSection
          v-if="productLabels.length"
          class="w-full"
          :product-labels="productLabels"
        />
        <NuxtImg
          :src="productImg"
          :alt="productTitle"
          fetchpriority="high"
          class="max-h-[340px]"
        />
      </div>
      <MoleculeProductTitleSection
        :title="productTitle"
        :texts-after-title="productTextsAfterTitle"
        class="col-span-12 md:col-span-6"
      />
    </div>
    <div
      v-if="productListInformation?.type !== EListType.EMPTY"
      class="bg-secondary py-4 md:py-8"
    >
      <div class="container px-4 md:px-8">
        <OrganismProductListInformation
          :list="productListInformation?.elementsText || []"
          :textsAfterList="textsAfterList"
        />
      </div>
    </div>

    <div class="container flex flex-col gap-6 px-4 md:gap-10 md:px-8">
      <OrganismProductHowToUse
        v-if="productMethodOfUse?.length"
        :method-of-use="productMethodOfUse"
        :text-after="productTextAfterMethodOfUse"
        :productName="productTitle"
      />

      <OrganismProductInformationTable
        v-if="productInformation?.length"
        :information="productInformation"
      />

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

useSeoMeta({
  title: 'Produkty - Kodent | Pasty, płyny i gumy do żucia',
  ogTitle: 'Produkty - Kodent | Pasty, płyny i gumy do żucia',
  description:
    'Oferujemy innowacyjne produkty firmy ApaCare do pielęgnacji jamy ustnej: pasty do zębów, płyny i gumy do żucia z hydroksyapatytem, które dbają o zdrowie Twoich zębów i zapewniają skuteczną ochronę.',
  ogDescription:
    'Oferujemy innowacyjne produkty firmy ApaCare do pielęgnacji jamy ustnej: pasty do zębów, płyny i gumy do żucia z hydroksyapatytem, które dbają o zdrowie Twoich zębów i zapewniają skuteczną ochronę.',
});

const { productRelation, product } = useProduct();

const route = useRoute();

const {
  getProductMainImg,
  getProductTitle,
  getProductTextsAfterTitle,
  getProductLabel,
  getProductListInformation,
  getTextsAfterList,
  getProductMethodOfUse,
  getTextAfterMethodOfUse,
  getProductInformation,
  getProductDescription,
} = useProductInformation();

const productImg = computed(() => getProductMainImg(product.value));
const productLabels = computed(() => getProductLabel(product.value));
const productTitle = computed(() => getProductTitle(product.value));
const productTextAfterMethodOfUse = computed(() =>
  getTextAfterMethodOfUse(product.value),
);
const productTextsAfterTitle = computed(() =>
  getProductTextsAfterTitle(product.value),
);
const productListInformation = computed(() =>
  getProductListInformation(product.value),
);
const productInformation = computed(() => getProductInformation(product.value));
const productMethodOfUse = computed(() => getProductMethodOfUse(product.value));
const textsAfterList = computed(() => getTextsAfterList(product.value));
const productDescription = computed(() => getProductDescription(product.value));
const seoTitle = computed(
  () => `${productTitle.value}- Ochrona i pielęgnacja jamy ustnej z ApaCare`,
);

watch(
  () => route.query.id,
  () => {
    if (import.meta.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  { immediate: true },
);
</script>
