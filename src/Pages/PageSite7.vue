<template>
    <div class="page-site7">
      <div class="nav-icons">
        <div class="nav-group">
          <img :src="Navigateleft" class="nav-icon"
          @click="goToPageSite6" style="cursor: pointer;" />
          <img :src="Navigateright" class="nav-icon" />
        </div>
        <div class="home-icon-container">
          <img :src="Home" class="home-icon" />
          <span class="home-text">الصفحة الرئيسية</span>
          <img :src="Navigateright" class="small-nav-icon" />
          <img :src="Staricon" class="star-icon" />
          <span class="create-text">إنشاء</span>
        </div>
      </div>
      <div class="Paint-Image-container">
        <img :src="Paintimage" class="Paint-Image" />
      </div>
      <div class="properties-info-row">
        <div class="properties-info-switch">
          <div
            class="switch-tab"
            :class="{ active: activeTab === 'properties' }"
            @click="activeTab = 'properties'"
          >
          خصائص
          </div>
          <div
            class="switch-tab"
            :class="{ active: activeTab === 'info' }"
            @click="activeTab = 'info'"
          >
          المعلومات
          </div>
        </div>
        <img :src="Buttondark" class="dark-button" />
      </div>

      <div class="success-container">
        <img :src="Successimage" alt="Success" class="success-image" />
        <div class="success-texts-column">
          <div class="success-text-row">
            <p class="success-title">هذا نجاح إنشاء</p>
          </div>
          <div class="success-text-row">
            <p class="success-subtitle">مبروك! لقد قمت ببناء الفن الأكثر روعة في العالم!</p>
          </div>
        </div>
        <div class="success-buttons">
          <button class="btn-primary" @click.prevent="handleDownload">
            <img :src="Downarrow" alt="Download icon" class="btn-icon" />
            تحميل
          </button>
          <button class="btn-secondary"  @click.prevent="goToCreatePost">
            <img :src="Plusimage" alt="Create post icon" class="btn-icon" />
            إنشاء منشور
          </button>
        </div>
        <div class="success-divider"></div>
        <div class="social-row">
          <img :src="Insta" alt="Instagram" />
          <img :src="Twitter" alt="Twitter" />
          <img :src="Discord" alt="Discord" />
          <img :src="Dribbble" alt="Dribbble" />
          <img :src="Linkedln" alt="LinkedIn" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import Navigateleft from '@/assets/Navigate-left.svg'
  import Navigateright from '@/assets/Navigation-right.svg'
  import Home from '@/assets/Home.svg'
  import Staricon from '@/assets/Star.svg'
  import Buttondark from '@/assets/Button-dark.svg'
  import Paintimage from '@/assets/Paint-image.png'
  import Successimage from '@/assets/Success-image.png'
  import Downarrow from '@/assets/Down-arrow.svg'
  import Plusimage from '@/assets/Plus-image.svg'
  import Insta from '@/assets/Insta.svg'
  import Twitter from '@/assets/Twitter.svg'
  import Discord from '@/assets/Discord.svg'
  import Dribbble from '@/assets/Dribbble.svg'
  import Linkedln from '@/assets/Linkedln.svg'
  
  function handleDownload() {
  alert('Download done')
}
  const activeTab = ref('properties')
  const router = useRouter()
  function goToCreatePost() {
  console.log('Creating post, going to /pages/PageSitePost8')
  router.push('/pages/PageSite8')
}
function goToPageSite6() {
  router.push('/pages/PageSite6')
}
  </script>
  
  <style scoped>
  .page-site7 {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #111827;
    overflow: hidden;
    padding: 0;
    transform: scaleX(-1);
    box-sizing: border-box;
  }
  .nav-icons {
    position: absolute;
    top: 24px;
    left: 82px;
    display: flex;
    gap: 31px;
    align-items: center;
  }
  .nav-group { display: flex; gap: 8px; }
  .nav-icon,
  .small-nav-icon,
  .home-icon,
  .star-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
  .home-icon-container { display: flex; align-items: center; gap: 8px; }
  .home-text,
  .create-text { font-family: 'Inter', sans-serif; font-size: 14px; transform: scaleX(-1); }
  .home-text { color: #9ca3af; }
  .create-text { color: #ffffff; }
  .Paint-Image-container {
    position: absolute;
    top: 72px;
    left: 82px;
    z-index: 0;
  }
  .Paint-Image {
    width: 684px;
    height: calc(100vh - 120px);
    object-fit: cover;
    border-radius: 20px;
    border: 10px solid #374151;
    box-sizing: border-box;
  }

  .properties-info-row {
    position: absolute;
    top: 72px;
    left: 828px;
    width: 636px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .properties-info-switch {
    display: flex;
    background: #111827;
    border: 2px solid #374151;
    border-radius: 16px;
    overflow: hidden;
  }
  .switch-tab {
    padding: 0 16px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9ca3af;
    transform: scaleX(-1);
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    cursor: pointer;
  }
  .switch-tab.active {
    background: #252a41;
    color: #ffffff;
  }
  .dark-button { width: 48px; height: 48px; }
  .success-container {
    position: absolute;
    top: 320px;
    left: 945px;
    width: 403px;
    height: 359px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  .success-image { width: 54px; height: 54px;transform: scaleX(-1); }
  .success-texts-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: -22px;
  }
  .success-text-row {
    width: 100%;
    display: flex;
    transform: scaleX(-1);
    justify-content: center;
  }
  .success-title {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    padding-top: 6px;
    color: #22C55E;
    margin: 0;
  }
  .success-subtitle {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    color: #D1D5DB;
    margin: 0;
  }
  .success-buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    margin-top: -2px;
    padding: 0 24px;
  }
  .btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    background: linear-gradient(90deg, #2563eb, #1d4ed8);
    border: none;
    border-radius: 12px;
    color: white;
    transform: scaleX(-1);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    gap: 8px;
    flex-direction: row-reverse;
    font-weight: 600;
    cursor: pointer;
  }
  .btn-icon {
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-right: 8px;
  }
  .btn-secondary {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    background: #252A41;
    border: none;
    transform: scaleX(-1);
    gap: 8px;
    flex-direction: row-reverse;
    border-radius: 12px;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .success-divider {
    width: 403px;
    border-top: 1px solid #374151;
    box-sizing: border-box;
  }
  .social-row {
    display: flex;
    justify-content: center;
    gap: 16px;
    transform: scaleX(-1);
    width: 100%;
  }
  .social-row img {
    width: 40px;
    height: 40px;
  }
  </style>
  