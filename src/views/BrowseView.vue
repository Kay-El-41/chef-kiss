<script>
import * as actions from '@/services/actions'
import MainLayout from '@/layouts/MainLayout.vue'
import SearchBar from '@/components/browse/SearchBar.vue'
import CountryBar from '@/components/browse/CountryBar.vue'
import RecipesList from '@/components/browse/RecipesList.vue'
import CategoryBar from '@/components/browse/CategoryBar.vue'
import AlphabetBar from '@/components/browse/AlphabetBar.vue'
import BackButton from '@/components/interface/BackButton.vue'
import BrowseMethods from '@/components/browse/BrowseMethods.vue'
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
    IngredientBar,
    RecipesList
  },
  data() {
    return {
      currentCategory: '',
      currentCountry: '',
      currentAlphabet: '',
      currentIngredient: '',
      recipes: [],
      categories: [],
      countries: [],
      ingredients: [],
      functionToFetch: ''
    }
  },
  async created() {
    const { meals: countries } = await actions.fetchCountryList()
    this.countries = countries

    const { meals: ingredients } = await actions.fetchIngredientList()
    this.ingredients = ingredients

    const { categories } = await actions.fetchCategoryList()
    this.categories = categories

    this.currentCategory =
      this.$router.currentRoute.value.query.q || this.categories[0]?.strCategory || null

    this.currentCountry =
      this.$router.currentRoute.value.query.q || this.countries[0]?.strArea || null

    this.currentAlphabet = this.$router.currentRoute.value.query.q || 'A' || null

    this.currentIngredient =
      this.$router.currentRoute.value.query.q || this.ingredients[0]?.strIngredient || null
  },
  computed: {
    currentMethod() {
      return this.$router.currentRoute.value.query.method
    },
    search() {
      return this.$router.currentRoute.value.query.q
    }
  },
  watch: {
    currentMethod: {
      handler() {
        this.recipes = []
        switch (this.currentMethod) {
          case 'search':
            this.functionToFetch = 'fetchMealRecipesBySearch'
            break
          case 'alphabet':
            this.functionToFetch = 'fetchMealRecipesByFirstLetter'
            break
          case 'category':
            this.functionToFetch = 'fetchMealRecipesByCategory'
            break
          case 'country':
            this.functionToFetch = 'fetchMealRecipesByCountry'
            break
          case 'ingredient':
            this.functionToFetch = 'fetchMealRecipesByMainIngredient'
            break
          default:
            this.functionToFetch = 'fetchMealRecipesBySearch'
            break
        }
      },
      immediate: true
    },
    search: {
      async handler() {
        const { meals } = await actions[this.functionToFetch](this.search)
        this.recipes = meals
      },
      immediate: true
    }
  },
  methods: {
    async handleSearchInput(word) {
      this.$router.replace({ query: { method: 'search', q: word } })
    },
    handleChangeAlphabet(alphabet) {
      this.currentAlphabet = alphabet
      this.$router.replace({ query: { method: 'alphabet', q: alphabet } })
    },
    handleChangeCategory(category) {
      this.currentCategory = category.strCategory

      this.$router.replace({
        query: {
          method: 'category',
          q: category.strCategory
        }
      })
    },
    handleChangeCountry(country) {
      this.currentCountry = country.strArea

      this.$router.replace({
        query: {
          method: 'country',
          q: country.strArea
        }
      })
    },
    handleChangeIngredient(ingredient) {
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
            :currentCategory="currentCategory"
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
      <div class="mt-3">
        <!-- Meal Lists -->
        <RecipesList :recipes="recipes" :keyword="search" />
      </div>
    </section>
  </MainLayout>
</template>

<style scoped></style>
