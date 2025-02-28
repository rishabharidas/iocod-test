# Nuxt Job Board

A job listings application built with Nuxt.js 3 and Tailwind CSS.

## Features

- Job listings grid with filtering by category
- Job details page
- Dark mode support
- Responsive design
- Custom Tailwind configuration with gradient backgrounds and shadow effects

## Technical Implementation

- **Nuxt.js 3**: Using the latest version of Nuxt
- **Tailwind CSS**: For utility-first styling
- **Composables**: Custom `useJobs` composable for state management
- **Middleware**: Route middleware to validate job IDs
- **Lazy Loading**: Optimized component loading
- **Dark Mode**: Complete theme support with toggle

## How to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nuxt-job-board.git
cd nuxt-job-board
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Additional Configurations

### Tailwind CSS Customizations

- Added custom 'brand' color palette
- Created custom spacing values
- Added custom utility classes for buttons
- Implemented gradient backgrounds for job cards
- Created hover effects with shadow and transform

### Composables

Created a `useJobs` composable that handles:
- Fetching job data
- Filtering by category
- State management with `useState`

### Middleware

Added a `job-exists` middleware that:
- Validates job IDs before navigating to detail pages
- Redirects to the jobs list if an invalid ID is provided

## Design Decisions

1. **Component Structure**:
   - Separated job card, filter, and details into reusable components
   - Created a layout component for consistent page structure

2. **Responsive Design**:
   - Mobile-first approach using Tailwind's responsive utilities
   - Grid layout that adapts from 1 to 3 columns based on screen size

3. **Dark Mode Implementation**:
   - Used Tailwind's dark mode class strategy
   - Persists user preference in localStorage
   - Respects system preference on first visit

4. **State Management**:
   - Used Nuxt's `useState` composable for reactive state
   - Centralized job data management in a single composable

## Future Improvements

- Add search functionality
- Implement pagination for larger datasets
- Add sorting options (by date, salary, etc.)
- Create a job application form
- Add authentication for job posters
