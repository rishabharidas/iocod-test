<template>
  <div class="mb-6">
    <h2 class="text-lg font-medium mb-3 text-gray-900 dark:text-gray-100">
      Filter by Category
    </h2>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="category in categories"
        :key="category"
        @click="setCategory(category)"
        :class="[
          'btn',
          selectedCategory === category ? 'btn-primary' : 'btn-outline',
        ]"
      >
        {{ category }}
      </button>
    </div>
  </div>
</template>

<script setup>
import useJobs from "../composables/useJobs";

const { categories, selectedCategory, setCategory } = useJobs();
</script>
