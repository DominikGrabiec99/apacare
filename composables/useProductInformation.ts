/** SCHEMA */
import type { Product } from '@/schema/index';

/** UTILS */
import findHighestPriorityPhoto from '@/server/utils/findHighestPriorityPhoto';

export const useProductInformation = () => {
  const getProductMainImg = (product: Product) => {
    return findHighestPriorityPhoto(product.photos).url || '';
  };

  const getProductLabel = (product: Product) => {
    return product.labels || [];
  };

  const getProductTitle = (product: Product) => {
    return product.name || '';
  };

  const getProductDescription = (product: Product) => {
    return product.description || '';
  };

  const getProductPageLink = (product: Product) => {
    return `./produkt${product.id}`;
  };

  return {
    getProductMainImg,
    getProductLabel,
    getProductTitle,
    getProductDescription,
    getProductPageLink,
  };
};
