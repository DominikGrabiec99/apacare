/** ASSETS */
import allProducts from '@/server/assets/allProducts/releaseAt_2025-03-27.json';

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

    return product;
  } catch (error) {
    console.error('getProduct error: ', error);
    return error;
  }
});
