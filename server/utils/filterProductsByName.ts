/** SCHEMA */
import { Product } from '@/schema/index';

const filterProductsByName = (products: Product[], name: string) => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase()),
  );
};

export default filterProductsByName;
