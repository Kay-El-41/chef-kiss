<script>
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  name: 'SearchBar',
  emits: ['submitSearch'],
  components: { IconSearch },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    handleSubmitSearch() {
      this.$emit('submitSearch', this.search)
      this.search = ''
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmitSearch">
    <div class="flex items-center gap-3 rounded-lg border px-3 py-2 focus-within:border-red-500">
      <input
        type="text"
        v-model="search"
        name="meal"
        id="meal"
        placeholder="Search"
        class="w-full grow appearance-none outline-none"
      />
      <button type="submit">
        <IconSearch class="text-red-500" />
      </button>
    </div>
  </form>
</template>
