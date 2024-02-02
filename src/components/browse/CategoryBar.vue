<script>
import BrowseCategoryCard from '../interface/BrowseCategoryCard.vue'

export default {
  props: {
    categories: Array,
    currentCategoryId: String
  },
  name: 'CategoryBar',
  data() {
    return {
      search: '',
      showMore: false
    }
  },
  emits: ['submitCategory'],

  methods: {
    handleClickShowMore() {
      this.showMore = !this.showMore
    },
    handleSubmitSearch(category) {
      this.$emit('submitCategory', category)
    }
  },
  components: { BrowseCategoryCard }
}
</script>

<template>
  <div class="mb-3 grid w-full grid-cols-4 gap-3">
    <BrowseCategoryCard
      v-for="category in categories?.slice(0, 4)"
      :key="category?.idCategory"
      :category="category"
      :currentCategoryId="currentCategoryId"
      @changeCategory="handleSubmitSearch"
    />
  </div>

  <div class="grid w-full grid-cols-4 gap-3" v-show="showMore">
    <BrowseCategoryCard
      v-for="category in categories?.slice(4)"
      :key="category?.idCategory"
      :category="category"
      :currentCategoryId="currentCategoryId"
      @changeCategory="handleSubmitSearch"
    />
  </div>
  <button
    class="btn-action my-3 w-full rounded-lg bg-red-500 py-2 text-white"
    @click="handleClickShowMore"
  >
    {{ showMore ? 'See Less' : 'See More' }}
  </button>
</template>
