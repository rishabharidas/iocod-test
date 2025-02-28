import useJobs from "../composables/useJobs";

export default defineNuxtRouteMiddleware((to, from) => {
  const { getJobById } = useJobs();

  // Only apply to job detail routes
  if (to.path.startsWith("/jobs/") && to.params.id) {
    // Get job ID from route params
    const jobId = Number(to.params.id);

    // Check if job exists
    const job = getJobById(jobId);

    // If job doesn't exist, redirect to jobs page
    if (!job) {
      return navigateTo("/jobs");
    }
  }
});
