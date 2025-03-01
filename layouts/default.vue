<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative"
  >
    <header class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
      >
        <NuxtLink
          to="/"
          class="text-xl font-bold text-brand-600 dark:text-brand-400"
        >
          Nuxt Job Board
        </NuxtLink>
        <nav class="flex items-center space-x-4">
          <NuxtLink
            to="/jobs"
            class="text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400"
          >
            Jobs
          </NuxtLink>
          <ColorModeToggle />
        </nav>
      </div>
    </header>
    <main
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-full overflow-y-auto"
    >
      <slot />
    </main>
    <footer
      class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 w-full bottom-0"
    >
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 dark:text-gray-400"
      >
        Nuxt Job Board - Built with Nuxt 3 and Tailwind CSS
      </div>
    </footer>
  </div>
</template>
