/** SCHEMA */
import { IProduct } from '@/schema/index';
import { IChosenFilters } from '@/ts/interfaces/ChosenFilters';

const filterProductBySelectedFilters = (
  products: IProduct[],
  filters: IChosenFilters[],
) => {
  let filteredProducts: IProduct[] = products;

  filters.forEach((filter) => {
    // Producent
    if (filter.categoryId === 'e1468696-aff6-41d8-8921-490e0358ee15') {
      filteredProducts = filteredProducts.filter((product) =>
        filter.optionsChosen.find(
          (option) =>
            option.name.toLowerCase() === product.company.toLowerCase(),
        ),
      );
      return;
    }

    // Kategoria
    if (filter.categoryId === 'cb0da292-21ce-4c21-9f4a-88fc7e90989f') {
      filteredProducts = filteredProducts.filter((product) =>
        filter.optionsChosen.find(
          (option) =>
            option.name.toLowerCase() === product.category.toLowerCase(),
        ),
      );
      return;
    }

    // Nowość
    if (filter.categoryId === '4c97cda6-6fea-4f8c-822e-5730bcb0583d') {
      filteredProducts = filteredProducts.filter((product) =>
        product.labels.includes('Nowość'),
      );
      return;
    }

    // Pozostałe
    if (filter.categoryId === '9e8f045d-f535-411f-b183-84c820d6a6ba') {
      filteredProducts = filteredProducts.filter((product) =>
        filter.optionsChosen.every(
          (option) =>
            product.information.find(
              (productInfo) => option.name === productInfo.title,
            )?.value,
        ),
      );
    }
  });

  return filteredProducts;
};

export default filterProductBySelectedFilters;
