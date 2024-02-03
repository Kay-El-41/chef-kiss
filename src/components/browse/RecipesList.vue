<script>
import RecipeCard from '../interface/RecipeCard.vue'

export default {
  name: 'RecipesList',
  props: {
    recipes: Array,
    keyword: String
  },
  components: { RecipeCard }
}
</script>

<template>
  <p class="mb-3 text-left text-xl" v-show="recipes?.length > 0">
    Showing Results for: {{ keyword }}
  </p>

  <div class="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
    <RecipeCard v-for="(recipe, idx) in recipes" :recipe="recipe" :key="idx" />
  </div>
  <p class="mt-3 text-center" v-show="recipes?.length > 0">End of Results</p>
</template>
