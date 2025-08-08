/** SCHEMA */
import type { IFilter } from '@/schema';

/** INTERFACES */
import type { IFiltersProducts } from '@/ts/interfaces/FiltersProducts';
import type { IChosenFilters } from '@/ts/interfaces/ChosenFilters';

export const useFilters = async () => {
  const { data: filters } = await useAsyncData<IFilter[]>('filters', () =>
    $fetch('/api/getFilters', {
      method: 'POST',
    }),
  );

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

  const removeChoseFromFilter = ({
    idFilter,
    idChoice,
  }: {
    idFilter: string;
    idChoice: string;
  }) => {
    productsFilters.value = productsFilters.value.map((filter) => {
      if (filter.id === idFilter) {
        filter.choices.map((choice) => {
          if (choice.id === idChoice) choice.value = false;
          return choice;
        });
      }

      return filter;
    });
  };

  const clearFilter = () => {
    productsFilters.value = [...productsFilters.value].map((filter) => {
      filter.choices.map((choice) => {
        choice.value = false;
        return choice;
      });
      return filter;
    });
  };

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

  return {
    productsFilters,
    chosenFilters,
    createFilters,
    removeChoseFromFilter,
    clearFilter,
  };
};
