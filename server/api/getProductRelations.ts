/** ASSETS */
import allProducts from '@/server/assets/allProducts/releaseAt_2025-03-27.json';

/** UTILS */
import mapRecommendedProducts from '@/server/utils/mapRecommendedProducts';

/** SCHEMA */
import type { IProduct } from '@/schema/index';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { id } = body?.variables;

    if (!id) {
      throw new Error('You need to provide id');
    }

    const product = allProducts.find((product) => product.id === id);

    if (!product) {
      throw new Error(`Can't find product with id: ${id}`);
    }

    const recommendedProducts = allProducts.reduce((acc: IProduct[], el) => {
      if (product.relationProductsId.includes(el.id)) {
        acc.push(el as IProduct);
      }
      return acc;
    }, []);

    return mapRecommendedProducts(recommendedProducts as IProduct[]);
  } catch (error) {
    console.error('getProductRelations error: ', error);
    return error;
  }
});
