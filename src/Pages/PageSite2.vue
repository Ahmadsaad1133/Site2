<template>
  <div class="PageSite2">
    <div class="nav-icons">
      <div class="nav-group">
        <img :src="NavigateLeft" class="nav-icon" @click="navigateBack" />
        <img :src="NavigateRight" class="nav-icon" />
      </div>
      <div class="home-icon-container">
        <img :src="Home" class="home-icon" />
        <span class="home-text">Home</span>
        <img :src="NavigateRight" class="small-nav-icon" />
        <img :src="Star" class="star-icon" />
        <span class="create-text">Create</span>
      </div>
    </div>


    <div class="blue-background-container">
      <img :src="BlueBackground" class="blue-background" />
      <img :src="MidImg" class="mid-img" />
    </div>

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
      <img :src="ButtonDark" class="dark-button" />
    </div>

    <div class="keyword-text-input-container">
      <div class="inner-container">
        <div class="section-block">
          <label class="keyword-label">Keyword</label>
          <div class="text-input-container">
            <input
              type="text"
              class="text-input"
              placeholder="The Starry Night"
            />
          </div>
        </div>
        <div class="section-block">
          <div class="horizontal-labels">
            <label class="genre-label">Genres</label>
            <label class="size-label">Size</label>
          </div>
          <div class="horizontal-fields">
            <div class="field-block genre-block select-with-icon">
              <select class="category-selector" v-model="selectedGenre">
                <option disabled value="">Select Genre...</option>
                <option>Abstract</option>
                <option>Sci-fi</option>
                <option>Fantasy</option>
              </select>
              <img :src="Arrow" class="select-arrow" />
            </div>
            <div class="field-block size-block select-with-icon">
              <select class="size-selector">
                <option disabled selected>668 x 740</option>
                <option>512 x 512</option>
                <option>1024 x 768</option>
              </select>
              <img :src="Arrow" class="select-arrow" />
            </div>
          </div>
          <div class="genre-tags-row">
  <span
    class="genre-pill genre-pill--large"
    :class="{
      'active-pill': selectedPillIndex === 0
    }"
    @click="selectPill(0)"
  >
    Abstract
  </span>
  <span
    class="genre-pill genre-pill--medium"
    :class="{
      'active-pill': selectedPillIndex === 1
    }"
    @click="selectPill(1)"
  >
    Sci-fi
  </span>
  <span
    class="genre-pill genre-pill--large"
    :class="{
      'active-pill': selectedPillIndex === 2
    }"
    @click="selectPill(2)"
  >
    Fantasy
  </span>

  <button class="genre-add" @click="addGenre">
    <span class="genre-add-icon">
      <img :src="Add" class="Add-Icon" />
    </span>
  </button>
</div>

        </div>
        <div class="section-block section-block--tight colors-section">
  <label class="keyword-label">Colors</label>
  <div class="color-badges-row">
    <button class="color-clear">
      <img :src="XImg" alt="Clear" class="X-Icon" />
    </button>
    
    <div 
      class="color-badge blue" 
      :class="{'selected-color': selectedColor === 'blue'}" 
      @click="selectedColor = 'blue'"
    ></div>
    <div 
      class="color-badge red" 
      :class="{'selected-color': selectedColor === 'red'}" 
      @click="selectedColor = 'red'"
    ></div>
    <div 
      class="color-badge orange" 
      :class="{'selected-color': selectedColor === 'orange'}" 
      @click="selectedColor = 'orange'"
    ></div>
    <div 
      class="color-badge pink" 
      :class="{'selected-color': selectedColor === 'pink'}" 
      @click="selectedColor = 'pink'"
    ></div>
    <div 
      class="color-badge yellow" 
      :class="{'selected-color': selectedColor === 'yellow'}" 
      @click="selectedColor = 'yellow'"
    ></div>
    <div 
      class="color-badge gray" 
      :class="{'selected-color': selectedColor === 'gray'}" 
      @click="selectedColor = 'gray'"
    ></div>
    
    <div class="color-divider"></div>
    <button class="color-add">
      <img :src="AddImage" alt="Add" class="Add-Icon" />
    </button>
  </div>
</div>

<div class="section-block sample-block">
  <label class="keyword-label">Sample</label>
  <div class="sample-dropzone">
    <div class="dropzone-content">
      <img :src="FolderImage" class="folder-image" />
      <p class="line1">
        <span class="text-white">Drag and </span>
        <span class="text-white">Drop</span>
        <span class="text-white">or</span>
        <span class="text-blue">Browse</span>
      </p>
      <p class="line2">Support all image format</p>
    </div>
  </div>
</div>
<button class="create-button" @click="handleCreate">Create</button>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import NavigateLeft from '@/assets/NavigateLeft.png'
import NavigateRight from '@/assets/NavigateRight.png'
import Home from '@/assets/Home2.png'
import Star from '@/assets/Star1.png'
import BlueBackground from '@/assets/BlueBackground.png'
import MidImg from '@/assets/MidImg.png'
import ButtonDark from '@/assets/ButtonDark.png'
import Arrow from '@/assets/Arrow.png'
import XImg from '@/assets/XImg.png'
import AddImage from '@/assets/AddImage.png'
import Add from '@/assets/Add.png'
import FolderImage from '@/assets/FolderImage.png'

const router = useRouter()
const activeTab = ref('properties')
const selectedGenre = ref('')
const genres = ref([])

const addGenre = () => {
  if (selectedGenre.value && !genres.value.includes(selectedGenre.value)) {
    genres.value.push(selectedGenre.value)
  }
}
const navigateBack = () => {
  router.push('/pages/PageSite1')
}
function handleCreate() {

  alert('Create success')


  router.push({ name: 'PageSite3' })
}
const selectedPillIndex = ref(null)

