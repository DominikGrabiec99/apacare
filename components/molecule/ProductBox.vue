<template>
  <div class="flex flex-col gap-2 bg-white p-4">
    <NuxtLink :to="productLink">
      <div class="flex h-[30px] flex-wrap gap-1">
        <Badge
          v-for="label in productLabels"
          variant="outline"
          class="h-min cursor-default rounded-none border-primary px-3 text-xs text-primary"
        >
          {{ label }}
        </Badge>
      </div>

      <AtomScaleImg
        class="mx-auto h-40 px-2"
        :photo="productImg"
        :name="productTitle"
      />

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

/** UI */
import { Badge } from '@/components/ui/badge';

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
