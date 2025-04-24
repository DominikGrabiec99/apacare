<template>
  <div class="flex flex-col gap-4 md:gap-6">
    <h3 class="text-left text-2xl font-bold md:text-center">
      Dlaczego warto używać?
    </h3>
    <div class="flex flex-col gap-4 md:gap-6">
      <div
        v-for="(el, idx) in list"
        :key="idx"
        class="flex w-full gap-2 md:w-1/2 md:flex-row"
        :class="{
          'md:flex-row-reverse md:self-start md:pr-2': idx % 2 === 0,
          'md:self-end md:pl-2': idx % 2 === 1,
        }"
      >
        <NuxtIcon
          v-if="el.icon"
          :name="el.icon"
          class="flex-shrink-0 text-3xl font-semibold text-primary md:text-5xl"
        />
        <div class="flex flex-col">
          <div
            class="flex flex-row gap-1"
            :class="{
              'md:flex-row-reverse': idx % 2 === 0,
            }"
          >
            <p class="text-medium text-lg">{{ el.title }}</p>
          </div>
          <p
            class="text-sm"
            :class="{
              'md:text-end': idx % 2 === 0,
            }"
          >
            {{ el.text }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="textsAfterList.length" class="flex justify-center">
      <OrganismSidebarContent
        open-button-text="Dowiedz się więcej"
        sidebar-title="Dlaczego warto używać?"
      >
        <div class="flex flex-col gap-2">
          <p
            v-for="(text, idx) in textsAfterList"
            :key="idx"
            class="text-base text-primary-black"
          >
            {{ text }}
          </p>
        </div>
      </OrganismSidebarContent>
    </div>
  </div>
</template>

<script setup lang="ts">
/** SCHEMA */
import type { IElementText } from '@/schema/index';

defineProps({
  list: {
    type: Array as PropType<IElementText[]>,
    default: () => [],
  },
  textsAfterList: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
</script>
