<template>
  <div :class="[themeClass, { rtl: locale === 'ar' } ]" class="layout-root">
    <MainLayout
      :user="user"
      :categories="categories"
      @themeChanged="handleThemeChange"
      @localeChanged="handleLocaleChange"
    >
      <AppHome :cards="cardsData" />
    </MainLayout>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import MainLayout from '@/components/Common/MainLayout.vue'
import AppHome     from '@/components/Common/AppHome.vue'

const locale = ref('en')

const user = {
  name: 'Ahmad Saad',
  company: 'MyCompany',
  avatar: 'https://i.pravatar.cc/40?u=ahmad',
}
const categories = ['Creative', 'Digital', 'Abstract']
const cardsData = [
  { id: 1,  image: require('@/assets/Card-1.webp'),  avatar: 'https://i.pravatar.cc/30?u=1',  username: 'Nicholas Turner', likes: 24, views: 42 },
  { id: 2,  image: require('@/assets/Card-2.webp'),  avatar: 'https://i.pravatar.cc/30?u=2',  username: 'Patty Stone',    likes: 19, views: 31 },
  { id: 3,  image: require('@/assets/Card-3.webp'),  avatar: 'https://i.pravatar.cc/30?u=3',  username: 'Noel Wilson',    likes: 17, views: 28 },
  { id: 4,  image: require('@/assets/Card-4.webp'),  avatar: 'https://i.pravatar.cc/30?u=4',  username: 'Angela Art',     likes: 29, views: 55 },
  { id: 5,  image: require('@/assets/Card-5.webp'),  avatar: 'https://i.pravatar.cc/30?u=5',  username: 'John Doe',       likes: 35, views: 60 },
  { id: 6,  image: require('@/assets/Card-6.webp'),  avatar: 'https://i.pravatar.cc/30?u=6',  username: 'Alice Smith',    likes: 40, views: 72 },
  { id: 7,  image: require('@/assets/Card-7.webp'),  avatar: 'https://i.pravatar.cc/30?u=7',  username: 'James Brown',    likes: 28, views: 50 },
  { id: 8,  image: require('@/assets/Card-8.webp'),  avatar: 'https://i.pravatar.cc/30?u=8',  username: 'Maria Garcia',   likes: 21, views: 48 },
  { id: 9,  image: require('@/assets/Card-9.webp'),  avatar: 'https://i.pravatar.cc/30?u=9',  username: 'Marlos Garcia',  likes: 51, views: 45 },
  { id: 10, image: require('@/assets/Card-10.webp'), avatar: 'https://i.pravatar.cc/30?u=10', username: 'Carla Moon',     likes: 33, views: 47 },
  { id: 11, image: require('@/assets/Card-11.webp'), avatar: 'https://i.pravatar.cc/30?u=11', username: 'David Sky',      likes: 37, views: 53 }
]

const isDark = ref(true)
const themeClass = computed(() => isDark.value ? '' : 'light')

function handleThemeChange() {
  isDark.value = !isDark.value
}

watch(isDark, val => {
  document.documentElement.classList.toggle('dark', val)
  localStorage.setItem('theme', val ? 'dark' : 'light')
}, { immediate: true })

function handleLocaleChange(newLocale) {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') isDark.value = false

  const savedLocale = localStorage.getItem('locale')
  if (savedLocale === 'ar') locale.value = 'ar'
})
</script>

<style scoped>
:root {
  --main-bg:    #1A1D2D;
  --sidebar-bg: #1E2235;
  --fg:         #edf2f7;
  --cg: #DCDEF380;
}

.layout-root {
  display:          flex;
  flex-direction:   row;                    
  width:            100%;
  height:           100vh;
  background-color: var(--main-bg);
  color:            var(--fg);
  transition:       background-color 0.3s, color 0.3s, flex-direction 0.3s;
}

.layout-root.light {
  --main-bg:    #ffffff;
  --sidebar-bg: #f3f4f6;
  --fg:         #222222;
  background-color: var(--main-bg);
  color:            var(--fg);
}

.layout-root.rtl {
  flex-direction: row-reverse;               
}

.sidebar {
  width:        16.5rem;
  height:       100vh;
  background:   var(--sidebar-bg);
  overflow-y:   auto;
  z-index:      100;
}

.main-column {
  flex:             1;                  
  display:          flex;
  flex-direction:   column;
  background:       var(--main-bg);
  overflow:         auto;
}

.header {
  position:         sticky;
  top:              0;
  background-color: var(--main-bg);
  z-index:          50;
  width:            100%;
}

.content {
  flex:             1;
  overflow:         auto;
  background-color: var(--main-bg);
  scrollbar-width:  thin;
}
.content::-webkit-scrollbar {
  width: 0.375rem;
}
.content::-webkit-scrollbar-thumb {
  border-radius: 0.1875rem;
  background: var(--fg);
}
.layout-root.light .content::-webkit-scrollbar-thumb {
  background: #4b5563;
}
</style>
