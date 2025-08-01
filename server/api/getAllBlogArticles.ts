import BLOK_ARTICLES from '@/server/assets/blog/releaseAt_2025-07-28.json';

export default defineEventHandler(async (event) => {
  try {
    return BLOK_ARTICLES;
  } catch (error) {
    return null;
  }
});
