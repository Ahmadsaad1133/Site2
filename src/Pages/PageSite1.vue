<template>
  <AppSidebar class="sidebar" />

  <div class="main-column">
    <AppHeader class="header" @themeChanged="handleThemeChange" />
    <AppHome class="content" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import AppSidebar from '@/components/Page1/AppSidebar.vue'
import AppHeader  from '@/components/Page1/AppHeader.vue'
import AppHome    from '@/components/Page1/AppHome.vue'

const router = useRouter()

function handleThemeChange(newTheme) {
  if (newTheme === 'light') {
    router.push('Pages/PageSite5')
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 264px !important;
  height: 100vh;
  background: #1f2937;
  overflow-y: auto;
  z-index: 100;
}

.main-column {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
  left: 263px;


  box-sizing: border-box;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: transparent;
}

.content {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  margin: 0;

  padding: 0;
  box-sizing: border-box;

 
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.content::-webkit-scrollbar {
  width: 6px;
}
.content::-webkit-scrollbar-thumb {
  background-color: #4b5563;
  border-radius: 3px;
}


.content ::v-deep(p) {
  margin: 0;
  padding: 0;
}
</style>
