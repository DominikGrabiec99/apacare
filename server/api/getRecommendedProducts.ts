/** ASSETS */
import allProducts from '@/server/assets/allProducts/releaseAt_2025-03-27.json';

/** UTILS */
import findHighestPriorityPhoto from '@/server/utils/findHighestPriorityPhoto';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const company = body?.variables?.company || '';

    if (!company) {
      throw new Error('You need to pass company');
    }

    const products = allProducts.filter(
      (product) => product.company === company && product.isHomePageRecommended,
    );

    const recommendedProducts = products.map((product) => ({
      id: product.id,
      name: product.name,
      photo: findHighestPriorityPhoto(product.photos).url,
      description: product.description,
    }));

    return recommendedProducts;
  } catch (error) {
    console.error('getRecommendedProducts error: ', error);
    return [];
  }
});
