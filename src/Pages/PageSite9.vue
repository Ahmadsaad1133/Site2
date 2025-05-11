<template>
  <div class="PageSite9">
    <div class="first-row"></div>
    <div class="container-full">
      <div class="main-content">
        <div class="content-column">


          <div class="header-row">
            <div class="bell-container">
              <img :src="ProfileImage" alt="ملف شخصي" class="profile-icon" />
              <div class="user-info">
                <div class="user-name5">Nicholas Turner</div>
                <div class="user-company">SaaS Blocks LLC</div>
              </div>
              <img :src="arrowIcon" alt="Arrow" class="arrow-icon" />
              <img :src="BillImage5" alt="إشعار" class="bell-icon" />
            </div>
            <div class="search-container">
              <img :src="searchIcon" alt="بحث" class="search-icon" />
              <input type="search" class="search-bar" placeholder="Search" />
            </div>
          </div>

          <div class="main-row">
    <div class="filter-row">
      <div class="custom-container">
        <img :src="arrowIcon" alt="Arrow" class="custom-arrow-icon" />
        <span class="filter-text">Filter</span>
        <img :src="filterIcon" alt="Filter" class="filter-icon" />
      </div>

      <div class="secondary-container">
        <div class="item-row">

          <div class="item-container large-item1" @click="onAddItem">
            <img :src="Add25" alt="Add Item" class="add-icon" />
          </div>

          <div
            v-for="(item, index) in itemPills"
            :key="index"
            :class="['item-container', itemSizes[index % itemSizes.length]]"
          >
            <span class="item-text">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

          <div class="main-container">
            <div class="gallery">
              <div class="gallery-column" v-for="(column, i) in columns" :key="i">
                <div class="gallery-card" v-for="(card, idx) in column" :key="idx">
                  <router-link to="/pages/PageSite10">
                    <img :src="card.image" class="card-image" />
                  </router-link>
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
            <img :src="Logo2" alt="App Icon" class="header-icon" />
            <img :src="Chain1" alt="Chain Logo" class="header-img" />
          </div>
          <div class="sidebar-button-row">
            <button class="sidebar-create-btn"  @click="onCreateClick">
              <img :src="StarIcon" alt="Star Icon" class="star-icon" />
              <span class="button-text">Create</span>
            </button>
          </div>


          <div class="sidebar-menu">
            <div
              class="menu-item"
              v-for="item in menuItems"
              :key="item.label"
              :class="{ active: activeMenu === item.label }"
              @click="setActive(item.label)"
            >
              <div class="menu-item-container">
                <img
                  v-if="item.label === 'Home'"
                  :src="notification"
                  alt="Notification"
                  class="notification-icon"
                />
                <span :class="item.label === 'Home' ? 'menu-text5' : 'menu-text'">
                  {{ item.label }}
                </span>
                <img :src="item.icon" :alt="item.label" class="menu-icon" />
              </div>
            </div>
          </div>


          <div class="sidebar-bottom-container">
            <div class="bottom-actions">
              <div class="settings-row" @click="showSettingsMessage">
  <span class="bottom-text">Settings</span>
  <img :src="settingsIcon" alt="Settings" class="bottom-icon" />
</div>


<div v-if="settingsMessage" class="settings-message">
  {{ settingsMessage }}
</div>
              <div class="logout-row">
                <span class="bottom-text">Logout</span>
                <img :src="logoutIcon" alt="Logout" class="bottom-icon" />
              </div>
            </div>
            <div class="switcher-row">
              <div class="theme-switcher">
                <div class="toggle" :class="{ active: theme === 'light' }" @click="toggleTheme('light')">
                  <span class="toggle-text1">Dark</span>
                  <img :src="darkIcon4" alt="Dark Icon" class="toggle-icon2" />
                </div>
                <div class="toggle" :class="{ active: theme === 'dark' }" @click="toggleTheme('dark')">
                  <span class="toggle-text2">Light</span>
                  <img :src="lightIcon" alt="Light Icon" class="toggle-icon1" />
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
import { useRouter } from 'vue-router'


