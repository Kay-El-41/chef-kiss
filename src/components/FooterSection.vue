<script>
import * as paths from '@/paths'
export default {
  name: 'FooterSection',
  data() {
    return {
      paths
    }
  }
}
</script>

<template>
  <footer class="w-full bg-red-500">
    <div class="container py-20 xl:pb-10">
      <div>
        <h3 class="font-logoFont text-4xl text-white">Chef's Kiss</h3>
        <p class="font-header text-xl font-extrabold text-white xl:text-2xl">
          A collection of 300+ high quality meal recipes
        </p>
      </div>
      <div class="mt-10">
        <ul
          class="space-y-7 font-body-thin text-sm text-white *:cursor-pointer *:select-none xl:flex xl:justify-between xl:space-y-0 xl:*:text-lg"
        >
          <li>
            <router-link :to="paths.RANDOM_RECIPE">Get A Recipe</router-link>
          </li>
          <li>
            <router-link :to="paths.BROWSE_ALL_RECIPE">Browse Recipes</router-link>
          </li>
          <li>
            <router-link :to="paths.BROWSE_BY_SEARCH">Search Recipes</router-link>
          </li>
        </ul>
      </div>
      <div class="font-sm mt-10 font-bold text-white xl:mb-0 xl:mt-20 xl:text-center">
        All right reserved. 2024, Chef's Kiss
      </div>
    </div>
  </footer>
</template>
