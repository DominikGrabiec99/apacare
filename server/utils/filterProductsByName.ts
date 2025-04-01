/** SCHEMA */
import { IProduct } from '@/schema/index';

const filterProductsByName = (products: IProduct[], name: string) => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase()),
  );
};

export default filterProductsByName;
