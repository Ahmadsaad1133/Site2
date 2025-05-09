<template>
  <div id="app" class="app-layout">
    <main class="content-area">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Import fonts (You can either import from Google Fonts or define them locally) */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Sora:wght@400;600&family=Tajawal:wght@400;600&display=swap');

/* Global box model and reset styles */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px; /* Sets base font size for rem units (1rem = 16px) */
}

body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Inter', 'Tajawal', 'Sora', sans-serif; /* Global font stack */
  background-color: #111827;
  color: white;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.content-area {
  flex: 1;
  color: white;
  overflow: hidden;
}
</style>

<style scoped>
/* Scoped styles for the main content area */
.content-area {
  flex: 1;
  color: white;
  overflow: hidden;
}

/* Use variables for consistent spacing, font sizes, and colors */
:root {
  --spacing-small: 1rem;  /* 16px */
  --spacing-medium: 1.5rem;  /* 24px */
  --spacing-large: 2rem;  /* 32px */
  
  --font-size-small: 0.875rem;  /* 14px */
  --font-size-medium: 1rem;  /* 16px */
  --font-size-large: 1.25rem;  /* 20px */

  --primary-bg-color: #111827;
  --primary-text-color: white;
}

</style>
