<template>
  <div class="p-7 h-[78vh]">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      Available Jobs
    </h1>

    <!-- Filters -->
    <JobFilter />

    <!-- Job listings -->
    <div v-if="loading" class="flex justify-center my-12">
      <div
        class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-600"
      ></div>
    </div>

    <div v-else-if="filteredJobs.length === 0" class="text-center py-12">
      <p class="text-lg text-gray-600 dark:text-gray-400">
        No jobs found for this category. Try another filter.
      </p>
    </div>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<script setup>
import useJobs from "~/composables/useJobs";

const { filteredJobs, loading, fetchJobs } = useJobs();

// Fetch jobs on component mount
onMounted(() => {
  fetchJobs();
});
</script>
