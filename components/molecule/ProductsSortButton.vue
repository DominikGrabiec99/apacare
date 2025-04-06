<template>
  <Select v-model="model" :disabled="disabled">
    <SelectTrigger
      class="h-10 w-full rounded-none border-transparent border-b-primary-black bg-transparent text-base text-primary-black shadow-none focus:!ring-0 focus-visible:!ring-0 md:max-w-[250px] xl:max-w-[292px]"
    >
      <ClientOnly>
        <SelectValue class="text-primary-black" />
      </ClientOnly>
    </SelectTrigger>
    <SelectContent class="-top-[4px] rounded-none border-secondary shadow-md">
      <ClientOnly>
        <SelectGroup>
          <SelectItem
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
            class="cursor-pointer focus:underline"
          >
            <div class="flex items-center gap-3">
              <div
                class="size-5 shrink-0 rounded-full border-[3px] border-solid border-secondary bg-transparent"
                :class="{ '!border-primary-black': model === option.value }"
              />
              <span class="text-base">{{ option.text }}</span>
            </div>
          </SelectItem>
        </SelectGroup>
      </ClientOnly>
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
