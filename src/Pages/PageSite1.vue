<template>
  <MainLayout
    :user="user"
    :categories="categories"
    @themeChanged="handleThemeChange"
  >
    <AppHome :cards="cardsData" />
  </MainLayout>
</template>

<script setup>
import { useRouter } from 'vue-router'

import MainLayout from '@/components/Common/MainLayout.vue'
import AppHome     from '@/components/Common/AppHome.vue'
const user = {
  name: 'Ahmad Saad',
  company: 'MyCompany'
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

const router = useRouter()
function handleThemeChange(newTheme) {
  if (newTheme === 'light') {
    router.push('/pages/PageSite5')
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 16.5rem;
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
  left: 16.5rem; 
  display: flex;
  flex-direction: column;
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
}

.content {
  flex: 1;
  overflow: auto; 
  scrollbar-width: thin; 
}

.content::-webkit-scrollbar {
  width: 0.375rem; 
}

.content::-webkit-scrollbar-thumb {
  border-radius: 0.1875rem; 
  background: #4b5563;
}
</style>
