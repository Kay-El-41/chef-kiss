<script>
import MainLayout from '@/layouts/MainLayout.vue'
import SearchBar from '@/components/browse/SearchBar.vue'
import CategoryBar from '@/components/browse/CategoryBar.vue'
import BackButton from '@/components/interface/BackButton.vue'
import BrowseMethods from '@/components/browse/BrowseMethods.vue'
import * as actions from '@/services/actions'
import CountryBar from '@/components/browse/CountryBar.vue'
import AlphabetBar from '@/components/browse/AlphabetBar.vue'
import IngredientBar from '@/components/browse/IngredientBar.vue'

export default {
  components: {
    MainLayout,
    BackButton,
    SearchBar,
    BrowseMethods,
    CategoryBar,
    CountryBar,
    AlphabetBar,
    IngredientBar
  },
  data() {
    return {
      search: '',
      currentCategoryId: '',
      currentCountry: '',
      currentAlphabet: '',
      currentIngredient: '',
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

    this.currentCountry =
      this.$router.currentRoute.value.query.q || this.countries[0]?.strArea || null

    this.currentAlphabet = this.$router.currentRoute.value.query.q || 'A' || null

    this.currentIngredient =
      this.$router.currentRoute.value.query.q || this.ingredients[0]?.strIngredient || null
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
    handleChangeAlphabet(alphabet) {
      this.search = alphabet
      this.currentAlphabet = alphabet
      this.$router.replace({ query: { method: 'alphabet', q: alphabet } })
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
    handleChangeCountry(country) {
      this.search = country.strArea
      this.currentCountry = country.strArea

      this.$router.replace({
        query: {
          method: 'country',
          q: country.strArea
        }
      })
    },
    handleChangeIngredient(ingredient) {
      this.search = ingredient.strIngredient
      this.currentIngredient = ingredient.strIngredient

      this.$router.replace({
        query: {
          method: 'ingredient',
          q: ingredient.strIngredient
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
          <SearchBar
            @submitSearch="handleSearchInput"
            v-if="currentMethod === 'search' || currentMethod === 'alphabet'"
          />
          <AlphabetBar
            @submitSearch="handleChangeAlphabet"
            v-if="currentMethod === 'search' || currentMethod === 'alphabet'"
            :currentAlphabet="currentAlphabet"
          />
          <CategoryBar
            v-if="currentMethod === 'category'"
            :categories="categories"
            :currentCategoryId="currentCategoryId"
            @submitCategory="handleChangeCategory"
          />
          <CountryBar
            v-if="currentMethod === 'country'"
            :countries="countries"
            :currentCountry="currentCountry"
            @submitCountry="handleChangeCountry"
          />
          <IngredientBar
            v-if="currentMethod === 'ingredient'"
            :ingredients="ingredients"
            :currentIngredient="currentIngredient"
            @submitIngredient="handleChangeIngredient"
          />
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<style scoped></style>
