/** ASSETS */
import allProducts from '@/server/assets/allProducts/releaseAt_2025-03-27.json';
import filters from '@/server/assets/filters/releaseAt_2025-04-01.json';

/** UTILS */
import sortProducts from '@/server/utils/sortProducts';
import filterProductsByName from '@/server/utils/filterProductsByName';

/** SCHEMA */
import { IProduct } from '@/schema/index';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { sortOrder, search, selectedFilters } = body?.variables;

    const searchProducts = filterProductsByName(
      allProducts as IProduct[],
      search,
    );

    const products = sortProducts(searchProducts as IProduct[], sortOrder);

    return {
      products,
      numberOfProducts: products?.length || 0,
      filters,
    };
  } catch (error) {
    console.error('getProducts error: ', error);
    return [];
  }
});
