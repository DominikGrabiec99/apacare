/** SCHEMA */
import type { IProduct } from '@/schema';
import { ESortOrder } from '@/schema';

export const useProductsPage = (chosenFilters: Ref<any>) => {
  const searchValue = ref('');
  const sortOrder = ref(ESortOrder.RECOMMENDED);

  const dataVariables = computed(() => ({
    sortOrder: sortOrder.value,
    search: searchValue.value,
    selectedFilters: chosenFilters.value,
  }));

  const { data: dataProducts } = useFetch<{
    products: IProduct[];
    numberOfProducts: number;
  }>('/api/getProducts', {
    method: 'POST',
    body: {
      variables: dataVariables,
    },
    watch: [dataVariables],
  });

  const allProducts = computed(() => dataProducts.value?.products || []);

  const numberOfProducts = computed(
    () => dataProducts.value?.numberOfProducts || 0,
  );

  return {
    allProducts,
    numberOfProducts,
    sortOrder,
    searchValue,
  };
};
