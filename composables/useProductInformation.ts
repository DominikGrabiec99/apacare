/** SCHEMA */
import type {
  IProduct,
  IList,
  IMethodOfUse,
  IInformation,
} from '@/schema/index';

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

  const getTextAfterMethodOfUse = (product?: IProduct | null) => {
    return product?.textAfterMethodOfUse || '';
  };

  const getProductTextsAfterTitle = (product: IProduct | null) => {
    return product?.textsAfterTitle || [];
  };

  const getProductListInformation = (
    product: IProduct | null,
  ): IList | null => {
    return product?.list || null;
  };

  const getProductMethodOfUse = (product: IProduct | null): IMethodOfUse[] => {
    return (
      product?.methodOfUse.sort(
        (methodA, methodB) => methodB.priority - methodA.priority,
      ) || []
    );
  };

  const getProductInformation = (
    product: IProduct | null,
  ): IInformation[] | [] => {
    return (
      product?.information.sort(
        (methodA, methodB) => methodB.priority - methodA.priority,
      ) || []
    );
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
    getProductMethodOfUse,
    getTextAfterMethodOfUse,
    getProductInformation,
  };
};
