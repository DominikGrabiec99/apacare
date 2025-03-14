/** INTERFACES */
import type { IRecommendedProducts } from '@/ts/interfaces/RecommendedProducts';

export const useRecommendedProducts = () => {
  const { data: apaCareRecommendedProducts } = useFetch<IRecommendedProducts[]>(
    '/api/ApaCareRecommendedProducts',
  );
  const { data: oraLactinRecommendedProducts } = useFetch<
    IRecommendedProducts[]
  >('/api/OraLactinRecommendedProducts');

  return {
    apaCareRecommendedProducts,
    oraLactinRecommendedProducts,
  };
};
