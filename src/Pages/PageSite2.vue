<template>
  <div class="page-site2">
    <header class="site-header">
      <div class="nav-group">
        <img :src="Navigateleft" class="nav-icon" @click="navigateBack" />
        <img :src="Navigateright" class="nav-icon" />
      </div>
      <div class="home-group">
        <img :src="Home" class="home-icon" />
        <span class="home-text">Home</span>
        <img :src="NavigateRight" class="small-nav-icon" />
        <img :src="Staricon" class="star-icon" />
        <span class="create-text">Create</span>
      </div>
    </header>
    <main class="site-main">

      <section class="image-panel">
        <div class="blue-bg-wrapper">
          <img :src="Bluebackground" class="blue-background" />
          <img :src="Midimg" class="mid-img" />
        </div>
      </section>
      <section class="controls-panel">
        <div class="properties-info-row">
          <div class="properties-info-switch">
            <div
              class="switch-tab"
              :class="{ active: activeTab === 'properties' }"
              @click="activeTab = 'properties'"
            >Properties</div>
            <div
              class="switch-tab"
              :class="{ active: activeTab === 'info' }"
              @click="activeTab = 'info'"
            >Info</div>
          </div>
          <img :src="Buttondark" class="dark-button" />
        </div>
        <div class="form-block">
          <div class="section-block">
            <label class="keyword-label">Keyword</label>
            <input
              type="text"
              v-model="keyword"
              class="text-input"
              placeholder="The Starry Night"
            />
          </div>
          <div class="section-block horizontal-fields-group">
            <div class="field-block genre-block select-with-icon">
              <label class="field-label">Genres</label>
              <select class="category-selector" v-model="selectedGenre">
                <option disabled value="">Select Genre...</option>
                <option v-for="genre in allGenres" :key="genre">{{ genre }}</option>
              </select>
              <img :src="Arrow" class="select-arrow" />
            </div>
            <div class="field-block size-block select-with-icon">
              <label class="field-label">Size</label>
              <select class="size-selector" v-model="selectedSize">
                <option disabled value="">Select Size...</option>
                <option v-for="size in allSizes" :key="size">{{ size }}</option>
              </select>
              <img :src="Arrow" class="select-arrow" />
            </div>
          </div>
          <div class="genre-tags-row">
            <span
              v-for="(pill, index) in genrePills"
              :key="pill.id"
              class="genre-pill"
              :class="[pill.sizeClass, { 'active-pill': selectedPillIndex === index } ]"
              @click="selectPill(index)"
            >
              {{ pill.label }}
            </span>
            <button class="genre-add" @click="addGenre">
              <img :src="Add" class="add-icon" />
            </button>
          </div>


          <div class="section-block colors-section">
            <label class="keyword-label">Colors</label>
            <div class="color-badges-row">
              <button class="color-clear" @click="clearColor">
                <img :src="XImg" alt="Clear" class="x-icon" />
              </button>
              <div
                v-for="badge in colorBadges"
                :key="badge.code"
                class="color-badge"
                :class="[badge.code, { 'selected-color': selectedColor === badge.code } ]"
                @click="selectedColor = badge.code"
              ></div>
              <div class="color-divider"></div>
              <button class="color-add">
                <img :src="Addimage" alt="Add" class="add-icon" />
              </button>
            </div>
          </div>
          <div class="section-block sample-block">
            <label class="keyword-label">Sample</label>
            <div class="sample-dropzone">
              <img :src="Folderimage" class="folder-image" />
              <p class="drop-text">
                <span class="text-white">Drag and Drop</span>
                <span class="text-blue">or Browse</span>
              </p>
              <p class="support-text">Support all image formats</p>
            </div>
          </div>
          <button class="create-button" @click="handleCreate">Create</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navigateleft from '@/assets/Navigate-left.svg'
import Navigateright from '@/assets/Navigation-right.svg'
import Home from '@/assets/Home.svg'
import Staricon from '@/assets/Star.svg'
import Bluebackground from '@/assets/Blue-background.webp'
import Midimg from '@/assets/Mid-img.webp'
import Buttondark from '@/assets/Button-dark.svg'
import Arrow from '@/assets/Arrow.svg'
import XImg from '@/assets/XImg.svg'
import Addimage from '@/assets/Add.svg'
import Add from '@/assets/Add.svg'
import Folderimage from '@/assets/Folder-Image.svg'
const router = useRouter()
const activeTab = ref('properties')
const keyword = ref('')
const allGenres = ref(['Abstract', 'Sci-fi', 'Fantasy'])
const selectedGenre = ref('')
const allSizes = ref(['668 x 740', '512 x 512', '1024 x 768'])
const selectedSize = ref('')
const genrePills = ref([
  { id: 'p1', label: 'Abstract', sizeClass: 'genre-pill--large' },
  { id: 'p2', label: 'Sci-fi', sizeClass: 'genre-pill--medium' },
  { id: 'p3', label: 'Fantasy', sizeClass: 'genre-pill--large' }
])
const selectedPillIndex = ref(null)
const colorBadges = ref([
  { code: 'blue' },
  { code: 'red' },
  { code: 'orange' },
  { code: 'pink' },
  { code: 'yellow' },
  { code: 'gray' }
])
const selectedColor = ref(null)
const addGenre = () => {
  if (selectedGenre.value && !allGenres.value.includes(selectedGenre.value)) {
    allGenres.value.push(selectedGenre.value)
  }
}
const selectPill = (index) => selectedPillIndex.value = index
const clearColor = () => selectedColor.value = null
const navigateBack = () => router.push('/pages/PageSite1')
const handleCreate = () => {

  router.push({ name: 'PageSite3' })
}
</script>

