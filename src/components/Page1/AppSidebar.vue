<template>
  <aside class="app-sidebar">
    <div class="top-section">

      <div class="logo-section">
        <img :src="logoImage" alt="Logo Icon" class="logo-image" />
        <span class="logo-text">Chain</span>
      </div>

  
      <button class="create-btn" @click="onCreateClick">
        <img :src="StarIcon" alt="Star Icon" class="star-icon" />
        <span>Create</span>
      </button>

 
      <nav class="main-menu">
        <div class="menu-container">
          <ul class="menu-column">
            <li :class="{ active: activeMenu === 'Home' }" @click="setActive('Home')">
              <div class="menu-content">
                <img :src="homeIcon" alt="Home Icon" class="home-icon" />
                <span class="menu-text">Home</span>
              </div>
              <img :src="NotificationImage" alt="Notification Icon" class="notif-icon" />
            </li>
            <li v-for="(item, index) in menuItems" :key="index" :class="{ active: activeMenu === item.label }" @click="setActive(item.label)">
              <div class="menu-content">
                <img :src="item.icon" :alt="`${item.label} Icon`" class="menu-icon" />
                <span class="menu-text">{{ item.label }}</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>


    <div class="bottom-section">
      <div class="bottom-items">
 
        <div class="language-column">
          <p class="language-text">Language</p>
          <div class="language-toggle">
            <div class="toggle-container">
              <label class="switch">
                <input type="checkbox" v-model="isEnglish" />
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <ul class="bottom-menu">
          <li class="settings-item" @click="onSettingsClick">
            <img :src="SettingsImage" alt="Settings Icon" class="bottom-icon" />
            Settings
          </li>
          <li class="logout-item" @click="onLogoutClick">
            <img :src="LogoutImage" alt="Logout Icon" class="bottom-icon" />
            Logout
          </li>
        </ul>


        <div class="theme-toggle">
          <div class="theme-switch">

            <button @click="setDarkMode(true)" :class="{ active: isDark }">
              <img :src="DarkIcon" alt="Dark Mode" class="theme-icon" />
              <span>Dark</span>
            </button>


            <button @click="setDarkMode(false)" :class="{ active: !isDark }">
              <img :src="LightIcon" alt="Light Mode" class="theme-icon" />
              <span>Light</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>

import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'


import { defineEmits } from 'vue'
import homeIcon from '@/assets/Home.png'
import StarIcon from '@/assets/StarIcon.png'
import logoImage from '@/assets/Icon.png'
import ChatImage from '@/assets/Chat.png'
import DownloadsImage from '@/assets/Downloads.png'
import HistoryImage from '@/assets/History.png'
import CollectionImage from '@/assets/Collection.png'
import SettingsImage from '@/assets/Settings.png'
import LogoutImage from '@/assets/Logout.png'
import NotificationImage from '@/assets/Notification.png'
import DarkIcon from '@/assets/DarkIcon.png'
import LightIcon from '@/assets/LightIcon.png'


const router = useRouter()


const isDark = ref(true)
const isEnglish = ref(false)
const activeMenu = ref('Home')
const menuItems = [
  { icon: CollectionImage, label: 'Collection' },
  { icon: DownloadsImage, label: 'Downloads' },
  { icon: ChatImage, label: 'Chat' },
  { icon: HistoryImage, label: 'History' }
]
const emit = defineEmits(['themeChanged'])

const setDarkMode = (mode) => {
  isDark.value = mode
}

const setActive = (label) => {
  activeMenu.value = label
}

const onCreateClick = () => alert('create pressed')
const onSettingsClick = () => alert('settings pressed')
const onLogoutClick = () => alert('logout pressed')

// Watchers
watch(isDark, (newVal) => {
  document.body.classList.toggle('dark-theme', newVal)
  document.body.classList.toggle('light-theme', !newVal)
  emit('themeChanged', newVal ? 'dark' : 'light')

  if (!newVal) {
    router.push({ name: 'PageSite9' })
  }
})

watch(isEnglish, (newVal) => {

  if (newVal) {
    console.log('Language: English')
  } else {
    console.log('Language: French')
  }
  router.push({ name: 'PageSite5' });
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.app-sidebar {
  width: 264px;
  background-color: #1f2937;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px 40px;
  height: auto;
  overflow: auto;
  box-sizing: border-box;
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
}

.logo-image {
  width: 24.14px;
  height: 40px;
  object-fit: contain;
}

.logo-text {
  font-family: 'Sora', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: white;
}

.create-btn {
  width: 100%;
  height: 48px;
  background-color: #2563eb;
  color: white;
  border-radius: 12px;
  margin: 23px 0 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  gap: 8px;
}

.create-btn span {
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
}

.star-icon {
  width: 24px;
  height: 24px;
}

.main-menu {
  margin-top: 0px;
}

.menu-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-row,
.menu-column li {
  width: 100%;
  display: flex;
}

.menu-column li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 48px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  gap: 16px;
}

.menu-column li.active {
  background-color: #252A41;
  border-radius: 12px;
}
.menu-text {
  margin-left: 5px;
}


.menu-column li:first-child {
  margin-top: 5px;
}

.menu-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-text {
  color: inherit;
  font-size: 16px;
}

.menu-column li:not(.active) .menu-text {
  color: #9ca3af;
}

.menu-column li.active .menu-text {
  color: white;
}

.menu-icon,
.home-icon,
.notif-icon {
  width: 27px;
  height: 24px;
  object-fit: contain;
  margin-left: 10px;
}


.menu-container {
  display: flex;
  flex-direction: column;
}

.bottom-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 0;
}

.bottom-items {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.bottom-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.bottom-menu li {
  height: 40px;
  width: 100%;
  cursor: pointer;
  opacity: 0.85;
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: 'Inter', sans-serif;
  color: #abadc6;
  padding-left: 16px;
}
.language-column {
  display: flex;
  padding-left: 50px;
  flex-direction: column; 
  justify-content: space-between; 
  width: 100%; 
  height: 80px; 
}

.language-text {
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  color: white;
  margin-bottom: 8px;
}

.language-toggle {
  display: flex;
  justify-content: flex-start; 
}

.toggle-container {
  width: 120px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.switch {
  position: relative;
  cursor: pointer; 
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 50px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  border-radius: 50px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #4CAF50;
}

input:checked + .slider:before {
  transform: translateX(26px);
}




.settings-item {
  font-size: 16px;
}

.logout-item {
  font-size: 16px;
}

.bottom-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.theme-toggle {
  width: 216px;

}

.theme-switch {
  display: flex;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  margin-left: 10px;
  height: 52px;
}

.theme-switch button {
  flex: 1;
  font-size: 18px;
  padding: 6px 8px;
  background: transparent;
  color: #9ca3af;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-switch button.active {
  background-color: #2d3248;
  color: white;
  border-radius: 12px;
}

.theme-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 8px;
}
</style>
