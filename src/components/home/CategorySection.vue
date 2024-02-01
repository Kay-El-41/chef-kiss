<script>
import * as actions from '@/services/actions'
import CategoryCard from '../interface/CategoryCard.vue'
import * as paths from '@/paths'

export default {
  name: 'CategorySection',
  data() {
    return {
      paths,
      categoryList: []
    }
  },
  async mounted() {
    const { categories } = await actions.fetchCategoryList()
    this.categoryList = categories
  },
  components: { CategoryCard }
}
</script>

<template>
  <section>
    <div class="container mb-10 mt-20 lg:mt-28 xl:mt-28">
      <div
        class="hidden py-10 text-left font-body font-medium xl:flex xl:items-end xl:justify-between"
      >
        <h3 class="text-3xl">Variety of Choices</h3>
        <button class="hover:text-red-500">View All</button>
      </div>
      <div class="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        <CategoryCard
          v-for="category in categoryList"
          :key="category.idCategory"
          :category="category"
        />
      </div>
    </div>
  </section>
</template>
