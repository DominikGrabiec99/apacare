<template>
  <div class="min-h-full">
    <div
      class="flex h-20 items-center justify-center bg-[url(/images/blog/blog_bg.webp)] bg-cover md:h-40"
    >
      <h1 class="text-shadow text-3xl font-bold text-primary-black md:text-6xl">
        Kącik Informacji
      </h1>
    </div>
    <div class="container mt-8 grid grid-cols-12 gap-4 px-4 md:mt-10 md:px-8">
      <NuxtLink
        v-for="article in articles"
        :to="`/blog/${article.id}`"
        :key="article.id"
        class="col-span-12 rounded-md shadow-xl hover:shadow-2xl md:col-span-4 xl:col-span-3"
      >
        <img class="rounded-t" :src="article.mainImg" :alt="article.title" />
        <div class="flex flex-col gap-2 p-2">
          <h3 class="text-center text-xl font-bold text-primary-black">
            {{ article.decoratedTitle }}
          </h3>
          <span class="text-justify text-sm text-primary-black">
            {{ article.description }}
          </span>
          <span class="text-end text-sm font-semibold text-primary-black">
            {{ article.dataCreate }}
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
/** SCHEMA */
import type { BlogArticle } from '@/schema/index';

const { data: articles } = useAsyncData<BlogArticle[]>(
  'all-blog-articles',
  () =>
    $fetch('/api/getAllBlogArticles', {
      method: 'POST',
    }),
);
</script>
