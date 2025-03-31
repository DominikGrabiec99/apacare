/** SCHEMA */
import type { Product } from '@/schema';

export const useProducts = () => {
  const { data: allProducts } = useFetch<Product[]>('/api/getProducts', {
    method: 'POST',
    body: {
      variables: {},
    },
  });

  return {
    allProducts,
  };
};
