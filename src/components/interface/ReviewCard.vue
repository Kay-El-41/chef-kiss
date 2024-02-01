<script>
export default {
  name: 'ReviewCard',
  props: {
    meal: {
      strMeal: String,
      strMealThumb: String
    },
    person: {
      name: {
        first: String,
        last: String
      },
      picture: {
        medium: String
      }
    }
  }
}
</script>

<template>
  <div
    v-if="person && meal"
    class="review-card relative size-28 shrink-0 rounded-full p-3 xl:size-32"
  >
    <img
      :src="person?.picture?.medium"
      alt="a person"
      class="absolute right-0 top-0 size-14 rounded-full shadow-inner drop-shadow-md"
    />
    <img :src="meal?.strMealThumb" alt="a meal" class="w-full rounded-full shadow-md" />
  </div>
</template>

<style scoped>
.review-card:nth-last-child(1) {
  display: none;
}

@media screen and (min-width: 768px) {
  .review-card:nth-last-child(2) {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .review-card:nth-last-child(1) {
    display: flex;
  }

  .review-card:nth-last-child(2) {
    display: flex;
  }
}

@media screen and (min-width: 1280px) {
  .review-card:nth-last-child(1) {
    display: none;
  }
  .review-card:nth-last-child(2) {
    display: none;
  }
}
</style>
