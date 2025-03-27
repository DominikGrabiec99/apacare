/** SCHEMA */
import type { IRecommendedProducts } from '@/schema/index';
import { ECompany } from '@/schema/index';

export const useRecommendedProducts = () => {
  const { data: apaCareRecommendedProducts } = useFetch<IRecommendedProducts[]>(
    '/api/getRecommendedProducts',
    {
      method: 'POST',
      body: {
        variables: {
          company: ECompany.APACARE,
        },
      },
    },
  );

  const { data: oraLactinRecommendedProducts } = useFetch<
    IRecommendedProducts[]
  >('/api/getRecommendedProducts', {
    method: 'POST',
    body: {
      variables: {
        company: ECompany.ORALACTIN,
      },
    },
  });

  return {
    apaCareRecommendedProducts,
    oraLactinRecommendedProducts,
  };
};
