<template>
    <div class="PageSite6">
      <div class="nav-icons">
        <div class="nav-group">
          <img :src="NavigateLeft" class="nav-icon" />
          <img :src="NavigateRight" class="nav-icon" />
        </div>
        <div class="home-icon-container">
          <img :src="Home" class="home-icon" />
          <span class="home-text">الصفحة الرئيسية</span>
          <img :src="NavigateRight" class="small-nav-icon" />
          <img :src="Star" class="star-icon" />
          <span class="create-text">إنشاء</span>
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
            :class="{ active: activeTab === 'خصائص' }"
            @click="activeTab = 'خصائص'"
          >خصائص</div>
          <div
            class="switch-tab"
            :class="{ active: activeTab === 'المعلومات' }"
            @click="activeTab = 'المعلومات'"
          >المعلومات</div>
        </div>
        <img :src="ButtonDark" class="dark-button" />
      </div>
  
      
      <div class="keyword-text-input-container">
        <div class="inner-container">
  
          
          
<div class="section-block">
  <label class="keyword-label">الكلمة الرئيسية</label>
 
<div class="text-input-container">
  <input
    type="text"
    class="text-input flip-text input-text-right"
    placeholder="الليلة المرصعة بالنجوم"
  />
</div>

</div>

  
         
          <div class="section-block">
            <div class="horizontal-labels">
              <label class="genre-label">أنواع</label>
              <label class="size-label">حجم</label>
            </div>
            <div class="horizontal-fields">
                <div class="field-block genre-block select-with-icon">
  <select 
   class="category-selector flip-text select-text-right"
    v-model="selectedGenre">

                <option disabled value="">اختر النوع...</option>
                <option>الملخص</option>
                <option>خيال علمي</option>
                <option>خيال</option>
              </select>
                <img :src="Arrow" class="select-arrow" />
              </div>
              <div class="field-block size-block select-with-icon">
              <select class="size-selector flip-text select-text-right">
                <option>668 x 740</option>
                <option>512 x 512</option>
                <option>1024 x 768</option>
              </select>
                <img :src="Arrow" class="select-arrow" />
              </div>
            </div>
            <div class="genre-tags-row">
              <span class="genre-pill genre-pill--large">الملخص</span>
              <span class="genre-pill genre-pill--medium">خيال علمي</span>
              <span class="genre-pill genre-pill--large">خيال</span>
  <button class="genre-add" @click="addGenre">
    <span class="genre-add-icon">
      <img :src="Add" class="Add-Icon" />
    </span>
  </button>
  
  
            </div>
          </div>
  <div class="section-block section-block--tight colors-section">
    <label class="keyword-label">ألوان</label>
    <div class="color-badges-row">
  
              <button class="color-clear">
                <img :src="XImg" alt="Clear" class="X-Icon" />
              </button>
              <div class="color-badge blue"></div>
              <div class="color-badge red"></div>
              <div class="color-badge orange"></div>
              <div class="color-badge pink"></div>
              <div class="color-badge yellow"></div>
              <div class="color-badge gray"></div>
              <div class="color-divider"></div>
              <button class="color-add">
                <img :src="AddImage" alt="Add" class="Add-Icon" />
              </button>
            </div>
          </div>
  
         
  <div class="section-block sample-block">
    <label class="keyword-label">نموذج</label>
    <div class="sample-dropzone">
      <div class="dropzone-content">
        <img :src="FolderImage" class="folder-image" />
        <p class="line1">
          
          
          
          <span class="text-blue">تصفح</span>
          <span class="text-white">او</span>
          <span class="text-white">اسقط</span>
          <span class="text-white">اسحب و </span>
        </p>
        <p class="line2">يدعم جميع صيغ الصور</p>
      </div>
    </div>
  </div>
  
      
          <button class="create-button">إنشاء</button>
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
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
  
  
  const activeTab = ref('خصائص')
  const selectedGenre = ref('')
  const genres = ref([])
  
  const addGenre = () => {
    if (selectedGenre.value && !genres.value.includes(selectedGenre.value)) {
      genres.value.push(selectedGenre.value)
    }
  }
  </script>
  
  <style scoped>
  .PageSite6 {
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
    transform: scaleX(-1);
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
    transform: scaleX(-1);
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
    transform: scaleX(-1);
    color: #9ca3af;
    margin: 0;
    transform: scaleX(-1);
    text-align: right;
  }

.flip-text::placeholder {
  display: inline-block;
}


.input-text-right {                   
  text-align: right;
  padding: 0 16px;      
  transform: scaleX(-1);            
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
    transform: scaleX(-1);
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
  .flip-text option { 
  display: inline-block;
  transform: scaleX(-1);
}
.select-text-right {    
  text-align: right;
  padding: 0 16px 0 40px;
}
.select-with-icon .select-arrow {  
  transform: translateY(-50%) scaleX(-1);
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
  .flip-text {
  appearance: none;
  transform: scaleX(-1);
}
.flip-text option {
  display: inline-block;
  transform: scaleX(-1);
}
.select-text-right {
  text-align: right;
  padding: 0 16px 0 40px;
}
.select-with-icon .select-arrow {
  transform: translateY(-50%) scaleX(-1);
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
    width: 459px;
    text-align: right;
    transform: scaleX(-1);
    font-size: 14px;
  }
  
  .size-label {
    font-family: 'Inter', sans-serif;
    width: 153px;
    font-size: 14px;
    text-align: right;
    transform: scaleX(-1);
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
    transform: scaleX(-1);
    height: 36px;
  }
  
  .genre-pill--medium {
    width: 69px;
    transform: scaleX(-1);
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
    transform: scaleX(-1);
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
    transform: scaleX(-1);        
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 20px;
  }
  .dropzone-content .line2 {
    margin: 0;                
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    transform: scaleX(-1);
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
  transform: scaleX(-1);
  font-weight: 600;
  cursor: pointer;
  }
  
  .create-button:hover {
  background: linear-gradient(90deg, #1d4ed8, #2563eb);
  }
  </style>