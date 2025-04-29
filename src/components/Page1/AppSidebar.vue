<template>
  <aside class="app-sidebar">
    <div class="top-section">
      <!-- Logo Section -->
      <div class="logo-section">
        <img :src="logoImage" alt="Logo Icon" class="logo-image" />
        <span class="logo-text">Chain</span>
      </div>

      <!-- Create Button -->
      <button class="create-btn" @click="navigateToImageGenerator">
        <img src="@/assets/Vector.png" alt="Create Icon" class="create-icon" />
        <span>Create</span>
      </button>

      <!-- Main Menu -->
      <nav class="main-menu">
        <div class="menu-column">
          <div class="menu-row">
            <li class="active">
              <div class="menu-content">
                <img :src="homeIcon" alt="Home Icon" class="home-icon" />
                <span>Home</span>
              </div>
              <img :src="NotificationImage" alt="Notification Icon" class="notif-icon" />
            </li>
          </div>
          <div class="menu-row" v-for="(item, index) in menuItems" :key="index">
            <li>
              <div class="menu-content">
                <img :src="item.icon" :alt="item.label + ' Icon'" class="menu-icon" />
                <span>{{ item.label }}</span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>

    <!-- Bottom Section -->
    <div class="bottom-section">
      <div class="bottom-items">
        <ul class="bottom-menu">
          <li class="settings-item">
            <img :src="SettingsImage" alt="Settings Icon" class="bottom-icon" />
            Settings
          </li>
          <li class="logout-item">
            <img :src="LogoutImage" alt="Logout Icon" class="bottom-icon" />
            Logout
          </li>
        </ul>

        <!-- Theme Toggle -->
        <div class="theme-toggle">
          <div class="theme-switch">
            <button @click="isDark = true" :class="{ active: isDark }">
              <img :src="DarkIcon" alt="Dark Mode" class="theme-icon" />
              <span>Dark</span>
            </button>
            <button @click="isDark = false" :class="{ active: !isDark }">
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
import homeIcon from '@/assets/Home.png'
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

watch(isDark, (newVal) => {
  document.body.classList.toggle('dark-theme', newVal)
  document.body.classList.toggle('light-theme', !newVal)
})

const menuItems = [
  { icon: CollectionImage, label: 'Collection' },
  { icon: DownloadsImage, label: 'Downloads' },
  { icon: ChatImage, label: 'Chat' },
  { icon: HistoryImage, label: 'History' }
]

// Function to navigate to the Image Generator page
const navigateToImageGenerator = () => {
  router.push('/image-generator')
}
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
  padding: 16px;
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
  padding-left: 16px;
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
  border-radius: 8px;
  margin-top: 35px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  gap: 8px;
  box-sizing: border-box;
}

.create-btn span {
  font-size: 16px;
  font-family: 'Inter', sans-serif;
}

.create-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.main-menu {
  margin-top: 0;
}

.menu-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu-row {
  width: 100%;
  display: flex;
}

.menu-row li.active {
  background-color: #252A41;
  border-radius: 12px; 
}

.menu-row li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
  height: 48px;
  width: 100%;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  gap: 10px;
}

.menu-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.menu-row li:not(.active) .menu-content span {
  color: #9CA3AF;
}

.menu-row li.active .menu-content span {
  color: white;
}

.menu-icon,
.home-icon,
.notif-icon {
  width: 27px;
  height: 24px;
  object-fit: contain;
  margin-left: auto;
}

.bottom-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.bottom-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  color: #ABADC6;
  padding-left: 16px; 
}

.settings-item {
  font-size: 18px;
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
  background-color: rgba(45, 50, 72, 1);
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
