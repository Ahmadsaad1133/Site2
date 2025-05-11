<template>
  <aside class="app-sidebar">
    <div class="top-section">
      <div class="logo-section">
        <img :src="logoImage" :alt="t('sidebar.logoAlt')" class="logo-image" />
        <span class="logo-text">{{ t('sidebar.chain') }}</span>
      </div>

      <button class="create-btn" @click="onCreateClick">
        <img :src="StarIcon" :alt="t('sidebar.createAlt')" class="star-icon" />
        <span>{{ t('sidebar.create') }}</span>
      </button>

      <nav class="main-menu">
        <div class="menu-container">
          <ul class="menu-column">
            <li :class="{ active: activeMenu === 'home' }" @click="setActive('home', '/home')">
              <div class="menu-content">
                <img :src="homeIcon" :alt="t('sidebar.homeAlt')" class="home-icon" />
                <span class="menu-text">{{ t('sidebar.home') }}</span>
              </div>
              <img :src="NotificationImage" :alt="t('sidebar.notificationsAlt')" class="notif-icon" />
            </li>
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              :class="{ active: activeMenu === item.key }"
              @click="setActive(item.key, item.route)"
            >
              <div class="menu-content">
                <img :src="item.icon" :alt="t(item.alt)" class="menu-icon" />
                <span class="menu-text">{{ t(item.label) }}</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="bottom-section">
      <div class="bottom-items">
        <div class="language-column">
          <p class="language-text">{{ t('sidebar.language') }}</p>
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
            <img :src="SettingsImage" :alt="t('sidebar.settingsAlt')" class="bottom-icon" />
            {{ t('sidebar.settings') }}
          </li>
          <li class="logout-item" @click="onLogoutClick">
            <img :src="LogoutImage" :alt="t('sidebar.logoutAlt')" class="bottom-icon" />
            {{ t('sidebar.logout') }}
          </li>
        </ul>

        <div class="theme-toggle">
          <div class="theme-switch">
            <button @click="setDarkMode(true)" :class="{ active: isDark }">
              <img :src="DarkIcon" :alt="t('sidebar.darkModeAlt')" class="theme-icon" />
              <span>{{ t('sidebar.dark') }}</span>
            </button>
            <button @click="setDarkMode(false)" :class="{ active: !isDark }">
              <img :src="LightIcon" :alt="t('sidebar.lightModeAlt')" class="theme-icon" />
              <span>{{ t('sidebar.light') }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
/* global defineEmits */
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const router = useRouter()
const emit = defineEmits(['themeChanged', 'languageChanged', 'createClicked', 'settingsClicked', 'logoutClicked'])

import homeIcon from '@/assets/Home.svg'
import StarIcon from '@/assets/Star.svg'
import logoImage from '@/assets/Icon.svg'
import ChatImage from '@/assets/Chat.svg'
import DownloadsImage from '@/assets/Downloads.svg'
import HistoryImage from '@/assets/History.svg'
import CollectionImage from '@/assets/Collection.svg'
import SettingsImage from '@/assets/Settings.svg'
import LogoutImage from '@/assets/Logout.svg'
import NotificationImage from '@/assets/Notification.svg'
import DarkIcon from '@/assets/Dark-icon-1.svg'
import LightIcon from '@/assets/Light-icon.svg'

const isDark = ref(true)
const activeMenu = ref('home')

const menuItems = [
  { id: 1, icon: CollectionImage, label: 'sidebar.collection', alt: 'sidebar.collectionAlt', key: 'collection', route: '/collection' },
  { id: 2, icon: DownloadsImage, label: 'sidebar.downloads', alt: 'sidebar.downloadsAlt', key: 'downloads', route: '/downloads' },
  { id: 3, icon: ChatImage, label: 'sidebar.chat', alt: 'sidebar.chatAlt', key: 'chat', route: '/chat' },
  { id: 4, icon: HistoryImage, label: 'sidebar.history', alt: 'sidebar.historyAlt', key: 'history', route: '/history' }
]

const setDarkMode = (mode) => {
  isDark.value = mode
}

const setActive = (key, route) => {
  activeMenu.value = key
  router.push(route)
}

const onCreateClick = () => emit('createClicked')
const onSettingsClick = () => emit('settingsClicked')
const onLogoutClick = () => emit('logoutClicked')

watch(isDark, (newVal) => {
  document.body.classList.toggle('dark-theme', newVal)
  document.body.classList.toggle('light-theme', !newVal)
  emit('themeChanged', newVal ? 'dark' : 'light')
})
const isEnglish = ref(locale.value === 'en')

watch(isEnglish, (newVal) => {
  locale.value = newVal ? 'en' : 'ar'  // change 'fr' to 'ar'
  emit('languageChanged', locale.value)
})

</script>
<style>
:global(.dark) .app-sidebar {
  background-color: #1E2235;
}
:global(.light) .app-sidebar {
  background-color: #f3f4f6;
}

/* ===== Custom Light Theme Styling ===== */
.light-theme .app-sidebar .menu-text,
.light-theme .app-sidebar .menu-icon,
.light-theme .app-sidebar .home-icon,
.light-theme .app-sidebar .notif-icon {
  color: var(--menu-icon-color);
  filter: brightness(0) saturate(100%) invert(65%) sepia(5%) saturate(0%) hue-rotate(175deg);
}

.light-theme .app-sidebar li.active .menu-text,
.light-theme .app-sidebar li.active .home-icon {
  color: var(--home-color);
  filter: none;
}

.light-theme .bottom-menu li {
  color: var(--inactive-text-color);
}

.light-theme .logo-text {
  color: var(--logo-color);
}

.light-theme .logo-image {
  filter: none;
}



:root {
  --sidebar-bg-color: #1f2937;
  --text-color: white;
  --active-bg-color: #252A41;
  --inactive-text-color: #9ca3af;
}

body.dark-theme {
  --sidebar-bg-color: #1f2937;
  --text-color: white;
  --active-bg-color: #252A41;
  --inactive-text-color: #9ca3af;
}

.light-theme {
  --sidebar-bg-color: #f3f4f6;
  --text-color: #333;
  --active-bg-color: #d1d5db;
  --inactive-text-color: #9ca3af;

  --logo-color: black;
  --home-color: black;
  --menu-icon-color: #9ca3af;
}


.app-sidebar {
  width: 264px;
  background-color: var(--sidebar-bg-color);
  color: var(--text-color);
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
  color: var(--text-color);
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
  background-color: var(--active-bg-color);
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
  color: var(--inactive-text-color);
}

.menu-column li.active .menu-text {
  color: var(--text-color);
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
  color: var(--inactive-text-color);
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
  color: var(--text-color);
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