<style scoped>
.page-site2 {
  --color-blue: #3B82F6;
  --color-red: #EF4444;
  --color-orange: #F97316;
  --color-pink: #EC4899;
  --color-yellow: #FACC15;
  --color-gray: #6B7280;
  --color-border-selected: #FFFFFF;
  --gradient-start: #2563EB;
  --gradient-end:   #1D4ED8;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-bottom: 72px;
  background-color: #111827;
  font-family: 'Inter', sans-serif;
}

.site-header {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  gap: 2rem;
}

.nav-group,
.home-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.home-group { margin-left: auto; }
.nav-icon,
.small-nav-icon,
.home-icon,
.star-icon {
  width: 1.5rem;
  height: 1.5rem;
}
.home-text,
.create-text { font-size: 0.875rem; }
.home-text { color: #9CA3AF; }
.create-text { color: #FFFFFF; }

.site-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex: 1;
  min-height: 0;
  padding: 1.5rem 2rem 0;
  align-items: stretch;
}

.image-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
}
.blue-bg-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
  overflow: hidden;
}
.blue-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.mid-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-width: 20rem;
  aspect-ratio: 1;
}

.controls-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
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
  color: #9CA3AF;
  cursor: pointer;
}
.switch-tab.active {
  background: #252A41;
  color: #FFFFFF;
}
.dark-button {
  width: 3rem;
  height: 3rem;
}

.form-block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  overflow-y: auto;
}
.section-block {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.keyword-label,
.field-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #9CA3AF;
}
.text-input {
  height: 2.75rem;
  padding: 0 1rem;
  background: transparent;
  border: 2px solid #2563EB;
  border-radius: 0.75rem;
  color: white;
  font-size: 0.875rem;
}

.horizontal-fields-group {
  display: flex;
  gap: 1.5rem;
}
.field-block { flex: 1; }
.select-with-icon { position: relative; }
.select-arrow {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  pointer-events: none;
}
.category-selector,
.size-selector {
  width: 100%;
  height: 2.75rem;
  padding: 0 2.5rem 0 1rem;
  background: transparent;
  border: 2px solid #374151;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  color: #6B7280;
  appearance: none;
}

.genre-tags-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.genre-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111827;
  border: 2px solid #374151;
  border-radius: 2rem;
  color: #6B7280;
  font-size: 0.875rem;
  padding: 0 1rem;
  height: 2.25rem;
}
.genre-pill--large { min-width: 5.75rem; }
.genre-pill--medium { min-width: 4.25rem; }
.genre-add {
  width: 3rem;
  height: 2.25rem;
  background: transparent;
  border: 2px solid #374151;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-icon,
.x-icon { width: 1.25rem; height: 1.25rem; }
.active-pill { background: #111827; color: white; }

.colors-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.color-badges-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.color-clear {
  width: 2rem;
  height: 2rem;
  border: 1px solid #374151;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.color-badge {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.color-badge.blue   { background: var(--color-blue); }
.color-badge.red    { background: var(--color-red); }
.color-badge.orange { background: var(--color-orange); }
.color-badge.pink   { background: var(--color-pink); }
.color-badge.yellow { background: var(--color-yellow); }
.color-badge.gray   { background: var(--color-gray); }
.colors-section .color-badges-row .color-badge.selected-color {
  border: 2px solid var(--color-border-selected);
}
.color-divider { width: 1px; height: 2rem; background: #374151; }

.sample-block .sample-dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 12rem;
  background: #1C2237;
  border: 1px solid #374151;
  border-radius: 0.75rem;
}
.drop-text { display: flex; gap: 0.25rem; font-size: 0.875rem; }
.support-text { font-size: 0.625rem; color: #9CA3AF; }
.folder-image { width: 3.375rem; height: 3.375rem; }

.create-button {
  margin-top: auto;
  height: 3rem;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
.create-button:hover {
  background: linear-gradient(90deg, var(--gradient-end), var(--gradient-start));
}

@media (max-width: 1024px) {
  .site-main { grid-template-columns: 1fr; }
}
</style>
