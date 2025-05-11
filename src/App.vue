<template>
  <div id="app" class="app-layout">
    <!-- Language Toggle Button -->

    <main class="content-area">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import {  watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

watch(locale, (newLocale) => {
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
  document.body.style.fontFamily =
    newLocale === 'ar' ? "'Tajawal', sans-serif" : "'Inter', 'Sora', sans-serif"
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Sora:wght@400;600&family=Tajawal:wght@400;600&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #app {
  width: 100%;
  height: 100%;
  font-size: 16px;
  background-color: var(--primary-bg-color);
  color: var(--primary-text-color);
  overflow: hidden;
  font-family: 'Inter', 'Sora', sans-serif;
}

/* CSS Variables */
:root {
  --spacing-small: 1rem;
  --spacing-medium: 1.5rem;
  --spacing-large: 2rem;

  --font-size-small: 0.875rem;
  --font-size-medium: 1rem;
  --font-size-large: 1.25rem;

  --primary-bg-color: #111827;
  --primary-text-color: #ffffff;
}

.app-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.content-area {
  flex: 1;
  overflow: hidden;
  padding: var(--spacing-medium);
  padding: 0;
}
@media (prefers-color-scheme: dark) {
  .filter-text {
    color: white;
  }
}
@media (prefers-color-scheme: light) {
  .filter-text {
    color: grey;
  }
}

</style>
