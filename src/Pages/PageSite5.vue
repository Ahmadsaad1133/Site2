<template>
  <div class="PageSite5">
    <div class="first-row"></div>
    <div class="container-full">
  
      <div class="main-content">
        <div class="content-column">
          <div class="header-row">
            <div class="bell-container">
              <img :src="bellicon" alt="إشعار" class="bell-icon" />
              <img :src="Profileimage" alt="ملف شخصي" class="profile-icon" />
              <div class="user-info">
                <div class="user-name">Nicholas Turner</div>
                <div class="user-company">SaaS Blocks LLC</div>
              </div>
              <img :src="arrowIcon" alt="Arrow" class="arrow-icon" />
            </div>
            <div class="search-container">
              <img :src="searchicon" alt="بحث" class="search-icon" />
              <input type="search" class="search-bar" placeholder="ابحث..." />
            </div>
          </div>

          <div class="header-divider" :style="dividerStyle"></div>


          <div class="main-row">
            <div class="filter-row">
              <div class="custom-container">
                <img :src="arrowicon" alt="Arrow" class="custom-arrow-icon" />
                <span class="filter-text">فیلتر</span>
                <img :src="filtericon" alt="فلتر" class="filter-icon" />
              </div>
              <div class="secondary-container">
                <div class="item-row">
                  <div
                    class="item-container large-item1"
                    :class="{ 'active-pill': activeIndex === 0 }"
                    @click="setActiveIndex(0)"
                  >
                    <img :src="addimage" alt="Add Item" class="add-icon" />
                  </div>

                  <div
                    class="item-container large-item2"
                    :class="{ 'active-pill': activeIndex === 1 }"
                    @click="setActiveIndex(1)"
                  >
                    <span class="item-text">الملخص</span>
                  </div>

                  <div
                    class="item-container large-item3"
                    :class="{ 'active-pill': activeIndex === 2 }"
                    @click="setActiveIndex(2)"
                  >
                    <span class="item-text">خيال علمي</span>
                  </div>

                  <div
                    class="item-container large-item4"
                    :class="{ 'active-pill': activeIndex === 3 }"
                    @click="setActiveIndex(3)"
                  >
                    <span class="item-text">الملخص</span>
                  </div>

                  <div
                    class="item-container large-item5"
                    :class="{ 'active-pill': activeIndex === 4 }"
                    @click="setActiveIndex(4)"
                  >
                    <span class="item-text">اكتشاف</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="main-container">
            <div class="gallery">
              <div class="gallery-column" v-for="(column, i) in columns" :key="i">
                <div class="gallery-card" v-for="(card, idx) in column" :key="idx"
                 @click="router.push({ name: 'PageSite6' })">
                  <img :src="card.image" class="card-image" />
                  <div class="card-info">
                    <div class="user">
                      <div class="profile">
                        <img :src="card.avatar" class="avatar" />
                        <p class="username">{{ card.username }}</p>
                      </div>
                      <div class="icons">
                        <div class="icon-group">
                          <img :src="hearticon" class="icon" />
                          <span>{{ card.likes }}</span>
                        </div>
                        <div class="icon-group">
                          <img :src="eyeicon" class="icon" />
                          <span>{{ card.views }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div class="sidebar">
        <div class="sidebar-column">


          <div class="sidebar-header-row">
            <img :src="iconimage" alt="App Icon" class="header-icon" />
            <img :src="logoimage" alt="Chain Logo" class="header-img" />
          </div>


          <div class="sidebar-button-row">
            <button class="sidebar-create-btn" @click="handleCreate">
              <img :src="staricon" alt="Star Icon" class="star-icon" />
              <span class="button-text">اصنع</span>
            </button>
          </div>

          <div class="sidebar-menu">
            <div
              :class="['menu-item', { active: activeMenuItem === 'home' }]"
              @click="setActiveMenu('home')"
            >
              <div class="menu-item-container">
                <img :src="notification" alt="Notification" class="notification-icon" />
                <span class="menu-text">الرئيسية</span>
                <img :src="homeicon" alt="Home" class="menu-icon" />
              </div>
            </div>

            <div
              :class="['menu-item', { active: activeMenuItem === 'group' }]"
              @click="setActiveMenu('group')"
            >
              <div class="menu-item-container">
                <span class="menu-text">المجموعة</span>
                <img :src="foldericon" alt="Group" class="menu-icon" />
              </div>
            </div>

            <div
              :class="['menu-item', { active: activeMenuItem === 'downloads' }]"
              @click="setActiveMenu('downloads')"
            >
              <div class="menu-item-container">
                <span class="menu-text">التحميلات</span>
                <img :src="downloadsicon" alt="Downloads" class="menu-icon" />
              </div>
            </div>

            <div
              :class="['menu-item', { active: activeMenuItem === 'chat' }]"
              @click="setActiveMenu('chat')"
            >
              <div class="menu-item-container">
                <span class="menu-text">محادثة</span>
                <img :src="chaticon" alt="Chat" class="menu-icon" />
              </div>
            </div>

            <div
              :class="['menu-item', { active: activeMenuItem === 'history' }]"
              @click="setActiveMenu('history')"
            >
              <div class="menu-item-container">
                <span class="menu-text">التاريخ</span>
                <img :src="historyicon" alt="History" class="menu-icon" />
              </div>
            </div>
          </div>

          <div class="sidebar-bottom-container">
            <div class="language-column">
              <p class="language-text">Language</p>
              <div class="language-toggle">
                <div class="toggle-container">
                  <label class="switch">
                    <input type="checkbox" v-model="isEnglish" @change="handleLanguageToggle" />
                    <span class="slider"></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="bottom-actions">
              <div class="settings-row">
                <span class="bottom-text">إعدادات</span>
                <img :src="settingsicon" alt="Settings" class="bottom-icon" />
              </div>
              <div class="logout-row">
                <span class="bottom-text">خروج</span>
                <img :src="logouticon" alt="Logout" class="bottom-icon" />
              </div>
            </div>

            <div class="switcher-row">
              <div class="theme-switcher">
                <div
                  class="toggle"
                  :class="{ active: theme === 'light' }"
                  @click="toggleTheme('light')"
                >
                  <span class="toggle-text">ضوء</span>
                  <img
                    :src="lighticon"
                    alt="Light Icon"
                    class="toggle-icon"
                  />
                </div>
                <div
                  class="toggle"
                  :class="{ active: theme === 'dark' }"
                  @click="toggleTheme('dark')"
                >
                  <span class="toggle-text">مظلم</span>
                  <img :src="darkicon" alt="Dark Icon" class="toggle-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

// Images
import iconimage from '@/assets/Icon.svg'
import logoimage from '@/assets/Chain.png'
import staricon from '@/assets/Star.svg'
import homeicon from '@/assets/Home.svg'
import foldericon from '@/assets/Folder.svg'
import downloadsicon from '@/assets/Downloads.svg'
import chaticon from '@/assets/Chat.svg'
import historyicon from '@/assets/History.svg'
import settingsicon from '@/assets/Settings.svg'
import logouticon from '@/assets/Logout.svg'
import darkicon from '@/assets/Dark-icon-2.svg'
import lighticon from '@/assets/Light-icon-2.svg'
import searchicon from '@/assets/Search.svg'
import bellicon from '@/assets/Bell-image.svg'
import Profileimage from '@/assets/Profile-image.svg'
import arrowicon from '@/assets/Arrow.svg'
import filtericon from '@/assets/Filter.svg'
import addimage from '@/assets/Add.svg'
import hearticon from '@/assets/Heart-Icon.svg'
import eyeicon from '@/assets/Eye-icon.svg'
import Card1 from '@/assets/Card-1.webp'
import Card2 from '@/assets/Card-2.webp'
import Card3 from '@/assets/Card-3.webp'
import Card4 from '@/assets/Card-4.webp'
import Card5 from '@/assets/Card-5.webp'
import Card6 from '@/assets/Card-6.webp'
import Card7 from '@/assets/Card-7.webp'
import Card8 from '@/assets/Card-8.webp'
import Card9 from '@/assets/Card-9.webp'
import Card10 from '@/assets/Card-10.webp'
import Card11 from '@/assets/Card-11.webp'
import notification from '@/assets/Notification.svg'


const router = useRouter()
const isDark = ref(true)
const theme = ref('dark')
const isEnglish = ref(true)
const activeMenuItem = ref('home') 


const activeIndex = ref(null)
const setActiveIndex = (i) => {
  activeIndex.value = i
}


const handleCreate = () => {
  alert('تم الضغط على زر الصنع!')
}


watch(isDark, (newVal) => {
  document.body.classList.toggle('dark-theme', newVal)
  document.body.classList.toggle('light-theme', !newVal)
})


const cards = [
  { image: Card1, avatar: 'https://i.pravatar.cc/30?u=1', username: 'Nicholas Turner', likes: 24, views: 42 },
  { image: Card2, avatar: 'https://i.pravatar.cc/30?u=2', username: 'Patty Stone', likes: 19, views: 31 },
  { image: Card3, avatar: 'https://i.pravatar.cc/30?u=3', username: 'Noel Wilson', likes: 17, views: 28 },
  { image: Card4, avatar: 'https://i.pravatar.cc/30?u=4', username: 'Angela Art', likes: 29, views: 55 },
  { image: Card5, avatar: 'https://i.pravatar.cc/30?u=5', username: 'John Doe', likes: 35, views: 60 },
  { image: Card6, avatar: 'https://i.pravatar.cc/30?u=6', username: 'Alice Smith', likes: 40, views: 72 },
  { image: Card7, avatar: 'https://i.pravatar.cc/30?u=7', username: 'James Brown', likes: 28, views: 50 },
  { image: Card8, avatar: 'https://i.pravatar.cc/30?u=8', username: 'Maria Garcia', likes: 21, views: 48 },
  { image: Card9, avatar: 'https://i.pravatar.cc/30?u=9', username: 'Marlos Garcia', likes: 51, views: 45 },
  { image: Card10, avatar: 'https://i.pravatar.cc/30?u=10', username: 'Carla Moon', likes: 33, views: 47 },
  { image: Card11, avatar: 'https://i.pravatar.cc/30?u=11', username: 'David Sky', likes: 37, views: 53 }
]


const columns = [[], [], [], []]
cards.forEach((card, idx) => {
  columns[idx % 4].push(card)
})


const dividerStyle = ref({})
const galleryStyle = ref({})


const setActiveMenu = (menu) => {
  activeMenuItem.value = menu
}


const handleLanguageToggle = () => {
  router.push({ name: 'PageSite1' })
}


onMounted(() => {
  const bellEl = document.querySelector('.bell-container')
  const searchEl = document.querySelector('.search-bar')
  if (bellEl && searchEl) {
    const bellRect = bellEl.getBoundingClientRect()
    const searchRect = searchEl.getBoundingClientRect()
    dividerStyle.value = {
      position: 'fixed',
      top: '112px',
      left: `${bellRect.left}px`,
      width: `${searchRect.right - bellRect.left}px`,
      height: '1px',
      backgroundColor: '#374151',
      zIndex: 10
    }
    galleryStyle.value = {
      position: 'relative',
      marginTop: '20px',
      marginLeft: `${bellRect.left}px`,
      width: `${searchRect.right - bellRect.left}px`
    }
  }
  router.push({ name: 'PageSite5' })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');


.item-container {
  cursor: pointer;
  transition: background-color 0.2s;
}
.item-container.active-pill {
  background-color: #252A41;
  border-color: transparent;
}


.ImageGenerator2 {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
}

.container-full {
  flex: 1;
  display: flex;
  min-height: 0;
}

.main-content {
  flex: 1;
  min-height: 0;
  margin: 32px 336px 0 72px;
  display: flex;
  flex-direction: column;
}

.content-column {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
}
.bell-container {
  width: 261px;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.bell-icon {
  width: 48px;
  height: 48px;
}
.profile-icon {
  width: 44px;
  height: 44px;
  margin-left: 8px;
}
.user-info {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
}
.user-name,
.user-company {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.arrow-icon {
  width: 16px;
  height: 16px;
  margin-left: 10px;
}
.search-container {
  position: relative;
  width: 260px;
  height: 44px;
}
.search-bar {
  width: 100%;
  height: 100%;
  padding: 0 40px 0 12px;
  background-color: #1A1D2D;
  border: 2px solid #374151;
  border-radius: 12px;
  font-family: 'Cairo', sans-serif;
  font-size: 16px;
  text-align: right;
}
.search-icon {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}

.header-divider {
  position: fixed;
  top: 128px;
  left: 72px;
  right: 336px;
  height: 1px;
  background-color: #374151;
  z-index: 10;
}

.main-row {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  gap: 393px;
}
.filter-row {
  display: flex;
  align-items: center;
  margin-top: 70px;
  width: 100%;
}
.custom-container {
  width: 260px;
  height: 44px;
  border: 2px solid #374151;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
}
.custom-arrow-icon { width: 20px; height: 20px; }
.filter-text {
  margin-left: auto;
  font-family: 'Cairo', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: white;
}
.filter-icon { width: 20px; height: 20px; }
.secondary-container { margin-left: auto; }
.item-row {
  display: flex;
  align-items: center;
  gap: 16px;
}
.item-container {
  height: 36px;
  border-radius: 32px;
  cursor: pointer;
  border: 2px solid #374151;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-container.active-pill {
  background-color: #252A41;
  border-color: transparent;
}
.large-item1 { width: 52px; }
.large-item2 { width: 75px; }
.large-item3 { width: 88px; }
.large-item4 { width: 75px; }
.large-item5 {
  width: 121px;
  background-color: #252A41;
}
.item-text {
  font-family: 'Cairo', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: white;
}
.add-icon { width: 20px; height: 20px; }

.main-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #111827;
  box-sizing: border-box;
  margin: 0;
  padding: 0;


  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 20px;
}

.main-container::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.gallery {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding: 20px 0;
  background: transparent;
  margin-bottom: 20px;
  flex-wrap: wrap;
  width: 100%;
}
.gallery-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  max-width: 25%;
}
.gallery-card {
  background: transparent;
  border-radius: 16px;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
}
.card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}
.card-info {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}
.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.profile {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: -12px;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}
.username {
  font-size: 14px;
  margin: 0;
  color: #e5e7eb;
}
.icons {
  display: flex;
  gap: 12px;
  align-items: center;
  color: #e5e7eb;
}
.icon-group {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
}
.icon {
  width: 16px;
  height: 16px;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 264px;
  background-color: #1E2235;
  display: flex;
  flex-direction: column;
  z-index: 20;
}
.sidebar-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 12px 16px 12px;
  gap: 24px;
  gap: 24px;
}
.sidebar-header-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-icon {
  width: 24px;
  height: 40px;
  margin-right: 8px;
}
.header-img {
  width: 108px;
  height: 30px;
}
.sidebar-button-row {
  display: flex;
  justify-content: flex-start;
}
.sidebar-create-btn {
  width: 240px;
  height: 48px;
  border-radius: 12px;
  margin-top: 5px;
  background: #2563EB;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
}
.star-icon { width: 24px; height: 24px; }
.button-text {
  font-family: 'Cairo', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: white;
}
.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.menu-item {
  width: 240px;
  height: 48px;
  border-radius: 12px;
  background: #1E2235;
}
.menu-item.active { background: #252A41; }
.menu-item-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
  gap: 8px;
}
.menu-icon { width: 24px; height: 24px; margin-right: 15px; }
.menu-text {
  font-family: 'Cairo', sans-serif;
  font-size: 16px;
  color: white;
  margin-right: 8px;
}
.sidebar-bottom-container {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
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
  text-align: center;
  margin-bottom: 8px; 
}

.language-toggle {
  display: flex;
  justify-content: flex-end;
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


.settings-row,
.logout-row {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 48px;
  padding-right: 16px;
  gap: 8px;
}

.bottom-icon {
   width: 24px;
    height: 24px;}
.switcher-row {
  display: flex;
  align-items: center;
  margin-right: 16px;
  margin-bottom: 16px;
    justify-content: flex-end;
  height: 52px;
  gap: 8px;
}
.theme-switcher {
  display: flex;
  width: 212px;
  height: 52px;
  border: 2px solid #252A41;
  border-radius: 16px;
  overflow: hidden;
}
.toggle {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
}
.toggle-icon { width: 24px; height: 24px; }
.toggle-text {
  font-family: 'Cairo', sans-serif;
  font-size: 18px;
  color: white;
}
.toggle.active { background: #252A41; }
.bottom-text {
  font-family: 'Cairo', sans-serif;
  font-size: 16px;
  color: white;
  margin-right: 8px;
}
.bottom-actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.notification-icon {
  position: absolute;
  left: 16px;
  width: 26px;
  height: 26px;
  margin-left: 0;
}

@media (max-width: 1200px) {
  .gallery-column { max-width: 100%; }
}
@media (max-width: 954px) {
  .gallery-column { max-width: 100%; }
}
@media (max-width: 666px) {
  .gallery-column { max-width: 100%; }
}
@media (max-width: px) {
  .gallery { gap: 16px; padding: 16px; }
}
</style>
