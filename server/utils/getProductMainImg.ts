import type { IProduct } from '@/schema/index';

const getProductMainImg = (product: IProduct | null) => {
  if (!product) {
    return '';
  }
  return findHighestPriorityPhoto(product?.photos)?.url || '';
};

export default getProductMainImg;
