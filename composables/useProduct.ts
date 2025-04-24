/** SCHEMA */
import type { IProduct, IRecommendedProducts } from '@/schema';

export const useProduct = () => {
  const route = useRoute();

  const { data: product } = useAsyncData<IProduct>(
    'product',
    () =>
      $fetch('/api/getProduct', {
        method: 'POST',
        body: {
          variables: {
            id: route?.query?.id || '',
          },
        },
      }),
    {
      watch: [() => route.query.id],
    },
  );

  const { data: productRelation } = useAsyncData<IRecommendedProducts[]>(
    'productRelation',
    () =>
      $fetch('/api/getProductRelations', {
        method: 'POST',
        body: {
          variables: {
            id: route?.query?.id || '',
          },
        },
      }),
    {
      watch: [() => route.query.id],
    },
  );

  return {
    productRelation,
    product,
  };
};
