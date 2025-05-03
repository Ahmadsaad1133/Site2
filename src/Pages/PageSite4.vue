<template>
  <div class="PageSite4">

    <div class="nav-icons">
      <div class="nav-group">
        <img :src="NavigateLeft" class="nav-icon" @click="goToPageSite3" style="cursor: pointer;" />
        <img :src="NavigateRight" class="nav-icon" />
      </div>
      <div class="home-icon-container">
        <img :src="Home" class="home-icon" />
        <span class="home-text">Home</span>
        <img :src="NavigateRight" class="small-nav-icon" />
        <img :src="Star" class="star-icon" />
        <span class="create-text">Create</span>
        <img :src="NavigateRight" class="create-nav-icon" />
        <img :src="Add" class="add-icon" />
        <span class="post-text">Post</span>
      </div>
    </div>
    <div class="paint-image-container">
      <img :src="PaintImage" class="paint-image" />
    </div>


    <div class="header-row">
      <span class="header-text">Create post</span>
      <img :src="ButtonDark" class="dark-button" />
    </div>

    <div class="form-container">

      <div class="title-group">
        <label for="title" class="input-label">Title</label>
        <div class="title-input-wrapper">
          <input
            id="title"
            type="text"
            class="title-input"
            v-model="title"
            @focus="isTitleFocused = true"
            @blur="isTitleFocused = false"
          />
          <div class="input-text-overlay" v-if="!title && !isTitleFocused">
            <span class="text-primary">The Starry Ni</span><span class="text-secondary">ght</span>
          </div>
        </div>
      </div>


      <div class="tags-group">
        <label for="tags" class="tags-label">Tags</label>
        <div class="tags-select-wrapper">
          <select id="tags" class="tags-select">

          </select>
          <div class="select-placeholder">Select tags...</div>
          <img :src="Arrow" class="select-arrow" />
        </div>
      </div>
      <div class="genres-row">
        <span class="genre-pill" style="width: 91px;" :class="{ active: selectedGenres.includes('Abstract2') }" @click="toggleGenre('Abstract2')">
          Abstract
        </span>
        <span class="genre-pill" style="width: 69px;" :class="{ active: selectedGenres.includes('Sci-fi') }" @click="toggleGenre('Sci-fi')">
          Sci-fi
        </span>
        <span class="genre-pill" style="width: 91px;" :class="{ active: selectedGenres.includes('Abstract') }" @click="toggleGenre('Abstract')">
          Abstract
        </span>

        <button class="genre-add-button">
          <img :src="Add" class="add-pill-icon" />
        </button>
      </div>

      <div class="description-group">
        <label for="description" class="description-label">Description</label>
        <div class="description-input-wrapper">
          <textarea
            id="description"
            class="description-input"
            v-model="description"
            @focus="isDescriptionFocused = true"
            @blur="isDescriptionFocused = false"
          ></textarea>
          <div class="description-placeholder" v-if="!description && !isDescriptionFocused">
            Talk about your art...
          </div>
        </div>
      </div>
    </div>

  <div class="button-row">
      <button class="button-draft" @click="saveDraft">
        <img :src="Folder2" class="folder-icon" />
        <span class="text-draft">Save draft</span>
      </button>
      <button class="button-post" @click="goToPage13">
        <span class="text-post">Post</span>
      </button>
    </div>
  </div>


  <div v-if="savedMessage" class="draft-saved-message">
    <span>Draft Saved</span>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


import NavigateLeft from '@/assets/NavigateLeft.png'
import NavigateRight from '@/assets/NavigateRight.png'
import Home from '@/assets/Home2.png'
import Star from '@/assets/Star1.png'
import ButtonDark from '@/assets/ButtonDark.png'
import PaintImage from '@/assets/PaintImage.png'
import Add from '@/assets/Add.png'
import Arrow from '@/assets/Arrow.png'
import Folder2 from '@/assets/Folder2.png'


const router = useRouter()
function goToPageSite3() {
  router.push('/pages/PageSite3')
}


const title = ref('')
const isTitleFocused = ref(false)
const description = ref('')
const isDescriptionFocused = ref(false)
const selectedGenres = ref([])


const savedMessage = ref(false)


function toggleGenre(genre) {
  if (selectedGenres.value[0] === genre) {
    selectedGenres.value = []; 
  } else {
    selectedGenres.value = [genre]; 
  }
}


function saveDraft() {

  savedMessage.value = true
  

  setTimeout(() => {
    savedMessage.value = false
  }, 3000)
}
function goToPage13() {
  router.push('/pages/PageSite13')
}

