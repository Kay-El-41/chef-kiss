<script>
import IngredientCard from '@/components/interface/IngredientCard.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
export default {
  props: {
    meal: {}
  },
  name: 'IngredientSection',
  components: { IngredientCard, IconArrowDown },
  data() {
    return {
      showIngredients: true
    }
  },
  methods: {
    toggleIngredientSection() {
      this.showIngredients = !this.showIngredients
    }
  }
}
</script>

<template>
  <div
    class="mb-5 flex cursor-pointer items-center gap-2 text-left font-body"
    @click="toggleIngredientSection"
  >
    <h2>Ingredients</h2>
    <IconArrowDown class="text-xl" />
  </div>
  <div
    class="grid grid-cols-3 items-center justify-items-center gap-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
    v-show="showIngredients"
  >
    <IngredientCard
      v-for="n in 21"
      :key="n"
      :ingredient="meal?.[`strIngredient${n}`]"
      :measure="meal?.[`strMeasure${n}`]"
    />
  </div>
</template>
