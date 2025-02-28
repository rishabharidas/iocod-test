// Define the Job interface
interface Job {
  id: number;
  title: string;
  company: string;
  category: string;
  salary: string;
  description: string;
  requirements: string[];
  location: string;
  posted: string;
}

export const useJobs = () => {
  const jobs = useState<Job[]>("jobs", () => []);
  const filteredJobs = useState<Job[]>("filteredJobs", () => []);
  const selectedCategory = useState<string>("selectedCategory", () => "All");
  const categories = useState<string[]>("categories", () => ["All"]);
  const loading = useState<boolean>("loading", () => true);

  const fetchJobs = async (): Promise<void> => {
    loading.value = true;
    try {
      const response = await fetch("/jobs.json");
      const data: Job[] = await response.json();
      jobs.value = data;

      // Extract unique categories
      const uniqueCategories = [
        "All",
        ...new Set(data.map((job) => job.category)),
      ];
      categories.value = uniqueCategories;

      filterJobs();
      loading.value = false;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      loading.value = false;
    }
  };

  const filterJobs = (): void => {
    if (selectedCategory.value === "All") {
      filteredJobs.value = jobs.value;
    } else {
      filteredJobs.value = jobs.value.filter(
        (job) => job.category === selectedCategory.value,
      );
    }
  };

  const setCategory = (category: string): void => {
    selectedCategory.value = category;
    filterJobs();
  };

  const getJobById = (id: number): Job | null => {
    return jobs.value.find((job) => job.id === id) || null;
  };

  return {
    jobs,
    filteredJobs,
    categories,
    selectedCategory,
    loading,
    fetchJobs,
    setCategory,
    getJobById,
  };
};

// This makes it available as a default export too
export default useJobs;
