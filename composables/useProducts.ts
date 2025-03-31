/** SCHEMA */
import type { Product } from '@/schema';

export const useProducts = () => {
  const { data: dataProducts } = useFetch<{
    products: Product[];
    numberOfProducts: number;
  }>('/api/getProducts', {
    method: 'POST',
    body: {
      variables: {},
    },
  });

  const allProducts = computed(() => dataProducts.value?.products || []);
  const numberOfProducts = computed(
    () => dataProducts.value?.numberOfProducts || [],
  );

  return {
    allProducts,
    numberOfProducts,
  };
};
