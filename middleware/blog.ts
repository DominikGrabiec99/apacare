export default defineNuxtRouteMiddleware(async (to) => {
  const { id } = to.params;
  if (!id) {
    return navigateTo('/');
  }

  const article = await $fetch('/api/isArticleExist', {
    method: 'POST',
    body: {
      variables: {
        id,
      },
    },
  });

  if (!article) {
    return navigateTo('/');
  }
});
