<script>
import * as paths from '@/paths'
export default {
  name: 'MealCard',
  props: {
    mealDetail: {
      idMeal: Number,
      strMeal: String,
      strCategory: String,
      strArea: String,
      strMealThumb: String,
      strTags: String
    }
  },
  data() {
    return {
      paths
    }
  },
  methods: {
    goToRecipePage() {
      this.$router.push(`${paths.RECIPE}/${this.mealDetail?.idMeal}`)
    }
  }
}
</script>

<template>
  <div class="mx-auto flex w-2/3 flex-col overflow-hidden rounded-lg shadow-md lg:mx-0 lg:w-1/3">
    <div>
      <img :src="mealDetail?.strMealThumb" :alt="mealDetail?.strMeal" />
    </div>
    <div class="space-y-2 px-3 py-4">
      <p class="font-body text-lg">{{ mealDetail?.strMeal }}</p>
      <p class="text-base">{{ mealDetail?.strCategory }}, {{ mealDetail?.strArea }}</p>
      <div class="flex flex-wrap gap-2">
        <p
          v-for="tag in mealDetail?.strTags?.split(',')"
          :key="tag"
          class="rounded-full border border-red-300 px-3 text-sm text-red-500"
        >
          {{ tag }}
        </p>
      </div>
      <button
        v-show="mealDetail?.idMeal"
        @click="goToRecipePage"
        class="w-full cursor-pointer rounded-lg bg-red-500 py-2 text-white"
      >
        View Recipe
      </button>
    </div>
  </div>
</template>
