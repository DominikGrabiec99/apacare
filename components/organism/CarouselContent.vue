<template>
  <div>
    <Swiper
      :breakpoints="{
        0: {
          slidesPerView: slidesPerViewMobile,
        },
        768: {
          slidesPerView: slidesPerViewTablet,
        },
        1028: {
          slidesPerView: slidesPerViewDesktop,
        },
      }"
      :space-between="spaceBetween"
      :pagination="{ clickable: true }"
      :modules="modules"
    >
      <SwiperSlide v-for="(item, idx) in items" :key="idx">
        <slot :item="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts" generic="T">
//@ts-ignore
import { Pagination } from 'swiper/modules';
// @ts-ignore
import { Swiper, SwiperSlide } from 'swiper/vue';

/** STYLES */
import 'swiper/css';
import 'swiper/css/pagination';

const props = defineProps({
  items: {
    type: Array as PropType<T[]>,
    default: [],
  },
  slidesPerViewDesktop: {
    type: Number,
    default: 4,
  },
  slidesPerViewTablet: {
    type: Number,
    default: 2,
  },
  slidesPerViewMobile: {
    type: Number,
    default: 1,
  },
  spaceBetween: {
    type: Number,
    default: 30,
  },
  showPagination: {
    type: Boolean,
    default: true,
  },
});

const modules = computed(() => {
  const arrModules = [];

  if (props.showPagination) {
    arrModules.push(Pagination);
  }
  return arrModules;
});
</script>

<style lang="scss" scoped>
:deep(.swiper) {
  .swiper-pagination-bullet {
    --size: 14px;
    width: var(--size);
    height: var(--size);
    background-color: #c8c8ca;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #16a34a;
  }

  .swiper-pagination {
    margin-top: 24px;
    position: relative !important;
    border: 1px solid #c8c8ca;
    border-radius: 20px;
    width: min-content;
    display: flex;
    padding-block: 6px;
    padding-inline: 12px;
    justify-self: center !important;
    gap: 6px;
  }

  .swiper-pagination-lock {
    display: none;
  }
}
</style>
