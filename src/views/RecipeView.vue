<script>
import MainLayout from '@/layouts/MainLayout.vue'
import * as actions from '@/services/actions'
import IngredientSection from '@/components/recipe/IngredientSection.vue'
import InstructionSection from '@/components/recipe/InstructionSection.vue'
import InstructionVideoSection from '@/components/recipe/InstructionVideoSection.vue'
export default {
  data() {
    return {
      meal: null,
      id: this.$route.params.id
    }
  },
  components: { MainLayout, IngredientSection, InstructionSection, InstructionVideoSection },

  async created() {
    const { meals } = await actions.fetchMealRecipeById(this.id)
    this.meal = meals[0]
  }
}
</script>

<template>
  <MainLayout>
    <section class="container py-6">
      <div class="shrink-0">
        <img :src="meal?.strMealThumb" :alt="meal?.strMeal" class="rounded-lg" />
      </div>
      <div>
        <div>
          <h1 class="mt-5 text-center font-header text-3xl font-extrabold">
            {{ meal?.strMeal }}
          </h1>
          <p class="text-center text-lg">{{ meal?.strCategory }}, {{ meal?.strArea }} Style</p>
          <div class="mt-2 flex justify-center gap-3">
            <span
              v-for="tag in meal?.strTags?.split(',')"
              :key="tag"
              class="rounded-full border border-red-300 px-3 text-sm text-red-500"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="mt-10">
          <IngredientSection :meal="meal" />
        </div>
        <div class="mt-10">
          <InstructionSection :meal="meal" />
        </div>
        <div class="mt-10">
          <InstructionVideoSection :meal="meal" />
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<style scoped></style>
