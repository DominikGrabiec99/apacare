/** SCHEMA */
import type { IFilter } from '@/schema';

/** INTERFACES */
import type { IFiltersProducts } from '@/ts/interfaces/FiltersProducts';

export const useFilters = () => {
  const { data: filters } = useFetch<IFilter[]>('/api/getFilters', {
    method: 'POST',
  });

  const areFiltersInit = ref(false);

  const productsFilters = ref<IFiltersProducts[]>([]);
  const chosenFilters = computed(() => []);

  const createFilters = () => {
    productsFilters.value =
      filters.value?.map((filterGroup) => {
        const choices = filterGroup.choices.map((choice) => {
          return {
            ...choice,
            value: false,
          };
        });

        const isInitialOpen =
          ['Producent', 'Kategoria', 'Nowość'].includes(filterGroup.name) ||
          false;

        return {
          ...filterGroup,
          isInitialOpen,
          choices,
        };
      }) || [];
  };

  watch(
    () => filters.value,
    () => {
      console.log(filters.value?.length, areFiltersInit.value);
      if (!filters.value?.length || areFiltersInit.value) {
        return;
      }

      createFilters();
      areFiltersInit.value = true;
    },
    {
      immediate: true,
    },
  );

  return {
    productsFilters,
    chosenFilters,
    createFilters,
  };
};
