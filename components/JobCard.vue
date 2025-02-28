<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow card-hover dark:border dark:border-gray-700"
    :class="{ 'bg-job-gradient dark:bg-job-gradient-dark': true }"
  >
    <div class="p-6">
      <div class="flex justify-between items-start">
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
          {{ job.title }}
        </h3>
        <span
          class="px-2 py-1 text-xs font-medium rounded-full"
          :class="{
            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200':
              job.category === 'Frontend',
            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200':
              job.category === 'Backend',
            'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200':
              job.category === 'Full Stack',
            'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200':
              job.category === 'UI/UX',
          }"
        >
          {{ job.category }}
        </span>
      </div>

      <div class="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {{ job.company }}
      </div>

      <div class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-4">
        {{ job.salary }}
      </div>

      <NuxtLink :to="`/jobs/${job.id}`" class="inline-block btn btn-primary">
        View Details
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  job: {
    type: Object,
    required: true,
  },
});
</script>
