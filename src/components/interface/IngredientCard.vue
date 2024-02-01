<script>
import * as paths from '@/paths'
export default {
  name: 'IngredientCard',
  props: {
    ingredient: String,
    measure: String
  },
  data() {
    return {
      ingredientThumb: null
    }
  },
  methods: {
    goToIngredient() {
      this.$router.push(paths.BROWSE_BY_INGREDIENTS + '=ingredient')
    }
  },
  watch: {
    ingredient: {
      handler(newValue) {
        this.ingredientThumb = `https://www.themealdb.com/images/ingredients/${newValue}-Small.png`
      }
    }
  }
}
</script>

<template>
  <div
    class="group flex h-full w-full cursor-pointer flex-col rounded-md border p-3 text-center shadow hover:bg-red-500"
    v-if="ingredient && measure"
    @click="goToIngredient"
  >
    <img :src="ingredientThumb" :alt="ingredient" />
    <p class="mt-3 font-body text-sm group-hover:text-white">{{ ingredient }}</p>
    <p class="group-hover:text-white">{{ measure }}</p>
  </div>
</template>
