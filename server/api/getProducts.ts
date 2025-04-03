/** ASSETS */
import allProducts from '@/server/assets/allProducts/releaseAt_2025-03-27.json';

/** UTILS */
import sortProducts from '@/server/utils/sortProducts';
import filterProductsByName from '@/server/utils/filterProductsByName';
import filterProductBySelectedFilters from '@/server/utils/filterProductBySelectedFilters';

/** SCHEMA */
import { IProduct } from '@/schema/index';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { sortOrder, search, selectedFilters } = body?.variables;

    const filterProducts = filterProductBySelectedFilters(
      allProducts as IProduct[],
      selectedFilters,
    );

    const searchProducts = filterProductsByName(
      filterProducts as IProduct[],
      search,
    );

    const products = sortProducts(searchProducts as IProduct[], sortOrder);

    return {
      products,
      numberOfProducts: products?.length || 0,
    };
  } catch (error) {
    console.error('getProducts error: ', error);
    return [];
  }
});
