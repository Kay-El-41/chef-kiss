<script>
import heroImage1 from '@/assets/imgs/hero-recipe-1.jpg'
import heroImage2 from '@/assets/imgs/hero-recipe-2.jpg'
import heroImage3 from '@/assets/imgs/hero-recipe-3.jpg'
import heroImage4 from '@/assets/imgs/hero-recipe-4.jpg'
import heroImage5 from '@/assets/imgs/hero-recipe-5.jpg'
import heroImage6 from '@/assets/imgs/hero-recipe-6.jpg'
import heroImage7 from '@/assets/imgs/hero-recipe-7.jpg'
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
  }
}
</script>

<template>
  <section class="h-full w-full">
    <div class="h-full">
      <div class="hero-swiper relative w-full">
        <SwiperContainer
          :style="{
            '--swiper-theme-color': '#ef4444'
          }"
          :pagination="{
            clickable: true,
            type: 'bullets'
          }"
          centered-slide="true"
        >
          <SwiperSlide v-for="(recipe, idx) in heroRecipesImgs" :key="idx">
            <div class="w-full p-8">
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
      <div
        class="container h-1/2 text-center font-body text-4xl font-bold capitalize leading-normal"
      >
        <h1>Take your cooking to next level</h1>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
