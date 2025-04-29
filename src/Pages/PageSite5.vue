<template>
  <div class="PageSite5">
    <div class="first-row"></div>
    <div class="container-full">
      <div class="main-content">
        <div class="content-column">

          <div class="header-row">
            <div class="bell-container">
              <img :src="bellIcon" alt="إشعار" class="bell-icon" />
              <img :src="ProfileImage" alt="ملف شخصي" class="profile-icon" />
              <div class="user-info">
                <div class="user-name">Nicholas Turner</div>
                <div class="user-company">SaaS Blocks LLC</div>
              </div>
              <img :src="arrowIcon" alt="Arrow" class="arrow-icon" />
            </div>
            <div class="search-container">
              <img :src="searchIcon" alt="بحث" class="search-icon" />
              <input type="search" class="search-bar" placeholder="ابحث..." />
            </div>
          </div>
          <div class="header-divider" :style="dividerStyle"></div>
          <div class="main-row">
            <div class="filter-row">
              <div class="custom-container">
                <img :src="arrowIcon" alt="Arrow" class="custom-arrow-icon" />
                <span class="filter-text">فیلتر</span>
                <img :src="filterIcon" alt="فلتر" class="filter-icon" />
              </div>
              <div class="secondary-container">
                <div class="item-row">
                  <div class="item-container large-item1">
                    <img :src="addImage" alt="Add Item" class="add-icon" />
                  </div>
                  <div class="item-container large-item2">
                    <span class="item-text">الملخص</span>
                  </div>
                  <div class="item-container large-item3">
                    <span class="item-text">خيال علمي</span>
                  </div>
                  <div class="item-container large-item4">
                    <span class="item-text">الملخص</span>
                  </div>
                  <div class="item-container large-item5">
                    <span class="item-text">اكتشاف</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="main-container">
            <div class="gallery">
              <div
                class="gallery-column"
                v-for="(column, i) in columns"
                :key="i"
              >
                <div
                  class="gallery-card"
                  v-for="(card, idx) in column"
                  :key="idx"
                >
                  <img :src="card.image" class="card-image" />
                  <div class="card-info">
                    <div class="user">
                      <div class="profile">
                        <img :src="card.avatar" class="avatar" />
                        <p class="username">{{ card.username }}</p>
                      </div>
                      <div class="icons">
                        <div class="icon-group">
                          <img :src="heartIcon" class="icon" />
                          <span>{{ card.likes }}</span>
                        </div>
                        <div class="icon-group">
                          <img :src="eyeIcon" class="icon" />
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
            <img :src="iconImage" alt="App Icon" class="header-icon" />
            <img :src="logoImage" alt="Chain Logo" class="header-img" />
          </div>
          <div class="sidebar-button-row">
            <button class="sidebar-create-btn">
              <img :src="starIcon" alt="Star Icon" class="star-icon" />
              <span class="button-text">اصنع</span>
            </button>
          </div>
          <div class="sidebar-menu">
            <div class="menu-item active">
              <div class="menu-item-container">
                <img :src="notification" alt="Notification" class="notification-icon" />
                <span class="menu-text">الرئيسية</span>
                <img :src="homeIcon" alt="Home" class="menu-icon" />
              </div>
            </div>
            <div class="menu-item">
              <div class="menu-item-container">
                <span class="menu-text">المجموعة</span>
                <img :src="folderIcon" alt="Folder" class="menu-icon" />
              </div>
            </div>
            <div class="menu-item">
              <div class="menu-item-container">
                <span class="menu-text">التحميلات</span>
                <img :src="downloadsIcon" alt="Downloads" class="menu-icon" />
              </div>
            </div>
            <div class="menu-item">
              <div class="menu-item-container">
                <span class="menu-text">محادثة</span>
                <img :src="chatIcon" alt="Chat" class="menu-icon" />
              </div>
            </div>
            <div class="menu-item">
              <div class="menu-item-container">
                <span class="menu-text">التاريخ</span>
                <img :src="historyIcon" alt="History" class="menu-icon" />
              </div>
            </div>
          </div>
          <div class="sidebar-bottom-container">
  <div class="bottom-actions">
    <div class="settings-row">
      <span class="bottom-text">إعدادات</span>
      <img :src="settingsIcon" alt="Settings" class="bottom-icon" />
    </div>
    <div class="logout-row">
      <span class="bottom-text">خروج</span>
      <img :src="logoutIcon" alt="Logout" class="bottom-icon" />
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
                    :src="lightIcon"
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
                  <img :src="darkIcon" alt="Dark Icon" class="toggle-icon" />
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
import { ref, onMounted } from 'vue'
import iconImage from '@/assets/Icon.png'
import logoImage from '@/assets/Chain.png'
import starIcon from '@/assets/Star1.png'
import homeIcon from '@/assets/Home.png'
import folderIcon from '@/assets/Folder2.png'
import downloadsIcon from '@/assets/Downloads.png'
import chatIcon from '@/assets/Chat.png'
import historyIcon from '@/assets/History.png'
import settingsIcon from '@/assets/Settings.png'
import logoutIcon from '@/assets/Logout.png'
import darkIcon from '@/assets/DarkIcon.png'
import lightIcon from '@/assets/LightIcon.png'
import searchIcon from '@/assets/Search.png'
import bellIcon from '@/assets/BellImage.png'
import ProfileImage from '@/assets/ProfileImage.png'
import arrowIcon from '@/assets/Arrow.png'
import filterIcon from '@/assets/Filter.png'
import addImage from '@/assets/AddImage.png'
import heartIcon from '@/assets/Heart-Icon.png'
import eyeIcon from '@/assets/Eye-Icon.png'
import Card1 from '@/assets/Card1.png'
import Card2 from '@/assets/Card2.png'
import Card3 from '@/assets/Card3.png'
import Card4 from '@/assets/Card4.png'
import Card5 from '@/assets/Card5.png'
import Card6 from '@/assets/Card6.png'
import Card7 from '@/assets/Card7.png'
import Card8 from '@/assets/Card8.png'
import Card9 from '@/assets/Card9.png'
import Card10 from '@/assets/Card10.png'
import Card11 from '@/assets/Card11.png'
import notification from '@/assets/Notification.png'


const theme = ref('dark')
const toggleTheme = t => { theme.value = t }

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
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
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
  border: 2px solid #374151;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
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

/* Sidebar */
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
