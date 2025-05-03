<template>
    <div class="PageSite16">
      <div class="nav-icons">
        <div class="nav-group">
          <img :src="LeftArrow" class="nav-icon "  />
          <img :src="NavigateRight" class="nav-icon cursor-pointer"
          alt="Back" @click="goBack" />

        </div>
        <div class="home-icon-container">
          <img :src="Home" class="home-icon" />
          <span class="home-text">الصفحة الرئيسية</span>
          <img :src="NavigateRight" class="small-nav-icon" />
          <img :src="Star4" class="star-icon" />
          <span class="create-text">إنشاء</span>
          <img :src="NavigateRight" class="create-nav-icon" />
          <img :src="Add" class="add-icon" />
          <span class="post-text">مشاركة</span>
        </div>
      </div>
      <div class="paint-image-container">
        <img :src="PaintImage" class="paint-image" />
      </div>
      <div class="header-row">
        <span class="header-text">إنشاء مشاركة</span>
        <img :src="DarkButton2" class="dark-button" />
      </div>
      <div class="form-container">
        <div class="title-group">
          <label for="title" class="input-label">العنوان</label>
          <div class="title-input-wrapper">
            <input id="title" type="text" class="title-input" readonly />
            <div class="input-text-overlay">
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
          <span class="genre-pill" style="width: 91px;">الملخص</span>
          <span class="genre-pill" style="width: 69px;">الخيال</span>
          <span class="genre-pill" style="width: 91px;">الملخص</span>
          <button class="genre-add-button">
            <img :src="Add" class="add-pill-icon" />
          </button>
        </div>
        <div class="description-group">
          <label for="description" class="description-label">الوصف</label>
          <div class="description-input-wrapper">
            <textarea id="description" class="description-input"></textarea>
            <div class="description-placeholder">تحدث عن فنك..</div>
          </div>
        </div>
      </div>
      <div class="button-row">
        <button class="button-draft">
          <img :src="Folder11" class="folder-icon" />
          <span class="text-draft">حفظ</span>
        </button>
        <button class="button-post">
          <span class="text-post">بريد</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import LeftArrow from '@/assets/LeftArrow.png'
  import NavigateRight from '@/assets/NavigateRight.png'
  import Home from '@/assets/Home2.png'
  import Star4 from '@/assets/Star4.png'
  import DarkButton2 from '@/assets/DarkButton2.png'
  import PaintImage from '@/assets/PaintImage.png'
  import Add from '@/assets/Add.png'
  import Arrow from '@/assets/Arrow.png'
  import Folder11 from '@/assets/Folder11.png'
  
  const router = useRouter()
  const goBack = () => {
  router.push('/PageSite15')
}
  </script>
  
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap');
  .PageSite16 {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: white;
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
  .create-text { font-family: 'Tajawal', sans-serif; font-size: 14px; color: #9CA3AF;transform: scaleX(-1); }
  .post-text { font-family: 'Tajawal', sans-serif; font-size: 14px; color: #ffffff;transform: scaleX(-1);  }
  .home-text { color: #9ca3af;transform: scaleX(-1); }
  .post-text { width: 31px; height: 20px; line-height: 20px;transform: scaleX(-1); color: #111827; }
  
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
  .header-text { font-family: 'Tajawal', sans-serif; font-size: 32px; color: #111827; transform: scaleX(-1);text-align: right; }
  .form-container {
    position: absolute;
    top: 192px;
    left: 828px;
    width: 636px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .title-group { display: flex; flex-direction: column; gap: 8px ; }
  .input-label { font-family: 'Tajawal', sans-serif; font-size: 14px; line-height: 20px; color: #111827;transform: scaleX(-1);text-align: right; }
  .title-input-wrapper { position: relative; width: 636px; height: 44px; }
  .title-input {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    border: 2px solid #9CA3AF;
    border-radius: 12px;
    padding: 0;
    color: transparent;
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
  .text-primary { font-family: 'Tajawal', sans-serif; font-size: 14px; line-height: 20px; color: #D1D5DB;transform: scaleX(-1); }
  .text-secondary { font-family: 'Tajawal', sans-serif;font-size: 14px; line-height: 20px; color: #6B7280;transform: scaleX(-1);}
  .tags-group { display: flex; flex-direction: column; gap: 8px; direction: rtl; }
  .tags-label { font-family: 'Tajawal', sans-serif; font-size: 14px; height: 20px; line-height: 20px; color: black;text-align: right;transform: scaleX(-1); }
  .tags-select-wrapper { position: relative; width: 636px; height: 44px; }
  .tags-select {
    appearance: none;
    width: 100%;
    height: 100%;
    background-color: white;
    border: 2px solid #9CA3AF;
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
    font-family: 'Tajawal', sans-serif;
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
    background-color: transparent;
    border: 2px solid #9CA3AF;
    border-radius: 32px;
    font-family: 'Tajawal', sans-serif;
    font-size: 14px;
    color: #6B7280;
    padding: 0 12px;
    box-sizing: border-box;
  }
  .genre-add-button {
    width: 52px;
    height: 36px;
    background-color: transparent;
    border: 2px solid #9CA3AF;
    border-radius: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    box-sizing: border-box;
  }
  .description-group { display: flex; flex-direction: column; gap: 8px; }
  .description-label { font-family: 'Tajawal', sans-serif; font-size: 14px; line-height: 20px; color: #111827;transform: scaleX(-1);text-align: right; }
  .description-input-wrapper { position: relative; width: 636px; height: 186px; }
  .description-input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 2px solid #9CA3AF;
    border-radius: 12px;
    padding: 12px;
    box-sizing: border-box;
    font-family: 'Tajawal', sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #6B7280;
    resize: none;
  }
  .description-input:focus { outline: none; box-shadow: 0 0 0 3px #2563EBCC; }
  .description-placeholder {
    position: absolute;
    top: 12px;
    left: 16px;
    font-family: 'Tajawal', sans-serif;
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
    background-color: #E5E7EB;
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
  .folder-icon { width: 24px; height: 24px; }
  .text-draft {
    width: 90px;
    height: 28px;
    font-family: 'Tajawal', sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: #111827;
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
    font-family: 'Tajawal', sans-serif;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0;
    transform: scaleX(-1);
    color: #ffffff;
    text-align: center;
  }
  </style>