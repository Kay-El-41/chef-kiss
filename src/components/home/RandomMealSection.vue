<script>
import * as actions from '@/services/actions'
import IconVideo from '@/components/icons/IconVideo.vue'
import IconInstructions from '@/components/icons/IconInstructions.vue'
import IconMeasurement from '@/components/icons/IconMeasurement.vue'
import MealCard from '@/components/interface/MealCard.vue'
export default {
  name: 'RandomMealSection',
  data() {
    return {
      singleMeal: null
    }
  },
  components: { IconVideo, IconMeasurement, IconInstructions, MealCard },
  async created() {
    const { meals } = await actions.fetchRandomMeal()
    this.singleMeal = meals[0]
  }
}
</script>

<template>
  <section>
    <div class="container mb-10 xl:flex xl:gap-5 2xl:gap-0">
      <div
        id="measurements"
        class="mb-5 grid grid-cols-2 md:grid-cols-4 lg:mb-10 xl:w-1/3 xl:grid-cols-2 xl:items-center 2xl:justify-items-end"
      >
        <div class="statistics">
          <p class="">300+</p>
          <span class="font-body text-lg">Recipes</span>
        </div>
        <div class="statistics">
          <p class="">25+</p>
          <span class="font-body text-lg">Countries</span>
        </div>
        <div class="statistics">
          <p class="">500+</p>
          <span class="font-body text-lg">Ingredients</span>
        </div>
        <div class="statistics">
          <p class="">10+</p>
          <span class="font-body text-lg">Categories</span>
        </div>
      </div>

      <div class="lg:mb-10 lg:flex lg:items-start lg:justify-center lg:gap-10 xl:gap-5">
        <MealCard :mealDetail="singleMeal" />

        <div
          class="details mt-10 lg:mt-0 lg:flex lg:h-full lg:flex-col lg:justify-around xl:justify-center"
        >
          <h3 class="text-body text-center font-body text-xl font-medium md:text-2xl lg:text-3xl">
            For Every Meals
          </h3>
          <div class="mt-5 flex gap-3 lg:flex-col lg:gap-2">
            <div
              class="flex w-1/3 flex-col items-center justify-center gap-2 p-3 text-center lg:w-full lg:flex-row lg:justify-start lg:gap-3 lg:text-left"
            >
              <IconInstructions class="text-3xl text-red-500 lg:shrink-0" />
              <span class="xl:text font-body">Detailed Instructions</span>
            </div>
            <div
              class="flex w-1/3 flex-col items-center justify-center gap-2 p-3 text-center lg:w-full lg:flex-row lg:justify-start lg:gap-3 lg:text-left"
            >
              <IconMeasurement class="text-3xl text-red-500 lg:shrink-0" />
              <span class="xl:text font-body">Ingredients' Measurements</span>
            </div>
            <div
              class="flex w-1/3 flex-col items-center justify-center gap-2 p-3 text-center lg:w-full lg:flex-row lg:justify-start lg:gap-3 lg:text-left"
            >
              <IconVideo class="text-3xl text-red-500 lg:shrink-0" />
              <span class="xl:text font-body">Instruction Videos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.statistics {
  @apply flex flex-col items-center p-5 rounded-lg;
}

.statistics > p {
  @apply font-header text-2xl font-extrabold text-red-500 drop-shadow md:text-3xl;
}
</style>
