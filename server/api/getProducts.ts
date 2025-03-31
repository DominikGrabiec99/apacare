/** ASSETS */
import allProducts from '@/server/assets/allProducts/releaseAt_2025-03-27.json';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    return allProducts;
  } catch (error) {
    console.error('getProducts error: ', error);
    return [];
  }
});
