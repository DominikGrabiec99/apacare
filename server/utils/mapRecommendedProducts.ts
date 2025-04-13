/** SCHEMA */
import type { IProduct } from '@/schema/index';

/** UTILS */
import findHighestPriorityPhoto from '@/server/utils/findHighestPriorityPhoto';

const mapRecommendedProducts = (products: IProduct[]) =>
  products.map((product) => ({
    id: product.id,
    name: product.name,
    photo: findHighestPriorityPhoto(product.photos).url,
    description: product.description,
  }));

export default mapRecommendedProducts;
