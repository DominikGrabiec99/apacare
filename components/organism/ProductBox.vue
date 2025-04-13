<template>
  <div class="flex flex-col gap-2 bg-white p-4">
    <NuxtLink :to="productLink">
      <MoleculeProductLabelsSection
        class="h-[30px]"
        :product-labels="productLabels"
      />
      <div class="flex h-64 items-center">
        <AtomScaleImg
          class="mx-auto h-max max-h-64 w-min px-2"
          :photo="productImg"
          :name="productTitle"
        />
      </div>

      <h4
        class="h-[24px] text-base font-semibold text-primary-black md:h-[56px] md:text-lg"
      >
        {{ productTitle }}
      </h4>
      <p class="text-justify text-sm text-primary-black">
        {{ productDescription }}
      </p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
/** SCHEMA */
import type { IProduct } from '@/schema/index';

/** COMPOSABLES */
import { useProductInformation } from '@/composables/useProductInformation';

const props = defineProps({
  product: {
    type: Object as PropType<IProduct>,
    default: () => ({}),
  },
});

const {
  getProductMainImg,
  getProductLabel,
  getProductTitle,
  getProductDescription,
  getProductPageLink,
} = useProductInformation();

const productImg = computed(() => getProductMainImg(props.product));
const productLabels = computed(() => getProductLabel(props.product));
const productTitle = computed(() => getProductTitle(props.product));
const productDescription = computed(() => getProductDescription(props.product));
const productLink = computed(() => getProductPageLink(props.product));
</script>
