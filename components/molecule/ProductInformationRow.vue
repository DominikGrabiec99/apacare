<template>
  <div
    class="flex px-4 py-3"
    :class="{
      'bg-secondary': index % 2 === 0,
    }"
  >
    <div class="w-1/2 text-base font-semibold text-primary-black">
      {{ information.title }}
    </div>
    <div class="w-1/2">
      <div
        v-if="information.type === EInformationType.TEXT"
        class="text-base text-primary-black"
      >
        {{ information.text }}
      </div>
      <div
        v-if="information.type === EInformationType.CHECK"
        class="flex size-6 items-center justify-center rounded-full p-[2px]"
        :class="[information?.value ? 'bg-primary' : 'bg-red-600']"
      >
        <NuxtIcon
          :name="
            information?.value
              ? 'material-symbols:check'
              : 'material-symbols-light:close-rounded'
          "
          class="text-[40px] font-bold text-white"
        />
      </div>
      <div v-if="information.type === EInformationType.ARRAY">
        <ul class="flex flex-col gap-1">
          <li v-for="(el, idx) in information.array" :key="idx">
            <MoleculeUnderlineNuxtLink
              v-if="el.link"
              :link="el.link"
              :text="el.text"
              text-class="!text-base text-primary-black"
            />
            <span v-else class="text-primary-black">{{ el.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/** SCHEMA */
import { EInformationType } from '@/schema/index';
import type { IInformation } from '@/schema/index';

defineProps({
  index: {
    type: Number,
    default: 0,
  },
  information: {
    type: Object as PropType<IInformation>,
    default: () => ({}),
  },
  lastItem: {
    type: Boolean,
    default: false,
  },
});
</script>