const selectPill = (index) => {
  selectedPillIndex.value = index
}
const selectedColor = ref(null);



</script>

<style scoped>
.PageSite2 {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #111827;
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

.nav-group {
  display: flex;
  gap: 8px;
}

.nav-icon,
.small-nav-icon,
.home-icon,
.star-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.home-icon-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.home-text,
.create-text {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
}

.home-text {
  color: #9ca3af;
}

.create-text {
  color: #ffffff;
}

.blue-background-container {
  position: absolute;
  top: 72px;
  left: 72px;
  z-index: 0;
}

.blue-background {
  width: 684px;
  height: calc(100vh - 120px);
  object-fit: cover;
  border-radius: 20px;
}

.mid-img {
  position: absolute;
  width: 348px;
  height: 354px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
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
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  cursor: pointer;
}

.switch-tab.active {
  background: #252a41;
  color: #ffffff;
}

.dark-button {
  width: 48px;
  height: 48px;
}

.keyword-text-input-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.inner-container {
  position: absolute;
  top: 196px;
  bottom: 48px;
  left: 828px;
  width: 636px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  pointer-events: auto;
}

.section-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-block--tight {
  gap: 4px;
}

.keyword-label {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #9ca3af;
  margin: 0;
}

.text-input-container {
  display: flex;
  justify-content: flex-end;
  position: relative;
}

.text-input {
  width: 100%;
  height: 44px;
  padding: 0 16px;
  background: transparent;
  border: 2px solid #2563eb;
  border-radius: 12px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
}

.text-input:focus {
  border-width: 3px;
}

.select-with-icon {
  position: relative;
}

.select-arrow {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  pointer-events: none;
}

.category-selector {
  width: 459px;
  height: 44px;
  padding
: 0 40px 0 16px;
  background: transparent;
  border: 2px solid #374151;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #6B7280;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.size-selector {
  width: 153px;
  height: 44px;
  padding: 0 40px 0 16px;
  background: transparent;
  border: 2px solid #374151;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #6B7280;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.category-selector option,
.size-selector option {
  color: #6B7280;
}

.horizontal-labels {
  display: flex;
  gap: 24px;
}

.genre-label {
  font-family: 'Inter', sans-serif;
  color: white;
  width: 459px;
  font-size: 14px;
}

.size-label {
  font-family: 'Inter', sans-serif;
  width: 153px;
  color: white;
  font-size: 14px;
  text-align: left;
}

.horizontal-fields {
  display: flex;
  gap: 24px;
}

.genre-tags-row {
  display: flex;
  gap: 16px;
  align-items: center;
  width: 459px;
  height: 36px;
}

.genre-pill {
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  background: #111827;
  border: 2px solid #374151;
  border-radius: 32px;
  color: #6B7280;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  padding: 0;
}

.genre-pill--large {
  width: 91px;
  height: 36px;
}

.genre-pill--medium {
  width: 69px;
  height: 36px;
}

.genre-add {
  position: relative; 
  width: 52px;
  height: 36px;
  margin-top: 15px;
  background: transparent;
  border: 2px solid #374151;
  border-radius: 32px;
  padding: 0;
}

.genre-add-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
}

.genre-add-icon .Add-Icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.active-pill {
  background-color: #111827; 
  color: white;  
}




.color-badges-row {
display: flex;
gap: 16px;
align-items: center;
width: 384px;
height: 60px;
}

.X-Icon {
width: 32px;
height: 32px;
}

.colors-section {
  row-gap: 0px;
}
.section-block--tight .keyword-label{
  color: white;
  margin-top: 20px;
}
.color-clear {
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 50%;
  background: transparent;        
  border: 1px solid #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.color-clear .X-Icon {
  width: 32px;
  height: 32px;
  display: block;
}

.color-add {
width: 32px;
height: 32px;
border-radius: 50%;
background: #252A41;       
border: 1px solid #374151;
display: flex;
align-items: center;
justify-content: center;
line-height: 30px;
padding: 0;
color: white;
}
.color-add .Add-Icon {
  width: 24px;
  height: 24px;
}


.color-badge {
width: 32px;
height: 32px;
border-radius: 50%;
}

.color-badge.blue {
background: #3B82F6;
}

.color-badge.red {
background: #EF4444;
}

.color-badge.orange {
background: #F97316;
}

.color-badge.pink {
background: #EC4899;
}

.color-badge.yellow {
background: #FACC15;
}

.color-badge.gray {
background: #6B7280;
}
.selected-color {
  border: 2px solid white !important;
}

.color-divider {
width: 1px;
height: 33px;
background: #374151;
}


.sample-dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  width: 636px;
  height: 204px;
  background: #1C2237;
  border: 1px solid #374151;
  border-radius: 12px;
}

.folder-image {
  width: 54px;
  height: 54px;
  margin-bottom: 10px;
}

.dropzone-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;    
  gap: 0px;                
  text-align: center;     
  height: 100%;           
  width: 100%;
}
.dropzone-content .line1 {
  display: flex;
  gap: 4px;                
  margin: 0;               
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 20px;
}
.dropzone-content .line2 {
  margin: 0;              
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  line-height: 20px;
  color: #9CA3AF;
}
.dropzone-content .text-white { color: #FFFFFF; }
.dropzone-content .text-blue  { color: #2563EB; }
.sample-block .keyword-label {
  margin-top: 16px;
  color: white;
}


.create-button {
margin-top: auto;
height: 48px;
background: linear-gradient(90deg, #2563eb, #1d4ed8);
color: white;
border: none;
border-radius: 12px;
font-family: 'Inter', sans-serif;
font-size: 16px;
font-weight: 600;
cursor: pointer;
}

.create-button:hover {
background: linear-gradient(90deg, #1d4ed8, #2563eb);
}
</style>