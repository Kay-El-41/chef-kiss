<script>
import Navbar from '@/components/NavBar.vue'

export default {
  name: 'MainLayout',
  props: {
    isHomePage: Boolean
  },
  components: { Navbar }
}
</script>

<template>
  <Navbar />
  <div>
    <slot></slot>
  </div>
</template>
