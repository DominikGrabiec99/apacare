/** ASSETS */
import allProducts from '@/server/assets/allProducts/releaseAt_2025-03-27.json';

/** UTILS */
import sortProducts from '@/server/utils/sortProducts';
import filterProductsByName from '@/server/utils/filterProductsByName';

/** SCHEMA */
import { Product } from '@/schema/index';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { sortOrder, search } = body?.variables;

    const searchProducts = filterProductsByName(
      allProducts as Product[],
      search,
    );

    const products = sortProducts(searchProducts as Product[], sortOrder);

    return {
      products,
      numberOfProducts: products?.length || 0,
    };
  } catch (error) {
    console.error('getProducts error: ', error);
    return [];
  }
});
