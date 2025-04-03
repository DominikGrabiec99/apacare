<template>
  <Select v-model="model" :disabled="disabled">
    <SelectTrigger
      class="h-10 w-full rounded-none border-primary-black bg-white text-base text-primary-black focus:!ring-0 focus-visible:!ring-0 md:max-w-[250px] xl:max-w-[292px]"
    >
      <SelectValue class="text-primary-black" />
    </SelectTrigger>
    <SelectContent class="rounded-none border-primary-black">
      <SelectGroup>
        <SelectItem
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
          class="cursor-pointer"
        >
          {{ option.text }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
/** UI */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/** INTERFACES */
import type { ISortOption } from '@/ts/interfaces/SortOption';

/** SCHEMA */
import { ESortOrder } from '@/schema';

const model = defineModel<ESortOrder>();

defineProps({
  options: {
    type: Array as PropType<ISortOption[]>,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
