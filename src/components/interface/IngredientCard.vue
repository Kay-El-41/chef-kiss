<script>
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
    class="flex w-full flex-col rounded-md border p-3 text-center shadow"
    v-if="ingredient && measure"
  >
    <img :src="ingredientThumb" :alt="ingredient" class="mix-blend-multiply" />
    <p class="mt-3 font-body text-sm">{{ ingredient }}</p>
    <p>{{ measure }}</p>
  </div>
</template>
