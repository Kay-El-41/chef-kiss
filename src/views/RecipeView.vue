<script>
import MainLayout from '@/layouts/MainLayout.vue'
import * as actions from '@/services/actions'
import IngredientSection from '@/components/recipe/IngredientSection.vue'
import InstructionSection from '@/components/recipe/InstructionSection.vue'
import InstructionVideoSection from '@/components/recipe/InstructionVideoSection.vue'
import BackButton from '@/components/interface/BackButton.vue'
export default {
  data() {
    return {
      meal: null,
      id: this.$route.params.id,
      query: this.$route.query.q,
      fetchError: false
    }
  },
  components: {
    MainLayout,
    IngredientSection,
    InstructionSection,
    InstructionVideoSection,
    BackButton
  },
  async created() {
    try {
      if (this.id) {
        const { meals } = await actions.fetchMealRecipeById(this.id)
        this.meal = meals[0]
      } else if (this.query === 'random') {
        const { meals } = await actions.fetchRandomMeal()
        this.meal = meals[0]
      } else {
        this.fetchError = true
      }
    } catch (error) {
      this.fetchError = true
    }
  }
}
</script>

<template>
  <MainLayout>
    <!-- <div v-if="fetchError">SHIT WE ARE DONE</div> -->
    <!-- v-if="!fetchError" -->
    <section class="container py-6">
      <BackButton />
      <div>
        <div class="lg:flex lg:gap-10">
          <div class="shrink-0 lg:w-1/2">
            <img :src="meal?.strMealThumb" :alt="meal?.strMeal" class="rounded-lg" />
          </div>
          <div class="lg:flex lg:w-1/2 lg:flex-col lg:justify-between">
            <div>
              <h1 class="mt-5 text-center font-header text-3xl font-extrabold lg:text-left">
                {{ meal?.strMeal }}
              </h1>
              <p class="text-center text-lg lg:text-left">
                {{ meal?.strCategory }}, {{ meal?.strArea }} Style
              </p>
              <div class="mt-2 flex justify-center gap-3 lg:justify-start">
                <span
                  v-for="tag in meal?.strTags?.split(',')"
                  :key="tag"
                  class="rounded-full border border-red-300 px-3 text-sm text-red-500"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="mt-10 hidden lg:block">
              <InstructionVideoSection :meal="meal" />
            </div>
          </div>
        </div>

        <div class="mt-10">
          <IngredientSection :meal="meal" />
        </div>
        <div class="mt-10">
          <InstructionSection :meal="meal" />
        </div>
        <div class="mt-10 lg:hidden">
          <InstructionVideoSection :meal="meal" />
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<style scoped></style>
