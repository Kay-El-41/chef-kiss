<script>
import * as paths from '@/paths'
export default {
  name: 'CategoryCard',
  props: {
    category: {
      idCategory: Number,
      strCategory: String,
      strCategoryDescription: String,
      strCategoryThumb: String
    }
  },
  data() {
    return {
      paths
    }
  },
  methods: {
    goToBrowsePage() {
      this.$router.push(`${paths.BROWSE_BY_CATEGORY}=${this.category?.strCategory}`)
    }
  }
}
</script>

<template>
  <div
    class="category-card group flex cursor-pointer flex-col items-center rounded-md border p-3 shadow-md lg:hover:bg-red-500"
    @click="goToBrowsePage"
  >
    <div class="shrink-0 pb-3">
      <img :src="category.strCategoryThumb" />
    </div>
    <div
      class="w-full cursor-pointer border-t border-red-500 pt-2 text-center font-body text-sm lg:group-hover:border-white lg:group-hover:text-white xl:border-b xl:pb-2"
    >
      <p>{{ category.strCategory }}</p>
    </div>
    <div class="hidden w-full pt-3 xl:block">
      <p class="line-clamp-3 truncate whitespace-normal text-center group-hover:text-white">
        {{ category.strCategoryDescription }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .category-card:nth-last-child(1) {
    display: none;
  }
}
@media screen and (min-width: 1024px) {
  .category-card:nth-last-child(2) {
    display: none;
  }
}

@media screen and (min-width: 1280px) {
  .category-card:nth-last-child(1) {
    display: flex;
  }

  .category-card:nth-last-child(2) {
    display: flex;
  }
}
</style>
