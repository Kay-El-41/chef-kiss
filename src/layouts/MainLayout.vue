<script>
import FooterSection from '@/components/FooterSection.vue'
import Navbar from '@/components/NavBar.vue'

export default {
  name: 'MainLayout',
  props: {
    isHomePage: Boolean
  },
  components: { Navbar, FooterSection }
}
</script>

<template>
  <Navbar />
  <div class="h-full grow">
    <slot></slot>
  </div>
  <FooterSection />
</template>
