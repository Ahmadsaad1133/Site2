<template>
    <div class="PageSite15">
      <div class="nav-icons">
        <div class="nav-group">
          <img :src="LeftArrow" class="nav-icon" />
          <img :src="NavigateRight" class="nav-icon" />
        </div>
        <div class="home-icon-container">
          <img :src="Home" class="home-icon" />
          <span class="home-text">الصفحة الرئيسية</span>
          <img :src="NavigateRight" class="small-nav-icon" />
          <img :src="Star3" class="star-icon" />
          <span class="create-text">إنشاء</span>
        </div>
      </div>
      <div class="Paint-Image-container">
        <img :src="PaintImage" class="Paint-Image" />
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
        <img :src="DarkButton2" class="dark-button" />
      </div>

      <div class="success-container">
        <img :src="SuccessLogo" alt="Success" class="success-image" />
        <div class="success-texts-column">
          <div class="success-text-row">
            <p class="success-title">هذا نجاح إنشاء</p>
          </div>
          <div class="success-text-row">
            <p class="success-subtitle">مبروك! لقد قمت ببناء الفن الأكثر روعة في العالم!</p>
          </div>
        </div>
        <div class="success-buttons">
          <button class="btn-primary">
            <img :src="DownArrow" alt="Download icon" class="btn-icon" />
            تحميل
          </button>
          <button class="btn-secondary">
            <img :src="PlusImage" alt="Create post icon" class="btn-icon" />
            إنشاء منشور
          </button>
        </div>
        <div class="success-divider"></div>
        <div class="social-row">
          <img :src="Insta2" alt="Instagram" />
          <img :src="Twitter2" alt="Twitter" />
          <img :src="Discord2" alt="Discord" />
          <img :src="Dribbble2" alt="Dribbble" />
          <img :src="Linkedln2" alt="LinkedIn" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import LeftArrow from '@/assets/LeftArrow.png'
  import NavigateRight from '@/assets/NavigateRight.png'
  import Home from '@/assets/Home2.png'
  import Star3 from '@/assets/Star3.png'
  import DarkButton2 from '@/assets/DarkButton2.png'
  import PaintImage from '@/assets/PaintImage.png'
  import SuccessLogo from '@/assets/SuccessLogo.png'
  import DownArrow from '@/assets/DownArrow.png'
  import PlusImage from '@/assets/PlusImage.png'
  import Insta2 from '@/assets/Insta2.png'
  import Twitter2 from '@/assets/Twitter2.png'
  import Discord2 from '@/assets/Discord2.png'
  import Dribbble2 from '@/assets/Dribbble2.png'
  import Linkedln2 from '@/assets/LinkedIn2.png'
  
  const activeTab = ref('properties')
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap');
  .PageSite15 {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: white;
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
  .create-text { font-family: 'Tajawal', sans-serif; font-size: 14px; transform: scaleX(-1); }
  .home-text { color: #9ca3af; }
  .create-text { color: #111827; }
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
    background: transparent;
    border: 2px solid #D1D5DB;
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
    font-family: 'Tajawal', sans-serif;
    font-size: 18px;
    cursor: pointer;
  }
  .switch-tab.active {
    background: #E5E7EB;
    color: #111827;
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
    font-family: 'Tajawal', sans-serif;
    font-size: 20px;
    padding-top: 6px;
    color: #F59E0B;
    margin: 0;
  }
  .success-subtitle {
    font-family: 'Tajawal', sans-serif;
    font-size: 10px;
    color: #6B7280;
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
    background: #2563EB;
    border: none;
    border-radius: 12px;
    color: white;
    transform: scaleX(-1);
    font-family: 'Tajawal', sans-serif;
    font-size: 18px;
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
    background: #E5E7EB;
    border: none;
    transform: scaleX(-1);
    gap: 8px;
    flex-direction: row-reverse;
    border-radius: 12px;
    color: #111827;
    font-family: 'Tajawal', sans-serif;
    font-size: 18px;
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
    gap: 24px;
    transform: scaleX(-1);
    width: 100%;
  }
  .social-row img {
    width: 40px;
    height: 40px;
  }
  </style>
  