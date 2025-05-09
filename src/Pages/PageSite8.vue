<template>
    <div class="page-site8">
      <div class="nav-icons">
        <div class="nav-group">
          <img :src="Navigateleft" class="nav-icon"  @click="goToPageSite7" style="cursor: pointer;"/>
          <img :src="Navigateright" class="nav-icon" />
        </div>
        <div class="home-icon-container">
          <img :src="Home" class="home-icon" />
          <span class="home-text">الصفحة الرئيسية</span>
          <img :src="Navigateright" class="small-nav-icon" />
          <img :src="Staricon" class="star-icon" />
          <span class="create-text">إنشاء</span>
          <img :src="Navigateright" class="create-nav-icon" />
          <img :src="Add" class="add-icon" />
          <span class="post-text">مشاركة</span>
        </div>
      </div>
      <div class="paint-image-container">
        <img :src="Paintimage" class="paint-image" />
      </div>
      <div class="header-row">
        <span class="header-text">إنشاء مشاركة</span>
        <img :src="Buttondark" class="dark-button" />
      </div>
      <div class="form-container">
        <div class="title-group">
          <label for="title" class="input-label">العنوان</label>
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
              <span class="text-primary">الليالي المرصعة </span><span class="text-secondary">بالنجوم </span>
            </div>
          </div>
        </div>
        <div class="tags-group">
          <label for="tags" class="tags-label">العلامات</label>
          <div class="tags-select-wrapper">
            <select id="tags" class="tags-select">
            </select>
            <div class="select-placeholder">حدد العلامات...</div>
            <img :src="Arrow" class="select-arrow" />
          </div>
        </div>
        <div class="genres-row">
          <span class="genre-pill" style="width: 91px;" :class="{ active: selectedGenres.includes('Abstract2') }" @click="toggleGenre('Abstract2')">
            الملخص
        </span>
        <span class="genre-pill" style="width: 69px;" :class="{ active: selectedGenres.includes('Sci-fi') }" @click="toggleGenre('Sci-fi')">
          الخيال
        </span>
        <span class="genre-pill" style="width: 91px;" :class="{ active: selectedGenres.includes('Abstract') }" @click="toggleGenre('Abstract')">
          الملخص
        </span>
          <button class="genre-add-button">
            <img :src="Add" class="add-pill-icon" />
          </button>
        </div>
        <div class="description-group">         <label for="description" class="description-label">Description</label>         <div class="description-input-wrapper">           <textarea             id="description"             class="description-input"             v-model="description"             @focus="isDescriptionFocused = true"             @blur="isDescriptionFocused = false"           ></textarea>           <div class="description-placeholder" v-if="!description && !isDescriptionFocused">            تحدث عن فنك..        </div>         </div>       </div>
      </div>
      <div class="button-row">
        <button class="button-draft" @click="saveDraft">
          <img :src="Folder2" class="folder-icon" />
          <span class="text-draft">حفظ المسودة</span>
        </button>
        <button class="button-post" @click="savePost">
          <span class="text-post">بريد</span>
        </button>
      </div>
    </div>
    <div v-if="savedMessage" class="draft-saved-message">
    <span>Draft Saved</span>
  </div>
  <div v-if="savedMessage" class="Post-saved-message">
    <span>Post Done</span>
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
  import Add from '@/assets/Add.svg'
  import Arrow from '@/assets/Arrow.svg'
  import Folder2 from '@/assets/Folder.svg'
  const title = ref('')
  const savedMessage = ref(false)
  const selectedGenres = ref([])
  const description = ref('')
  const isDescriptionFocused = ref(false)
  const isTitleFocused = ref(false)
  const router = useRouter()
function goToPageSite7() {
  router.push('/pages/PageSite7')
}
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
function savePost() {

  savedMessage.value = true
  

  setTimeout(() => {
    savedMessage.value = false
  }, 3000)
}

  </script>
  
  <style scoped>
  .page-site8 {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #111827;
    padding: 0;
    transform: scaleX(-1);
    box-sizing: border-box;
    overflow-x: auto;

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
  .post-text { font-family: 'Inter', sans-serif; font-size: 14px; color: #ffffff;transform: scaleX(-1);  }
  .home-text { color: #9ca3af;transform: scaleX(-1); }
  .post-text { width: 31px; height: 20px; line-height: 20px;transform: scaleX(-1); }
  
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
  .dark-button {
  position: absolute;
  right: 0;         
  top: 0;
  width: 48px;
  height: 48px;
}
  .header-text { font-family: 'Inter', sans-serif; font-size: 32px; color: #ffffff; transform: scaleX(-1);text-align: right; }
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
  .input-label { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 20px; color: #ffffff;transform: scaleX(-1);text-align: right; }
  .title-input-wrapper { position: relative; width: 636px; height: 44px; }
  .title-input {
    width: 100%;
    height: 100%;
    background-color: #171A2B;
    border: 2px solid #374151;
    border-radius: 12px;
    transform: scaleX(-1);text-align: right;
    padding-right: 10px;
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
  .text-primary { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 20px; color: #D1D5DB;transform: scaleX(-1); }
  .text-secondary { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 20px; color: #6B7280;transform: scaleX(-1);}
  .tags-group { display: flex; flex-direction: column; gap: 8px; }
  .tags-label { font-family: 'Inter', sans-serif; font-size: 14px; width: 33px; height: 20px; line-height: 20px; color: #ffffff;text-align: right;transform: scaleX(-1); }
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
    transform: scaleX(-1);
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
    transform: scaleX(-1);
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
  .description-label { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 20px; color: #ffffff;transform: scaleX(-1);text-align: right; }
  .description-input-wrapper { position: relative; width: 636px; height: 186px; }
  .description-input {
    width: 100%;
    height: 100%;
    background-color: #111827;
    border: 2px solid #374151;
    border-radius: 12px;
    transform: scaleX(-1);text-align: right;
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
    transform: scaleX(-1);
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
    transform: scaleX(-1);
    border-radius: 12px;
    flex-direction: row-reverse;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    gap: 8px;
    box-sizing: border-box;
  }
  .button-post {
    width: 207px;
    height: 52px;
    background-color: #252A41;
    border: none;
    border-radius: 12px;
    flex-direction: row-reverse;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    gap: 8px;
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
    transform: scaleX(-1);
    color: #ffffff;
    text-align: center;
  }
  </style>