<template>
  <div
    class="container mt-6 flex flex-col gap-4 px-4 text-primary-black md:mt-8 md:gap-10 md:px-8"
  >
    <h1 class="text-2xl font-bold">{{ articleTitle }}</h1>

    <div v-if="articleContent?.length" class="flex flex-col gap-4 md:gap-10">
      <div
        v-for="section in articleContent"
        :key="section.id"
        class="flex flex-col gap-6 md:gap-8"
      >
        <h2 class="text-xl font-bold">{{ section.title }}</h2>
        <div
          v-if="section.paragraphs?.length"
          class="flex flex-col gap-2 md:gap-4"
        >
          <div
            v-for="paragraph in section.paragraphs"
            :key="paragraph.id"
            class="flex flex-col gap-2"
          >
            <h3 class="text-lg font-bold">{{ paragraph.title }}</h3>
            <img
              v-if="paragraph.topImg"
              class="w-fit"
              :src="paragraph.topImg.src"
              :alt="paragraph.topImg.alt"
              :style="isMobile ? {} : { height: paragraph.topImg.height }"
            />
            <div
              class="flex flex-col items-center gap-4 md:flex-row md:items-start"
            >
              <img
                v-if="paragraph.leftImg"
                :src="paragraph.leftImg.src"
                :alt="paragraph.leftImg.alt"
                :style="isMobile ? {} : { height: paragraph.leftImg.height }"
                class="w-fit"
              />
              <img
                v-if="paragraph.rightImg"
                class="block w-fit md:hidden"
                :src="paragraph.rightImg.src"
                :alt="paragraph.rightImg.alt"
                :style="isMobile ? {} : { height: paragraph.rightImg.height }"
              />
              <p v-if="paragraph.text" class="text-justify">
                {{ paragraph.text }}
              </p>

              <ul
                v-if="paragraph.list?.length"
                class="ml-10 flex list-disc flex-col gap-2"
              >
                <li v-for="(el, idx) in paragraph.list" :key="idx">
                  {{ el }}
                </li>
              </ul>
              <img
                v-if="paragraph.rightImg"
                class="hidden w-fit md:block"
                :src="paragraph.rightImg.src"
                :alt="paragraph.rightImg.alt"
                :style="isMobile ? {} : { height: paragraph.rightImg.height }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/** SCHEMA */
import type { BlogArticle } from '@/schema/index';

definePageMeta({
  middleware: 'blog',
});

const route = useRoute();

const { isMobile } = useViewPortWidth();

const { data: article } = useAsyncData<BlogArticle>(
  'blog-article',
  () =>
    $fetch('/api/getBlogArticle', {
      method: 'POST',
      body: {
        variables: {
          id: route.params?.id || '',
        },
      },
    }),
  {
    watch: [() => route.params.id],
  },
);

const articleTitle = computed(() => article.value?.title || '');
const articleContent = computed(() => article.value?.content || []);
</script>
