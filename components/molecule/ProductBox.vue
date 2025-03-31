<template>
  <div class="flex flex-col gap-2 bg-white p-4">
    <div class="flex h-[30px] flex-wrap gap-1">
      <Badge
        v-for="label in productLabels"
        class="h-min cursor-default px-3 text-xs"
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
    <p class="h-[66px] text-justify text-sm text-primary-black md:h-[80px]">
      {{ productDescription }}
    </p>
    <NuxtLink :to="productLink" class="mx-auto">
      <Button
        href=""
        variant="outline"
        class="w-min border-primary px-4 text-base font-semibold text-primary hover:text-primary"
      >
        Sprawdź
      </Button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
/** SCHEMA */
import type { Product } from '@/schema/index';

/** COMPOSABLES */
import { useProductInformation } from '@/composables/useProductInformation';

/** UI */
import { Badge } from '@/components/ui/badge';

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
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
