import { defineStore } from 'pinia'
import * as actions from '@/services/actions'
const useBrowseStore = defineStore('browse', {
  state: () => {
    return {
      search: '',
      currentCategoryId: '',
      recipes: [],
      categories: [],
      countries: [],
      ingredients: []
    }
  },
  getters: {
    currentMethod() {
      return this.$router.currentRoute.value.query.method
    }
  },
  actions: {
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
})

export default useBrowseStore
