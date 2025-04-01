/** SCHEMA */
import type { IProduct } from '@/schema/index';

/** UTILS */
import findHighestPriorityPhoto from '@/server/utils/findHighestPriorityPhoto';

export const useProductInformation = () => {
  const getProductMainImg = (product: IProduct) => {
    return findHighestPriorityPhoto(product.photos).url || '';
  };

  const getProductLabel = (product: IProduct) => {
    return product.labels || [];
  };

  const getProductTitle = (product: IProduct) => {
    return product.name || '';
  };

  const getProductDescription = (product: IProduct) => {
    return product.description || '';
  };

  const getProductPageLink = (product: IProduct) => {
    return `./produkt?id=${product.id}`;
  };

  return {
    getProductMainImg,
    getProductLabel,
    getProductTitle,
    getProductDescription,
    getProductPageLink,
  };
};
