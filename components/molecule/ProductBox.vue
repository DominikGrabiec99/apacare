<template>
  <div class="grid gap-2 rounded-sm bg-white p-4">
    <div class="flex h-[30px] flex-wrap gap-1">
      <Badge v-for="label in productLabels" class="h-min px-3 text-xs">
        {{ label }}
      </Badge>
    </div>
    <img class="mx-auto h-44" :src="productImg || ''" :alt="productTitle" />

    <h4 class="font-lg h-[46px] font-semibold text-primary-black">
      {{ productTitle }}
    </h4>
    <p class="h-[80px] text-sm text-primary-black">{{ productDescription }}</p>
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
