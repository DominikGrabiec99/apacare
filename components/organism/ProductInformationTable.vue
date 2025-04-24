<template>
  <div class="flex flex-col gap-4 md:gap-6">
    <h3 class="text-left text-2xl font-bold">Parametry</h3>
    <div>
      <MoleculeProductInformationRow
        v-for="(info, idx) in information"
        :key="idx"
        :index="idx"
        :information="info"
        :last-item="information.length - 1 === idx"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
/** SCHEMA */
import { EInformationType } from '@/schema/index';
import type { IInformation } from '@/schema/index';

defineProps({
  information: {
    type: Array as PropType<IInformation[]>,
    default: () => [],
  },
});
</script>
