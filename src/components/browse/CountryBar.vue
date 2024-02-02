<script>
export default {
  props: {
    countries: Array,
    currentCountry: String
  },
  name: 'CountryBar',
  data() {
    return {
      search: ''
    }
  },
  emits: ['submitCountry'],

  methods: {
    handleSubmitSearch(country) {
      this.$emit('submitCountry', country)
    }
  }
}
</script>

<template>
  <div
    class="mb-3 flex w-full gap-3 overflow-scroll scrollbar-none md:grid md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-9"
  >
    <div
      v-for="country in countries"
      :key="country?.strArea"
      class="cursor-pointer rounded-lg border p-2 shadow-sm hover:border-red-500"
      :class="currentCountry === country.strArea && 'bg-red-500 text-white shadow-sm'"
      @click="() => handleSubmitSearch(country)"
    >
      <p class="w-full truncate">{{ country.strArea }}</p>
    </div>
  </div>
</template>
