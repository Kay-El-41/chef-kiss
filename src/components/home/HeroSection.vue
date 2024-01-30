<script>
import heroImage1 from '@/assets/imgs/hero-recipe-1.jpg'
import heroImage2 from '@/assets/imgs/hero-recipe-2.jpg'
import heroImage3 from '@/assets/imgs/hero-recipe-3.jpg'
import heroImage4 from '@/assets/imgs/hero-recipe-4.jpg'
import heroImage5 from '@/assets/imgs/hero-recipe-5.jpg'
import heroImage6 from '@/assets/imgs/hero-recipe-6.jpg'
import heroImage7 from '@/assets/imgs/hero-recipe-7.jpg'
import * as paths from '@/paths'
export default {
  name: 'HeroSection',
  components: {
    SwiperContainer: 'swiper-container',
    SwiperSlide: 'swiper-slide'
  },
  data() {
    return {
      heroRecipesImgs: [
        heroImage1,
        heroImage2,
        heroImage3,
        heroImage4,
        heroImage5,
        heroImage6,
        heroImage7
      ]
    }
  },
  methods: {
    handleClickPrimaryAction() {
      this.$router.push(paths.BROWSE_ALL_RECIPE)
    }
  }
}
</script>

<template>
  <section class="h-full w-full xl:h-[calc(100dvh-80px)]">
    <div
      class="container h-full xl:relative xl:flex xl:flex-row xl:items-center xl:gap-5 2xl:gap-0"
    >
      <div class="mobile-swiper relative w-full xl:w-1/2 2xl:mr-[7rem]">
        <SwiperContainer
          :style="{
            '--swiper-theme-color': '#ef4444'
          }"
          :autoplay="{
            delay: 2000
          }"
          :pagination="{
            clickable: true,
            type: 'bullets'
          }"
          centered-slide="true"
          :breakpoints="{
            1024: {
              slidesPerView: 1.4,
              spaceBetween: 0,
              centeredSlides: true,
              loop: true,
              grabCursor: true
            }
          }"
        >
          <SwiperSlide v-for="(recipe, idx) in heroRecipesImgs" :key="idx">
            <div class="w-full p-8 sm:px-3">
              <img
                :src="recipe"
                alt="food"
                class="h-full w-full rounded-xl object-cover shadow-md"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        </SwiperContainer>
      </div>

      <div class="web relative h-1/2 text-center xl:h-fit xl:text-left">
        <h1
          class="my-3 font-body text-4xl font-bold capitalize leading-normal sm:text-5xl 2xl:text-6xl"
        >
          Elevate your <br class="hidden md:inline" /><span class="font-logoFont">cooking</span>
          to
          <span class="font-logoFont text-red-500">next level</span>
        </h1>
        <p class="text-lg tracking-wider md:text-xl md:leading-loose">
          Browse from thousands of recipe
        </p>
        <p class="text-lg tracking-wider md:text-xl md:leading-loose">
          Search by types, ingredients, or country
        </p>
        <p class="text-lg tracking-wider md:text-xl md:leading-loose">
          Cooking has never been easier
        </p>
        <button
          class="mt-5 rounded-xl bg-red-500 px-8 py-3 text-lg text-white shadow md:text-2xl xl:text-xl xl:hover:shadow-xl xl:hover:brightness-110 xl:active:brightness-90"
          @click="handleClickPrimaryAction"
        >
          Browse Now
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.web-food-img:hover {
  transform: rotateX(180deg);
  transform-origin: center;
}

.web-food-img {
  @apply w-fit transition-transform duration-500 *:size-44 *:object-cover *:rotate-45;
}
</style>
