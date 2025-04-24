<template>
  <div class="flex flex-col gap-4 md:gap-6">
    <h3 class="text-left text-2xl font-bold">Parametry</h3>
    <div>
      <div
        class="flex px-4 py-3"
        :class="{ 'bg-secondary': idx % 2 === 0 }"
        v-for="(info, idx) in information"
        :key="idx"
      >
        <div class="w-1/2 text-base font-semibold text-primary-black">
          {{ info.title }}
        </div>
        <div class="w-1/2">
          <div
            v-if="info.type === EInformationType.TEXT"
            class="text-base text-primary-black"
          >
            {{ info.text }}
          </div>
          <div
            v-if="info.type === EInformationType.CHECK"
            class="flex size-7 items-center justify-center rounded-full p-1"
            :class="[info?.value ? 'bg-primary' : 'bg-red-600']"
          >
            <NuxtIcon
              :name="
                info?.value
                  ? 'material-symbols:check'
                  : 'material-symbols-light:close-small'
              "
              class="text-[40px] font-bold text-white"
            />
          </div>
          <div v-if="info.type === EInformationType.ARRAY">
            <ul class="flex flex-col gap-1">
              <li v-for="(el, idx) in info.array" :key="idx">
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
