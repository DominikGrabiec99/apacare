<template>
  <div class="flex w-full items-center gap-6">
    <div class="w-1/2 xl:w-2/5">
      <img
        :src="currentItem?.photo || ''"
        :alt="currentItem?.title || ''"
        class="flex-shrink-0 rounded-lg"
      />
    </div>
    <div class="flex w-1/2 flex-col gap-5 xl:w-3/5">
      <div
        v-for="(item, idx) in items"
        :key="item.id"
        class="cursor-pointer px-4 pt-4"
        :class="{
          'border-t-2 border-solid border-primary-black': isItemChosen(item.id),
        }"
        @mouseenter="() => choseItem(item.id)"
      >
        <div class="flex items-center gap-10 font-bold text-primary-black">
          <p class="w-8 text-lg">{{ formatSingleNumber(idx + 1) }}</p>
          <div
            class="flex flex-col gap-2 pb-2"
            :class="{
              'border-b-1 border-black-100 border-solid': isItemChosen(item.id),
            }"
          >
            <h5 class="text-lg xl:text-2xl" @focus="choseItem(item.id)">
              {{ item.title }}
            </h5>
            <div v-show="isItemChosen(item.id)" class="flex flex-col gap-2">
              <p v-if="item.text" class="text-sm xl:text-base">
                {{ item.text }}
              </p>
              <AtomUnderlineNuxtLink
                v-if="item.link"
                :link="item.link"
                text-class="text-sm"
                text="Dowiedz się więcej"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/** INTERFACES */
import type { ICareOfTooth } from '@/ts/interfaces/CareOfTooth';

const props = defineProps({
  items: {
    type: Array as PropType<ICareOfTooth[]>,
    default: [],
  },
});

const chosenItemId = ref(props.items?.[0]?.id || 0);

const currentItem = computed(() =>
  props.items.find((item) => item.id === chosenItemId.value),
);

const isItemChosen = (id: number) => {
  return chosenItemId.value === id;
};

const choseItem = (id: number) => {
  chosenItemId.value = id;
};
</script>
