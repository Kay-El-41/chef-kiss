<script>
import MainLayout from '@/layouts/MainLayout.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import RandomMealSection from '@/components/home/RandomMealSection.vue'
import CategorySection from '@/components/home/CategorySection.vue'
import CTASection from '@/components/home/CTASection.vue'
export default {
  components: { MainLayout, HeroSection, RandomMealSection, CategorySection, CTASection }
}
</script>

<template>
  <MainLayout>
    <HeroSection />
    <RandomMealSection />
    <CategorySection />
    <CTASection />
  </MainLayout>
</template>

<style></style>
