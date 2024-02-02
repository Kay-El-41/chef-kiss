<script>
import MainLayout from '@/layouts/MainLayout.vue'
import SearchBar from '@/components/browse/SearchBar.vue'
import CategoryBar from '@/components/browse/CategoryBar.vue'
import BackButton from '@/components/interface/BackButton.vue'
import BrowseMethods from '@/components/browse/BrowseMethods.vue'
import * as actions from '@/services/actions'

export default {
  components: { MainLayout, BackButton, SearchBar, BrowseMethods, CategoryBar },
  data() {
    return {
      search: '',
      currentCategoryId: '',
      recipes: [],
      categories: [],
      countries: [],
      ingredients: []
    }
  },
  async created() {
    const { meals: countries } = await actions.fetchCountryList()
    this.countries = countries

    const { meals: ingredients } = await actions.fetchIngredientList()
    this.ingredients = ingredients

    const { categories } = await actions.fetchCategoryList()
    this.categories = categories

    this.currentCategoryId =
      this.$router.currentRoute.value.query.q || this.categories[0]?.idCategory || null
  },
  computed: {
    currentMethod() {
      return this.$router.currentRoute.value.query.method
    }
    // searchIngredientResult() {}
  },
  methods: {
    async handleSearchInput(word) {
      this.$router.replace({ query: { method: 'search', meal: word } })
      this.search = word
      const { meals } = await actions.fetchMealRecipeBySearch(word)
      this.recipes = meals
    },
    handleChangeCategory(category) {
      this.search = category.idCategory
      this.currentCategoryId = category.idCategory

      this.$router.replace({
        query: {
          method: 'category',
          q: category.idCategory
        }
      })
    },
    handleChangeBrowseMethods(nextMethod) {
      this.$router.replace({ query: { method: nextMethod } })
    }
  }
}
</script>

<template>
  <MainLayout>
    <section class="container min-h-[calc(100dvh-5rem)] py-6">
      <div class="pb-6">
        <BackButton />
      </div>
      <div class="flex flex-col gap-5">
        <BrowseMethods
          :currentMethod="currentMethod"
          @changeBrowseMethod="handleChangeBrowseMethods"
        />
        <div>
          <SearchBar @submitSearch="handleSearchInput" v-if="currentMethod === 'search'" />
          <CategoryBar
            v-if="currentMethod === 'category'"
            :categories="categories"
            :currentCategoryId="currentCategoryId"
            @submitCategory="handleChangeCategory"
          />
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<style scoped></style>
