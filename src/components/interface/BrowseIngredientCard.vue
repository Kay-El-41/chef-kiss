<script>
export default {
  name: 'BrowseIngredientCard',
  props: {
    ingredient: {
      idIngredient: String,
      strIngredient: String
    },
    currentIngredient: String
  },
  data() {
    return {
      ingredientThumb: String
    }
  },
  watch: {
    ingredient: {
      handler(newVal) {
        this.ingredientThumb = `https://www.themealdb.com/images/ingredients/${newVal.ingredient.strIngredient}-Small.png`
      }
    }
  },
  emits: ['changeIngredient'],
  methods: {
    onClickIngredientCard() {
      this.$emit('changeIngredient', this.ingredient)
    }
  }
}
</script>

<template>
  <div
    :class="currentIngredient === ingredient?.strIngredient && 'bg-red-500 text-white'"
    class="w-full cursor-pointer rounded-md border px-1 py-2 text-center shadow-sm hover:border-red-500"
    @click="onClickIngredientCard"
  >
    <p class="w-full truncate text-center">{{ ingredient?.strIngredient }}</p>
  </div>
</template>
