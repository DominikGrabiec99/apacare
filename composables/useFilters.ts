/** SCHEMA */
import type { IFilter } from '@/schema';

/** INTERFACES */
import type { IFiltersProducts } from '@/ts/interfaces/FiltersProducts';
import type { IChosenFilters } from '@/ts/interfaces/ChosenFilters';

export const useFilters = () => {
  const { data: filters } = useFetch<IFilter[]>('/api/getFilters', {
    method: 'POST',
  });

  const areFiltersInit = ref(false);

  const productsFilters = ref<IFiltersProducts[]>([]);

  const chosenFilters = computed(() =>
    productsFilters.value.reduce((acc: IChosenFilters[], filter) => {
      filter.choices.forEach((choice) => {
        if (!choice.value) return;

        if (!acc.find((el) => el.categoryId === filter.id)) {
          acc.push({
            categoryId: filter.id,
            optionsChosen: [],
          });
        }

        acc
          ?.find((el) => el.categoryId === filter.id)
          ?.optionsChosen.push({
            filterId: choice.id,
            name: choice.name,
          });
      });
      return acc;
    }, []),
  );

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

  watch(
    () => productsFilters.value,
    () => {
      console.log('productsFilters.value', productsFilters.value);
    },
    {
      deep: true,
    },
  );

  watch(
    () => chosenFilters.value,
    () => {
      console.log('chosenFilters', chosenFilters.value);
    },
  );

  return {
    productsFilters,
    chosenFilters,
    createFilters,
  };
};
