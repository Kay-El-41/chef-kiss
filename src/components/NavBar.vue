<script>
import * as paths from '@/paths'
import MainLogo from '@/components/icons/MainLogo.vue'
import IconMenu from '@/components/icons/IconMenu.vue'
import IconCross from '@/components/icons/IconCross.vue'

export default {
  name: 'NavBar',
  data() {
    return {
      paths,
      showMenu: false,
      activeSection: 'Home'
    }
  },
  methods: {
    openMobileMenu() {
      this.showMenu = !this.showMenu
    },
    onClickRoute(link) {
      ;(this.showMenu = false), this.$router.push(link)
    }
  },
  components: {
    MainLogo,
    IconMenu,
    IconCross
  }
}
</script>

<template>
  <nav class="sticky left-0 top-0 z-50 h-20 w-full bg-red-500 shadow-md">
    <div
      class="ease container relative z-50 flex items-center justify-between bg-red-500 pb-4 pt-3 shadow-md md:rounded-b-lg lg:shadow-none"
    >
      <router-link :to="paths.HOME" class="logo">
        <MainLogo class="-translate-y-0.5 translate-x-1 -rotate-12 text-white" />
        <span class="select-none font-logoFont text-3xl text-white">Chef&apos;s Kiss</span>
      </router-link>

      <ul
        class="hidden space-x-5 font-body-thin text-sm text-white *:cursor-pointer *:select-none lg:flex xl:space-x-8"
      >
        <li>
          <router-link :to="paths.RANDOM_RECIPE" class="web-link">Get A Recipe</router-link>
        </li>
        <li>
          <router-link :to="paths.BROWSE_ALL_RECIPE" class="web-link">Browse Recipes</router-link>
        </li>
        <li>
          <router-link :to="paths.BROWSE_BY_SEARCH" class="web-link">Search Recipes</router-link>
        </li>
        <li>
          <router-link :to="paths.ABOUT_US" class="web-link">About Us</router-link>
        </li>
      </ul>

      <div class="lg:hidden">
        <IconMenu
          v-if="!showMenu"
          class="cursor-pointer text-2xl text-white"
          @click="openMobileMenu"
        />
        <IconCross v-else class="cursor-pointer text-2xl text-white" @click="openMobileMenu" />
      </div>
    </div>

    <!-- #Region Home Page Mobile Menu-->
    <div
      class="absolute right-0 z-40 w-full bg-red-500 py-6 shadow-md transition-[top] duration-500 ease-in-out lg:hidden"
      :class="{
        'top-[calc(100%)]': showMenu,
        '-top-[350%]': !showMenu
      }"
    >
      <ul
        class="container space-y-3 font-body-thin text-sm text-white *:cursor-pointer *:select-none"
      >
        <li @click="onClickRoute(paths.RANDOM_RECIPE)">Get a recipe</li>
        <li @click="onClickRoute(paths.BROWSE_ALL_RECIPE)">Browse recipes</li>
        <li @click="onClickRoute(paths.BROWSE_BY_SEARCH)">Search recipes</li>
        <li @click="onClickRoute(paths.ABOUT_US)">About us</li>
      </ul>
    </div>
    <!-- #EndRegion Home Page Mobile Menu-->
  </nav>
</template>

<style scoped>
li {
  overflow: hidden;
  padding-block: 5px;
}
.web-link {
  position: relative;
}

.web-link::before {
  content: '';
  width: 100%;
  height: 3px;
  background-color: white;
  position: absolute;
  left: -100%;
  bottom: -4px;
  opacity: 0;
  transition: all 0.3s ease-out;
}

.web-link:hover::before {
  left: 0;
  opacity: 1;
}
</style>
