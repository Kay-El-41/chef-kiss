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
    currentCategory: String
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
    :class="currentCategory === category?.strCategory && 'bg-red-500 text-white'"
    class="flex w-24 shrink-0 cursor-pointer flex-col items-center justify-center rounded-md border px-1 py-2 shadow-sm hover:border-red-500 md:w-full"
    @click="onClickCategoryCard"
  >
    <div class="shrink-0">
      <img :src="category?.strCategoryThumb" :alt="category?.strCategory" class="w-16 rounded-md" />
    </div>
    <p class="w-full truncate text-center font-body text-sm">{{ category?.strCategory }}</p>
  </div>
</template>
