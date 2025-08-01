import { useWindowSize } from '@vueuse/core';

const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const useViewPortWidth = () => {
  const { width } = useWindowSize();

  const isMobile = computed(() => width.value < screens.md);
  const isTablet = computed(
    () => width.value >= screens.md && width.value < screens.lg,
  );
  const isLg = computed(
    () => width.value >= screens.lg && width.value < screens.xl,
  );
  const isXl = computed(() => width.value >= screens.xl);

  return {
    isMobile,
    isTablet,
    isLg,
    isXl,
  };
};
