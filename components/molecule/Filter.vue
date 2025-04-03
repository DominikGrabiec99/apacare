<template>
  <div>
    <Accordion
      type="single"
      collapsible
      :default-value="filter?.isInitialOpen ? filter?.id : ''"
    >
      <AccordionItem :value="filter?.id || ''">
        <AccordionTrigger class="text-lg font-semibold">
          {{ filter?.name }}
        </AccordionTrigger>
        <AccordionContent class="flex flex-col gap-3">
          <AtomCheckbox
            v-for="choice in filter?.choices"
            v-model="choice.value"
            :disabled="disabled"
            :key="choice.id"
            :id="choice.id"
            :text="choice.name"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
/** UI */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

/** INTERFACES */
import type { IFiltersProducts } from '@/ts/interfaces/FiltersProducts';

const filter = defineModel<IFiltersProducts>();
</script>
