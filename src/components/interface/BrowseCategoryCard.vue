<script>
export default {
  name: 'BrowseCategoryCard',
  props: {
    category: {
      idCategory: String,
      strCategory: String,
      strCategoryThumb: String,
      strCategoryDescription: String
    },
    currentCategoryId: String
  },
  emits: ['changeCategory'],
  methods: {
    onClickCategoryCard() {
      this.$emit('changeCategory', this.category)
    }
  }
}
</script>

<template>
  <div
    :class="currentCategoryId === category?.idCategory && 'bg-red-500 text-white'"
    class="flex w-24 shrink-0 cursor-pointer flex-col items-center justify-center rounded-md border px-1 py-2 shadow-sm hover:border-red-500 md:w-full"
    @click="onClickCategoryCard"
  >
    <div class="shrink-0">
      <img :src="category?.strCategoryThumb" :alt="category?.strCategory" class="w-16 rounded-md" />
    </div>
    <p class="w-full truncate text-center">{{ category?.strCategory }}</p>
  </div>
</template>