import Logo2 from '@/assets/Logo-2.svg'
import Chain1 from '@/assets/Chain.png'
import StarIcon from '@/assets/Star.svg'
import Home3 from '@/assets/Home.svg'
import folderIcon from '@/assets/Folder-Image.svg'
import downloadsIcon from '@/assets/Downloads.svg'
import chatIcon from '@/assets/Chat.svg'
import historyIcon from '@/assets/History.svg'
import settingsIcon from '@/assets/Settings.svg'
import logoutIcon from '@/assets/Logout.svg'
import darkIcon4 from '@/assets/Dark-icon-2.svg'
import lightIcon from '@/assets/Light-icon.svg'
import searchIcon from '@/assets/Search.svg'
import BillImage5 from '@/assets/Bill-image-5.svg'
import ProfileImage from '@/assets/Profile-image.svg'
import arrowIcon from '@/assets/Arrow.svg'
import filterIcon from '@/assets/Filter.svg'
import Add25 from '@/assets/Add.svg'
import heartIcon from '@/assets/Heart-Icon.svg'
import eyeIcon from '@/assets/Eye-icon.svg'
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


const theme = ref('dark')
const activeMenu = ref('Home')
const itemPills = ref(['Abstract', 'Sci-fi', 'Abstract', 'Discovery'])


const itemSizes = ['large-item2', 'large-item3', 'large-item4', 'large-item5']

function onAddItem() {
  itemPills.value.push('New Item')
}

const menuItems = [
  { icon: Home3,        label: 'Home' },
  { icon: folderIcon,   label: 'Collection' },
  { icon: downloadsIcon,label: 'Downloads' },
  { icon: chatIcon,     label: 'Chat' },
  { icon: historyIcon,  label: 'History' }
]

function setActive(label) {
  activeMenu.value = label
}
function toggleTheme(t) {
  theme.value = t
  if (t === 'light') router.push({ name: 'PageSite1' })
}


const cards = [
  { image: Card1,  avatar: 'https://i.pravatar.cc/30?u=1', username: 'Nicholas Turner', likes: 24, views: 42 },
  { image: Card2,  avatar: 'https://i.pravatar.cc/30?u=2', username: 'Patty Stone',     likes: 19, views: 31 },
  { image: Card3,  avatar: 'https://i.pravatar.cc/30?u=3', username: 'Noel Wilson',     likes: 17, views: 28 },
  { image: Card4,  avatar: 'https://i.pravatar.cc/30?u=4', username: 'Angela Art',      likes: 29, views: 55 },
  { image: Card5,  avatar: 'https://i.pravatar.cc/30?u=5', username: 'John Doe',        likes: 35, views: 60 },
  { image: Card6,  avatar: 'https://i.pravatar.cc/30?u=6', username: 'Alice Smith',     likes: 40, views: 72 },
  { image: Card7,  avatar: 'https://i.pravatar.cc/30?u=7', username: 'James Brown',     likes: 28, views: 50 },
  { image: Card8,  avatar: 'https://i.pravatar.cc/30?u=8', username: 'Maria Garcia',    likes: 21, views: 48 },
  { image: Card9,  avatar: 'https://i.pravatar.cc/30?u=9', username: 'Marlos Garcia',   likes: 51, views: 45 },
  { image: Card10, avatar: 'https://i.pravatar.cc/30?u=10',username: 'Carla Moon',      likes: 33, views: 47 },
  { image: Card11, avatar: 'https://i.pravatar.cc/30?u=11',username: 'David Sky',       likes: 37, views: 53 }
]
const columns = ref([[],[],[],[]])

onMounted(() => {

  const swapPairs = [[1,2],[3,7],[5,6],[8,10]]
  const swapped = [[],[],[],[]]
  cards.forEach((card, idx) => {
    let target = idx
    swapPairs.forEach(([a,b]) => { if(idx===a) target=b; if(idx===b) target=a })
    swapped[target%4].push(card)
  })
  columns.value = swapped
})
const settingsMessage = ref('');


