<script>
import * as actions from '@/services/actions'
import ReviewCard from '../interface/ReviewCard.vue'
import * as paths from '@/paths'
export default {
  name: 'CTASection',
  data() {
    return {
      meals: [],
      people: []
    }
  },
  async created() {
    const { results: peopleData } = await actions.fetchRandomPeopleForReview()
    const mealsData = await actions.fetchMealListForReview()

    this.people = peopleData
    this.meals = mealsData
  },
  components: { ReviewCard },
  methods: {
    handleClickPrimaryAction() {
      this.$router.push(paths.BROWSE_ALL_RECIPE)
    }
  }
}
</script>

<template>
  <section>
    <div class="container mb-28 mt-28 w-full xl:mt-40">
      <h1
        class="my-3 font-body text-4xl font-bold capitalize leading-normal sm:text-5xl 2xl:text-6xl"
      >
        Never Miss <br class="hidden md:inline" /><span class="font-logoFont">Dinner</span>
        Again With
        <span class="font-logoFont text-red-500">Chef's Kiss</span>
      </h1>

      <p>With Chef's Kiss recipes, you won't have to spend time thinking what to cook again.</p>

      <div
        class="mt-10 grid grid-cols-3 items-center justify-center justify-items-center gap-y-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8"
      >
        <ReviewCard v-for="n in 11" :person="people[n]" :meal="meals[n]" :key="n" />
      </div>

      <div class="mt-10 flex w-full justify-center">
        <button
          class="btn-action mx-auto w-1/2 cursor-pointer rounded-lg bg-red-500 pb-3 pt-4 font-body text-white lg:w-1/3 lg:py-5 xl:w-1/5"
          @click="handleClickPrimaryAction"
        >
          Start Cooking Now
        </button>
      </div>
    </div>
  </section>
</template>
