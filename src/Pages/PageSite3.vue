<template>
  <div class="page-site3">
    <Navbar
      :breadcrumb="['Home', 'Create']"
      :icons="{
        left: Navigateleft,
        right: Navigateright,
        home: Home,
        separator: Navigateright,
        onBack: goToPageSite2
      }"
    />

    <div class="main-grid">
      <div class="canvas-panel">
        <img :src="Paintimage" class="canvas-image" />
      </div>
      <div class="sidebar-panel">
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
          <img :src="Buttondark" class="dark-button" />
        </div>

        <div class="success-container">
          <img :src="Successimage" alt="Success" class="success-image" />
          <div class="success-texts-column">
            <div class="success-text-row">
              <p class="success-title">This is a success Create!</p>
            </div>
            <div class="success-text-row">
              <p class="success-subtitle">
                Congrats! You have built the most amazing art in the world!
              </p>
            </div>
          </div>
          <div class="success-buttons">
            <button type="button" class="btn btn-primary" @click.prevent="handleDownload">
              <img :src="Downarrow" alt="Download icon" class="btn-icon" />
              Download
            </button>

            <button type="button" class="btn btn-secondary" @click.prevent="goToCreatePost">
              <img :src="Plusimage" alt="Create post icon" class="btn-icon" />
              Create post
            </button>
          </div>
          <div class="success-divider"></div>
          <div class="social-row">
            <img
              v-for="social in socialMedia"
              :key="social.id"
              :src="social.src"
              :alt="social.alt"
              class="social-icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Common/AppNavbar.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navigateleft from '@/assets/Navigate-left.svg'
import Navigateright from '@/assets/Navigation-right.svg'
import Home from '@/assets/Home.svg'
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

const activeTab = ref('properties')
const router = useRouter()

const socialMedia = [
  { id: 'instagram', src: Insta, alt: 'Instagram' },
  { id: 'twitter', src: Twitter, alt: 'Twitter' },
  { id: 'discord', src: Discord, alt: 'Discord' },
  { id: 'dribbble', src: Dribbble, alt: 'Dribbble' },
  { id: 'linkedin', src: Linkedln, alt: 'LinkedIn' }
]

function goToPageSite2() {
  router.push('/pages/PageSite2/123')
}

function handleDownload() {
  router.push('/pages/PageSite4')
}

function goToCreatePost() {
  console.log('Navigating to Create Post page: /pages/PageSitePost')
  router.push('/pages/PageSitePost')
}
</script>

<style scoped>
.page-site3 {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 100vh;
  background-color: #111827;
  font-family: 'Inter', sans-serif;
}

.main-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 1.5rem 2rem 0;
  align-items: stretch;
}

.canvas-panel {
  display: flex;
  align-items: center;
  min-height: 0;
}

.canvas-image {
  width: 100%;
  height: 100vh;
  max-height: calc(100vh - 100px);
  max-width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1.2;
  border-radius: 1.25rem;
  border: 0.625rem solid #374151;
}

.sidebar-panel {
  display: flex;
  height: 100vh;
  flex-direction: column;
  max-height: calc(100vh - 120px);
  justify-content: space-between;
}

.properties-info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.properties-info-switch {
  display: flex;
  background: #111827;
  border: 2px solid #374151;
  border-radius: 1rem;
  overflow: hidden;
}

.switch-tab {
  padding: 0 1rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  color: #9ca3af;
  cursor: pointer;
}

.switch-tab.active {
  background: #252a41;
  color: #ffffff;
}

.dark-button {
  width: 3rem;
  height: 3rem;
}

.success-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  width: 100%;
  gap: 7rem;
}

.success-image {
  width: 3.375rem;
  height: auto;
}

.success-texts-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: -1.375rem;
}

.success-title {
  font-size: 1.25rem;
  color: #22c55e;
  margin: 0;
}

.success-subtitle {
  font-size: 0.625rem;
  color: #d1d5db;
  margin: 0;
}

.success-buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 60rem;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 52px;
  min-height: 52px;
  border: none;
  border-radius: 0.75rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  padding: 0 1rem;
}

.btn-primary {
  background: linear-gradient(90deg, #2563eb, #1d4ed8);
}

.btn-secondary {
  background: #252a41;
}

.btn-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}

.success-divider {
  width: 100%;
  max-width: 60rem;
  border-top: 1px solid #374151;
  align-self: center;
}

.social-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: 60rem;
  flex-wrap: nowrap;
  margin-top: auto;
}

.social-icon {
  width: 2.5rem;
  height: auto;
}

@media (max-width: 640px) {
  .btn {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    height: 52px;
  }
  .success-buttons {
    gap: 0.75rem;
  }
  .success-title {
    font-size: 1.125rem;
  }
  .success-subtitle {
    font-size: 0.75rem;
  }
}

@media (min-width: 768px) {
  .main-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>