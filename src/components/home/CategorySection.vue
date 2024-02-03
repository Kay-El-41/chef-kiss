<script>
import * as actions from '@/services/actions'
import CategoryCard from '../interface/CategoryCard.vue'
import * as paths from '@/paths'

export default {
  name: 'CategorySection',
  data() {
    return {
      paths,
      categories: []
    }
  },
  methods: {
    goToViewAll() {
      this.$router.push(paths.BROWSE_BY_CATEGORY + '=1')
    }
  },
  async mounted() {
    const { categories } = await actions.fetchCategoryList()
    this.categories = categories.splice(0, 10)
  },
  components: { CategoryCard }
}
</script>

<template>
  <section>
    <div class="container mb-10 lg:mt-20">
      <div class="flex w-full items-end justify-between py-10 text-left font-body font-medium">
        <h3 class="font-header text-2xl font-extrabold xl:text-3xl">Variety of Choices</h3>
        <button class="hover:text-red-500" @click="goToViewAll">View All</button>
      </div>
      <div class="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        <CategoryCard
          v-for="category in categories"
          :key="category.idCategory"
          :category="category"
        />
      </div>
    </div>
  </section>
</template>
