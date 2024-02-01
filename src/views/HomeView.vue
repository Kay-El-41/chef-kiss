<script>
import MainLayout from '@/layouts/MainLayout.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import RandomMealSection from '@/components/home/RandomMealSection.vue'
import CategorySection from '@/components/home/CategorySection.vue'
export default {
  components: { MainLayout, HeroSection, RandomMealSection, CategorySection }
}
</script>

<template>
  <MainLayout>
    <HeroSection />
    <RandomMealSection />
    <CategorySection />
  </MainLayout>
</template>

<style></style>
