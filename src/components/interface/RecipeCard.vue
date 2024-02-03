<script>
import * as paths from '@/paths'
export default {
  name: 'RecipeCard',
  props: {
    recipe: {
      idMeal: String,
      strMeal: String,
      strMealThumb: String
    }
  },
  methods: {
    onClickMealCard() {
      this.$router.push(`${paths.RECIPE}/${this.recipe.idMeal}`)
    }
  }
}
</script>

<template>
  <div
    class="flex cursor-pointer flex-col items-center gap-2 overflow-hidden rounded-xl border text-center shadow-sm hover:border-red-500"
    @click="onClickMealCard"
  >
    <div class="shrink-0">
      <img :src="recipe?.strMealThumb" :alt="recipe?.strMeal" />
    </div>
    <p>{{ recipe?.strMeal }}</p>
  </div>
</template>
