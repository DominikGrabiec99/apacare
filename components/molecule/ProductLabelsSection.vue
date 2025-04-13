<template>
  <div class="flex flex-wrap gap-1">
    <Badge
      v-for="label in productLabels"
      variant="outline"
      class="h-min cursor-default rounded-none border-primary px-3 text-xs text-primary"
    >
      {{ label }}
    </Badge>
  </div>
</template>

<script setup lang="ts">
/** UI */
import { Badge } from '@/components/ui/badge';

defineProps({
  productLabels: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
</script>
