<script>
import BrowseIngredientCard from '../interface/BrowseIngredientCard.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  props: {
    ingredients: Array,
    currentIngredient: String
  },
  name: 'IngredientBar',
  data() {
    return {
      search: '',
      filteredIngredients: []
    }
  },
  emits: ['submitIngredient'],
  components: { IconSearch, BrowseIngredientCard },

  methods: {
    handleSearchKeyword() {
      if (this.search) {
        this.filteredIngredients = this.ingredients.filter((ingredient) =>
          ingredient.strIngredient.toLowerCase().includes(this.search)
        )
      } else {
        this.filteredIngredients = []
      }
    },
    handleSubmitSearch(ingredient) {
      this.$emit('submitIngredient', ingredient)
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleSearchKeyword">
    <div class="flex items-center gap-3 rounded-lg border px-3 py-2 focus-within:border-red-500">
      <input
        type="text"
        v-model="search"
        name="meal"
        id="meal"
        placeholder="Search"
        class="w-full grow appearance-none outline-none"
      />
      <button type="submit">
        <IconSearch class="text-red-500" />
      </button>
    </div>
  </form>
  <div
    class="mb-3 mt-3 grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
  >
    <BrowseIngredientCard
      v-for="ingredient in filteredIngredients"
      :key="ingredient?.idIngredient"
      :ingredient="ingredient"
      :currentIngredient="currentIngredient"
      @changeIngredient="handleSubmitSearch"
    />
  </div>
</template>
