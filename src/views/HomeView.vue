<script>
import MainLayout from '@/layouts/MainLayout.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import RandomMealSection from '@/components/home/RandomMealSection.vue'
export default {
  components: { MainLayout, HeroSection, RandomMealSection }
}
</script>

<template>
  <MainLayout>
    <HeroSection />
    <RandomMealSection />
  </MainLayout>
</template>

<style></style>
