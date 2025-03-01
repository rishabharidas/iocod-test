<template>
  <div v-if="job" class="max-w-3xl mx-auto p-7 h-screen overflow-y-auto">
    <div class="mb-6">
      <NuxtLink
        to="/jobs"
        class="inline-flex items-center text-brand-600 dark:text-brand-400 hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Jobs
      </NuxtLink>
    </div>

    <div
      class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 md:p-8 bg-job-gradient dark:bg-job-gradient-dark"
    >
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6"
      >
        <div>
          <h1
            class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2"
          >
            {{ job.title }}
          </h1>
          <div class="text-lg text-gray-700 dark:text-gray-300 mb-1">
            {{ job.company }}
          </div>
          <div class="text-md text-gray-500 dark:text-gray-400 mb-3">
            {{ job.location }}
          </div>
        </div>

        <div class="flex flex-col items-start md:items-end">
          <span
            class="px-3 py-1 text-sm font-medium rounded-full mb-2"
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
          <div class="text-lg font-medium text-gray-900 dark:text-gray-100">
            {{ job.salary }}
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Posted: {{ job.posted }}
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Job Description
        </h2>
        <p class="text-gray-700 dark:text-gray-300 mb-6">
          {{ job.description }}
        </p>

        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Requirements
        </h2>
        <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-6">
          <li
            v-for="(requirement, index) in job.requirements"
            :key="index"
            class="mb-1"
          >
            {{ requirement }}
          </li>
        </ul>
      </div>

      <div class="flex justify-center">
        <button class="btn btn-primary px-6 py-3">
          Apply for This Position
        </button>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-12">
    <p class="text-lg text-gray-600 dark:text-gray-400">Job not found.</p>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["job-exists"],
});

const route = useRoute();
const { getJobById } = useJobs();

// Get job ID from route params
const jobId = Number(route.params.id);

// Get job details using the composable
const job = ref(null);

onMounted(() => {
  job.value = getJobById(jobId);
});
</script>
