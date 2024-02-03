<script>
import BrowseCategoryCard from '../interface/BrowseCategoryCard.vue'

export default {
  props: {
    categories: Array,
    currentCategory: String
  },
  name: 'CategoryBar',
  data() {
    return {
      search: ''
    }
  },
  emits: ['submitCategory'],

  methods: {
    handleSubmitSearch(category) {
      this.$emit('submitCategory', category)
    }
  },
  components: { BrowseCategoryCard }
}
</script>

<template>
  <div
    class="mb-3 flex gap-3 overflow-scroll scrollbar-none md:grid md:w-full md:grid-cols-5 lg:grid-cols-7"
  >
    <BrowseCategoryCard
      v-for="category in categories"
      :key="category?.idCategory"
      :category="category"
      :currentCategory="currentCategory"
      @changeCategory="handleSubmitSearch"
    />
  </div>
</template>
