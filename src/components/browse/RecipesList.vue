<script>
import RecipeCard from '../interface/RecipeCard.vue'

export default {
  name: 'RecipesList',
  props: {
    recipes: Array
  },
  components: { RecipeCard }
}
</script>

<template>
  <div class="grid grid-cols-3 gap-3">
    <RecipeCard v-for="(recipe, idx) in recipes" :recipe="recipe" :key="idx" />
  </div>
</template>
