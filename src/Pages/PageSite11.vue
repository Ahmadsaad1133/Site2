<template>
    <div class="PageSite11">
      <div class="nav-icons">
        <div class="nav-group">
          <img :src="LeftArrow" class="nav-icon" @click="goToPageSite10"  style="cursor: pointer;"/>
          <img :src="NavigateRight" class="nav-icon" />
        </div>
        <div class="home-icon-container">
          <img :src="Home" class="home-icon" />
          <span class="home-text">Home</span>
          <img :src="NavigateRight" class="small-nav-icon" />
          <img :src="Star3" class="star-icon" />
          <span class="create-text">Create</span>
        </div>
      </div>

      <div class="Paint-Image-container">
        <img :src="PaintImage2" class="Paint-Image" />
      </div>
  
      <div class="properties-info-row">
        <div class="properties-info-switch">
          <div
            class="switch-tab"
            :class="{ active: activeTab === 'properties' }"
            @click="activeTab = 'properties'"
          >
            Properties
          </div>
          <div
            class="switch-tab"
            :class="{ active: activeTab === 'info' }"
            @click="activeTab = 'info'"
          >
            Info
          </div>
        </div>
        <img :src="DarkButton2" class="dark-button" />
      </div>
  
      <div class="success-container">
        <img :src="SuccessLogo" alt="Success" class="success-image" />
        <div class="success-texts-column">
          <div class="success-text-row">
            <p class="success-title">This is a success callout!</p>
          </div>
          <div class="success-text-row">
            <p class="success-subtitle">Congrats! You have built the most amazing art in the world!</p>
          </div>
        </div>
        <div class="success-buttons">
          <button class="btn-primary" @click.prevent="handleDownload">
            <img :src="DownArrow" alt="Download icon" class="btn-icon" />
            Download
          </button>
          <button class="btn-secondary" @click.prevent="goToCreatePost">
            <img :src="BlackAdd" alt="Create post icon" class="btn-icon" />
            Create post
          </button>
        </div>
        <div class="success-divider"></div>

        <div class="social-row">
          <img :src="Insta2" alt="Instagram2" />
          <img :src="Twitter2" alt="Twitter2" />
          <img :src="Discord2" alt="Discord2" />
          <img :src="Dribbble2" alt="Dribbble2" />
          <img :src="LinkedIn2" alt="LinkedIn2" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
    import { ref } from 'vue'
  import LeftArrow from '@/assets/LeftArrow.png'
  import NavigateRight from '@/assets/NavigateRight.png'
  import Home from '@/assets/Home2.png'
  import Star3 from '@/assets/Star3.png'
  import DarkButton2 from '@/assets/DarkButton2.png'
  import PaintImage2 from '@/assets/PaintImage2.png'
  import SuccessLogo from '@/assets/SuccessLogo.png'
  import DownArrow from '@/assets/DownArrow.png'
  import BlackAdd from '@/assets/BlackAdd.png'
  import Insta2 from '@/assets/Insta2.png'
  import Twitter2 from '@/assets/Twitter2.png'
  import Discord2 from '@/assets/Discord2.png'
  import Dribbble2 from '@/assets/Dribbble2.png'
  import LinkedIn2 from '@/assets/LinkedIn2.png'

  const router = useRouter()
  const activeTab = ref('properties')
  function goToPageSite10() {
  router.push('/pages/PageSite10')
}
  function handleDownload() {
  alert('Download done')
  router.push('/pages/PageSite12')
}
function goToCreatePost() {
  alert('Post Created Bro , and ? what r u looking at , its just message')
}
  </script>
  
  <style scoped>
  .PageSite11 {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: white;
    overflow: hidden;
    padding: 0;
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
  .create-text { font-family: 'Inter', sans-serif; font-size: 14px; color: black; }
  .home-text { color: #9ca3af; }
  
  .Paint-Image-container {
    position: absolute;
    top: 72px;
    left: 82px;
    z-index: 0;
  }
  .Paint-Image {
    width: 684px;
    height: calc(100vh - 100px);
    object-fit: cover;
    border-radius: 20px;
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
    background: white;
    border: 2px solid#D1D5DB;
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
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    cursor: pointer;
  }
  .switch-tab.active {
    background: #E5E7EB;
    border-radius: 16px;
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
  .success-image { width: 54px; height: 54px; }
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
    justify-content: center;
  }
  .success-title {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    padding-top: 6px;
    color: #F59E0B;
    margin: 0;
  }
  .success-subtitle {
    font-family: 'Inter', sans-serif;
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
    background: linear-gradient(90deg, #2563eb, #1d4ed8);
    border: none;
    border-radius: 12px;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .btn-icon {
    width: 24px;
    height: 24px;

    margin-right: 8px;
  }
  .btn-secondary {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    background: #E5E7EB;
    border: none;
    border-radius: 12px;
    color: #111827;
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
    width: 100%;
  }
  .social-row img {
    width: 40px;
    height: 40px;
  }
  </style>
  