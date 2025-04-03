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

    // Wegańska, Parabeny, Mikroplastik, Dwutlenk tytanu, Gluten, Laktoza
    if (
      [
        'cadb2dd4-6bae-4596-9df2-0adb31299345',
        '9e8f045d-f535-411f-b183-84c820d6a6ba',
        'f53cf023-be08-4029-b304-f9aff7113f1c',
        '8ef2621c-1abd-4a16-9b4b-a2f8f9d2e1c9',
        'f0b94586-1066-444d-bd69-2a7a0f432856',
        'f49bc887-bb7f-4c81-a8ab-7d7fa954ed6f',
      ].includes(filter.categoryId)
    ) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.information.find((productInfo) =>
            filter.optionsChosen.find(
              (option) => option.name === productInfo.title,
            ),
          )?.value,
      );
      return;
    }
  });

  return filteredProducts;
};

export default filterProductBySelectedFilters;
