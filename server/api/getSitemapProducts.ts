/** ASSETS */
import allProducts from '@/server/assets/allProducts/releaseAt_2025-03-27.json';

/** SCHEMA */
import { IProduct } from '@/schema/index';

/** UTILS */
import getProductMainImg from '@/server/utils/getProductMainImg';

export default defineEventHandler(async (event) => {
  try {
    return allProducts.map((product) => ({
      id: product.id,
      img: getProductMainImg(product as IProduct),
      name: product.name,
    }));
  } catch (error) {
    console.error('getProductsIds error: ', error);
    return [];
  }
});
