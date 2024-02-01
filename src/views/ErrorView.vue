<script>
import BackButton from '@/components/interface/BackButton.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default { components: { MainLayout, BackButton } }
</script>

<template>
  <MainLayout>
    <section class="flex h-[calc(100vh-5rem)] items-center justify-center">
      <div>
        <div class="flex items-center gap-3">
          <BackButton />
          <p class="font-body">Oh Oh</p>
        </div>
        <h1 class="font-body text-2xl">There is nothing here</h1>
      </div>
    </section>
  </MainLayout>
</template>
