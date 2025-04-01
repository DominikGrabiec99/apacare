/** ASSETS */
import filters from '@/server/assets/filters/releaseAt_2025-04-01.json';

export default defineEventHandler(async (event) => {
  try {
    return filters;
  } catch (error) {
    console.error('getFilters error: ', error);
    return [];
  }
});
