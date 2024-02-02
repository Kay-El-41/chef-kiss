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
    class="flex cursor-pointer flex-col items-center justify-center rounded-md border px-1 py-2 shadow-sm"
    @click="onClickCategoryCard"
  >
    <img
      :src="category?.strCategoryThumb"
      :alt="category?.strCategory"
      class="w-16 shrink-0 rounded-md"
    />
    <p class="w-full truncate text-center">{{ category?.strCategory }}</p>
  </div>
</template>
