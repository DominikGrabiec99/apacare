import BLOK_ARTICLES from '@/server/assets/blog/releaseAt_2025-07-28.json';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { id } = body.variables;
    if (!id) {
      return null;
    }

    const foundedArticle =
      BLOK_ARTICLES.find(
        (article) => article.id.toLowerCase() === id.toLowerCase(),
      ) || null;

    return foundedArticle;
  } catch (error) {
    return null;
  }
});
