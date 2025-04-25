/** ASSETS */
import clinicalTrials from '@/server/assets/clinicalTrials/releaseAt_2025-04-25.json';

export default defineEventHandler(async (event) => {
  try {
    return clinicalTrials;
  } catch (error) {
    console.error('getFilters error: ', error);
    return [];
  }
});