function showSettingsMessage() {
  settingsMessage.value = 'Settings pressed';
  setTimeout(() => {
    settingsMessage.value = ''; 
  }, 3000);
}
const onCreateClick = () => alert('create pressed')
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
.PageSite9 {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: row;     /* ← arrange children horizontally */  /* ← keep your global mirror if you really need it */
  }
.container-full { flex: 1; background-color: white; display: flex; min-height: 0; }
.main-content { flex: 1; min-height: 0; margin-top: 50px; display: flex; margin-right: 72px; flex-direction: column; }
.content-column { flex: 1; min-height: 0; display: flex; flex-direction: column;transform: scaleX(-1); }
.header-row { display: flex; align-items: center; margin-right: 335px; margin-left: 20px; justify-content: space-between; height: 48px; }
.bell-container { width: 261px; height: 48px; padding-right: 18px; transform: scaleX(-1); display: flex; align-items: center; gap:14px; }
.profile-icon { width:44px; height:44px; margin-left:8px; }
.bell-icon { width:48px; height:48px; }
.user-info { display:flex; flex-direction:column; margin-left:8px; }
.user-name5, .user-company { font-family:'Inter',sans-serif; font-size:14px; line-height:20px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.user-name5 { color:black; }
.user-company { color:#6B7280; }
.arrow-icon { width:16px; height:16px; }
.search-container { position:relative; width:260px; height:44px; }
.search-bar { width:100%; height:100%; background:white; border:2px solid gainsboro; border-radius:12px; font-family:'Cairo',sans-serif; font-size:16px; text-align:left; transform: scaleX(-1); }
.search-icon { position:absolute; top:50%; width:20px; height:20px; }
.main-row { width:100%; display:flex; margin-bottom:10px; gap:393px; }
.filter-row { display:flex; padding-right:330px; padding-left:5px; margin-top:80px; align-items:center; width:100%; }
.custom-container { width:260px; height:44px; border:2px solid #9CA3AF; border-radius:12px; display:flex; align-items:center; gap:8px; padding:0 12px; }
.custom-arrow-icon, .filter-icon { width:20px; height:20px; }
.filter-text { margin-left:auto; font-family:'Cairo',sans-serif; font-size:14px; transform:scaleX(-1); line-height:20px; color:#9CA3AF; }
.secondary-container { margin-left:auto; }
.item-row { display:flex; align-items:center; gap:16px; }
.item-container { height:36px; border-radius:32px; border:2px solid #9CA3AF; display:flex; align-items:center; justify-content:center; }
.large-item1 { width:52px; }
.large-item2 { width:75px; }
.large-item3 { width:88px; }
.large-item4 { width:75px; }
.large-item5 { width:121px; background:#F3F4F6; }
.large-item5 .item-text { color:black; }
.item-text { font-family:'Inter',sans-serif; font-size:14px; transform:scaleX(-1); line-height:20px; color:#9CA3AF; }
.add-icon { width:20px; height:20px; }
.main-container { flex:1; overflow-y:auto; overflow-x:hidden; min-height:80vh; display:flex; flex-direction:column; width:100%; background:white; box-sizing:border-box; padding-right:330px; padding-bottom:20px; scrollbar-width:none; -ms-overflow-style:none; }
.main-container::-webkit-scrollbar { width:0; height:0; }
.gallery { display:flex; justify-content:space-between; gap:25px; padding-top:20px; margin-bottom:20px; flex-wrap:wrap; width:100%; }
.gallery-column { display:flex; flex-direction:column; gap:16px; flex:1; max-width:25%; }
.gallery-card { border-radius:16px; overflow:hidden; transform:scaleX(-1); display:flex; flex-direction:column; }
.card-image { width:100%; height:auto; object-fit:cover; }
.card-info { padding:12px; display:flex; flex-direction:column; gap:8px; margin-top:12px; }
.user { display:flex; justify-content:space-between; align-items:center; gap:8px; }
.profile { display:flex; align-items:center; gap:8px; margin-left:-12px; }
.avatar { width:30px; height:30px; border-radius:50%; object-fit:cover; }
.username { font-size:14px; font-family:'Inter',sans-serif; color:black; margin:0; }
.icons { display:flex; gap:12px; align-items:center; color:#6B7280; }
.icon-group { display:flex; align-items:center; gap:4px; font-size:14px; }
.icon { width:16px; height:16px; }
.sidebar {
    position: fixed;
    top:    0;
    right:  0;       /* ← anchor here in code */
    bottom: 0;
    width:  264px;
    background: #F3F4F6;
    display: flex;
    flex-direction: column;
    z-index: 20;
  }
.sidebar-column { flex:1; display:flex; flex-direction:column; padding:32px 12px 16px; gap:24px;transform:scaleX(-1); }
.sidebar-header-row { display:flex; gap:10px; align-items:center; justify-content:center;  }
.header-icon { width:24px; height:40px; transform:scaleX(-1); margin-right:8px; }
.header-img { width:108px; height:30px; transform:scaleX(-1); }
.sidebar-button-row { display:flex; justify-content:flex-start; }
.sidebar-create-btn { width:240px; height:48px; border-radius:12px; margin-top:5px; flex-direction:row-reverse; background:#2563EB; display:flex; align-items:center; justify-content:center; gap:8px; border:none; cursor: pointer; }
.star-icon { width:24px; height:24px; }
.button-text { font-family:'Inter',sans-serif; font-weight:600; transform:scaleX(-1); font-size:16px; color:white; }
.sidebar-menu { display:flex; flex-direction:column; gap:24px; }
.menu-item { width:240px; height:48px; border-radius:12px; background:#F3F4F6; cursor: pointer; }
.menu-item.active { background:#E5E7EB; }
.menu-item-container { position:relative; width:100%; height:100%; display:flex; align-items:center; justify-content:flex-end; padding-right:16px; gap:8px; }
.notification-icon { position:absolute; left:16px; width:26px; height:26px; margin-left:0;transform: scaleX(-1); }
.menu-icon { width:24px; height:24px; margin-right:15px; transform:scaleX(-1); }
.menu-text, .menu-text5 { font-family:'Inter',sans-serif; font-size:16px; transform:scaleX(-1); margin-right:8px; }
.menu-text { color:#9CA3AF; }
.menu-text5 { color:black; }
.sidebar-bottom-container { margin-top:auto; display:flex; transform:scaleX(-1); flex-direction:column; gap:32px; }
.settings-row, .logout-row { display:flex; align-items:center; font-family:'Inter',sans-serif; transform:scaleX(-1); justify-content:flex-end; height:48px; padding-right:16px; gap:8px; }
.bottom-text { font-family:'Inter',sans-serif; font-size:16px; transform:scaleX(-1); color:#9CA3AF; margin-right:8px; }
.bottom-icon { width:24px; height:24px; }
.switcher-row { display:flex; align-items:center; margin-right:16px; margin-bottom:16px; justify-content:flex-end; height:52px; gap:8px; }
.theme-switcher { display:flex; width:212px; height:52px; border:2px solid #D1D5DB; border-radius:16px; overflow:hidden; }
.toggle { flex:1; display:flex; flex-direction:row-reverse; align-items:center; justify-content:center; gap:8px; cursor:pointer; }
.toggle-text1 { font-family:'Inter',sans-serif; font-size:18px; color:#111827; }
.toggle-text2 { font-family:'Inter',sans-serif; font-size:18px; color:#9CA3AF; }

.toggle-icon1,
.toggle-icon2 {
  width: 24px;
  height: 24px;
}
.settings-message {
  position: fixed; 
  top: 0; 
  left: 50%; 
  transform: translateX(-50%); 
  background-color: red; 
  color: white; 
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000; 
}
.toggle.active { background:#D1D5DB; }
@media (max-width:1200px) { .gallery-column { max-width:100%; } }
@media (max-width:954px)  { .gallery-column { max-width:100%; } }
@media (max-width:666px)  { .gallery-column { max-width:100%; } }
@media (max-width:px)     { .gallery { gap:16px; padding:16px; } }
</style>