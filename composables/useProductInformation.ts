/** SCHEMA */
import type { IProduct, IList } from '@/schema/index';

/** UTILS */
import findHighestPriorityPhoto from '@/server/utils/findHighestPriorityPhoto';

export const useProductInformation = () => {
  const getProductMainImg = (product: IProduct | null) => {
    if (!product) {
      return '';
    }
    return findHighestPriorityPhoto(product?.photos)?.url || '';
  };

  const getProductLabel = (product: IProduct | null) => {
    return product?.labels || [];
  };

  const getProductTitle = (product?: IProduct | null) => {
    return product?.name || '';
  };

  const getProductDescription = (product: IProduct | null) => {
    return product?.description || '';
  };

  const getProductTextsAfterTitle = (product: IProduct | null) => {
    return product?.textsAfterTitle || [];
  };

  const getProductListInformation = (
    product: IProduct | null,
  ): IList | null => {
    return product?.list || null;
  };

  const getTextsAfterList = (product: IProduct | null) => {
    return product?.textsAfterList || [];
  };

  const getProductPageLink = (product: IProduct | null) => {
    if (!product) {
      return '';
    }

    return `./produkt?id=${product?.id}`;
  };

  return {
    getProductMainImg,
    getProductLabel,
    getProductTitle,
    getProductDescription,
    getProductPageLink,
    getProductTextsAfterTitle,
    getProductListInformation,
    getTextsAfterList,
  };
};
