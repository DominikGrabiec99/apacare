/** SCHEMA */
import { Product, ESortOrder } from '@/schema/index';

const sortProducts = (products: Product[], sortOrder: ESortOrder) => {
  return products.sort((a, b) => {
    if (sortOrder === ESortOrder.RECOMMENDED) {
      return Number(a.priority) - Number(b.priority);
    } else if (sortOrder === ESortOrder.ALPHABETICAL) {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === ESortOrder.BACKWARDS) {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });
};

export default sortProducts;