</script>

  
  <style scoped>
  .PageSite4 {
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
  .nav-group { display: flex; gap: 8px; }
  .nav-icon,
  .small-nav-icon,
  .home-icon,
  .star-icon,
  .create-nav-icon,
  .add-icon,
  .select-arrow,
  .add-pill-icon { object-fit: contain; }
  
  .nav-icon,
  .small-nav-icon,
  .home-icon,
  .star-icon { width: 24px; height: 24px; }
  .create-nav-icon { width: 16px; height: 16px; }
  .add-icon,
  .add-pill-icon { width: 20px; height: 20px; }
  .home-icon-container { display: flex; align-items: center; gap: 8px; }
  .home-text,
  .create-text,
  .post-text { font-family: 'Inter', sans-serif; font-size: 14px; color: #ffffff; }
  .home-text { color: #9ca3af; }
  .post-text { width: 31px; height: 20px; line-height: 20px; }
  
  .paint-image-container {
    position: absolute;
    top: 72px;
    left: 82px;
    z-index: 0;
  }
  .paint-image {
    width: 684px;
    height: calc(100vh - 120px);
    object-fit: cover;
    border-radius: 20px;
    border: 10px solid #374151;
    box-sizing: border-box;
  }
  
  .header-row {
    position: absolute;
    top: 72px;
    left: 828px;
    width: 636px;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 406px;
  }
  .header-text { font-family: 'Inter', sans-serif; font-size: 32px; color: #ffffff; }
  .dark-button { width: 48px; height: 48px; }

  .form-container {
    position: absolute;
    top: 192px;
    left: 828px;
    width: 636px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .title-group { display: flex; flex-direction: column; gap: 8px; }
  .input-label { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 20px; color: #ffffff; }
  .title-input-wrapper { position: relative; width: 636px; height: 44px; }
  .title-input {
    width: 100%;
    height: 100%;
    background-color: #171A2B;
    border: 2px solid #374151;
    border-radius: 12px;
    padding-left: 10px;
    color: #ffffff;
    box-sizing: border-box;
  }
  .title-input:focus { outline: none; box-shadow: 0 0 0 3px #2563EBCC; }
  .input-text-overlay {
    position: absolute;
    top: 12px;
    left: 16px;
    display: flex;
    gap: 0;
    pointer-events: none;
  }
  .text-primary { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 20px; color: #D1D5DB; }
  .text-secondary { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 20px; color: #6B7280; }

  .tags-group { display: flex; flex-direction: column; gap: 8px; }
  .tags-label { font-family: 'Inter', sans-serif; font-size: 14px; width: 33px; height: 20px; line-height: 20px; color: #ffffff; }
  .tags-select-wrapper { position: relative; width: 636px; height: 44px; }
  .tags-select {
    appearance: none;
    width: 100%;
    height: 100%;
    background-color: #111827;
    border: 2px solid #374151;
    border-radius: 12px;
    padding: 0 12px;
    box-sizing: border-box;
    color: #ffffff;
  }
  .tags-select:focus { outline: none; box-shadow: 0 0 0 3px #2563EBCC; }
  .select-placeholder {
    position: absolute;
    top: 12px;
    left: 16px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #6B7280;
    pointer-events: none;
  }
  .select-arrow { position: absolute; top: 12px; right: 12px; width: 20px; height: 20px; pointer-events: none; }
  
  .genres-row { display: flex; align-items: center; gap: 16px; width: 636px; height: 36px; margin-top: -20px; }
  .genre-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    background-color: #111827;
    border: 2px solid #374151;
    border-radius: 32px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #6B7280;
    padding: 0 12px;
    box-sizing: border-box;
  }
  .genre-pill.active {
  border: 2px solid #ffffff;
  background-color: #2563EB; 
  color: #ffffff; 
}

  .genre-pill:hover {
  cursor: pointer;
  background-color: #374151;
}
  .genre-add-button {
    width: 52px;
    height: 36px;
    background-color: #111827;
    border: 2px solid #374151;
    border-radius: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    box-sizing: border-box;
  }
  
  .description-group { display: flex; flex-direction: column; gap: 8px; }
  .description-label { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 20px; color: #ffffff; }
  .description-input-wrapper { position: relative; width: 636px; height: 186px; }
  .description-input {
    width: 100%;
    height: 100%;
    background-color: #111827;
    border: 2px solid #374151;
    border-radius: 12px;
    padding: 12px;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    resize: none;
  }
  .description-input:focus { outline: none; box-shadow: 0 0 0 3px #2563EBCC; }
  .description-placeholder {
    position: absolute;
    top: 12px;
    left: 16px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #6B7280;
    pointer-events: none;
  }
  
  .button-row {
    position: absolute;
    bottom: 48px;
    left: 828px;
    width: 636px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .button-draft {
    width: 207px;
    height: 52px;
    background-color: #252A41;
    border: none;
    border-radius: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    gap: 8px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .draft-saved-message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2563EB;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  z-index: 10; 
}

  .folder-icon { width: 24px; height: 24px; }
  .text-draft {
    width: 90px;
    height: 28px;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
  }
  .button-post {
    width: 405px;
    height: 52px;
    background-color: #2563EB;
    border: none;
    border-radius: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    gap: 8px;
    box-sizing: border-box;
  }
  .text-post {
    width: 40px;
    height: 28px;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0;
    color: #ffffff;
    text-align: center;
  }
  </style>