<template>
  <button
    @click="toggleColorMode"
    class="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
    aria-label="Toggle color mode"
  >
    <span v-if="colorMode === 'dark'" class="block w-5 h-5">
      <!-- Sun icon for dark mode -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </span>
    <span v-else class="block w-5 h-5">
      <!-- Moon icon for light mode -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </span>
  </button>
</template>

<script setup>
const colorMode = useState("color-mode", () => "light");

function setColorMode(mode) {
  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("color-mode", mode);
}

function toggleColorMode() {
  colorMode.value = colorMode.value === "light" ? "dark" : "light";
  setColorMode(colorMode.value);
}

// Initialize color mode based on localStorage or user preference
onMounted(() => {
  const savedColorMode = localStorage.getItem("color-mode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedColorMode) {
    colorMode.value = savedColorMode;
    console.log("Saved color mode:", savedColorMode);
    setColorMode(colorMode.value);
  } else if (prefersDark) {
    console.log("User prefers dark mode");
    setColorMode("dark");
  }
});
</script>
