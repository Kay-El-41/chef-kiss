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
  async mounted() {
    const { meals } = await actions.fetchRandomMeal()
    this.singleMeal = meals[0]
  }
}
</script>

<template>
  <section class="mt-8 py-10">
    <div class="container">
      <h2
        class="text-body py-10 text-center font-body text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-left"
      >
        ^Why choose Chef's Kiss?^
      </h2>
      <div class="details grid grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col items-center p-8">
          <p class="font-header text-2xl font-extrabold text-red-500 drop-shadow md:text-3xl">
            300+
          </p>
          <p class="font-body text-lg">Meals</p>
        </div>
        <div class="flex flex-col items-center p-8">
          <p class="font-header text-2xl font-extrabold text-red-500 drop-shadow md:text-3xl">
            500+
          </p>
          <p class="font-body text-lg">Ingredients</p>
        </div>
        <div class="flex flex-col items-center p-8">
          <p class="font-header text-2xl font-extrabold text-red-500 drop-shadow md:text-3xl">
            25+
          </p>
          <p class="font-body text-lg">Countries</p>
        </div>
        <div class="flex flex-col items-center p-8">
          <p class="font-header text-2xl font-extrabold text-red-500 drop-shadow md:text-3xl">
            10+
          </p>
          <p class="font-body text-lg">Categories</p>
        </div>
      </div>
      <div class="lg:flex lg:justify-center lg:gap-8 xl:py-10 2xl:justify-start">
        <MealCard :mealDetail="singleMeal" />
        <div class="details">
          <h3
            class="text-body py-5 text-center font-body text-xl font-medium md:text-2xl lg:text-left lg:text-3xl"
          >
            For Every Meals
          </h3>
          <div class="flex flex-col items-center gap-5 lg:items-start">
            <div class="flex items-center gap-2">
              <IconInstructions />
              <span>Detailed Instructions</span>
            </div>
            <div class="flex items-center gap-2">
              <IconMeasurement />
              <span>Ingredients with Measurements</span>
            </div>
            <div class="flex items-center gap-2">
              <IconVideo />
              <span>Youtube Videos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
