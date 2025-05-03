<template>
  <header class="header">
    <div class="top-row">
      <div class="search-wrapper">
  <div class="search-widget">
    <img :src="searchIcon" alt="Search Icon" class="search-icon" />
    <input type="text" placeholder="Search" class="search-input" />
  </div>
</div>
      <div class="profile-widget">
        <div class="profile-pic">
          <img src="https://i.pravatar.cc/40" alt="User" class="avatar" />
        </div>

 
        <div class="info-and-icons">
          <div class="user-info">
            <p class="name">Nicholas Turner</p>
            <p class="company">SaaS Blocks LLC</p>
          </div>

          <div class="icons-group">

            <div class="arrow-container">
              <img :src="arrowIcon" alt="Arrow" class="arrow-icon" />
            </div>


            <div class="bell-container">
              <img :src="bellIcon" alt="Bell Icon" class="bell-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="custom-divider-line"></div>
    

    <div class="bottom-row">
      <div class="categories">
        <button
          v-for="(cat, index) in categories"
          :key="index"
          :class="['category-btn', selectedCategory === index ? 'selected' : '']"
          :style="{ width: buttonWidths[index], height: '36px' }"
          @click="selectCategory(index)"
        >
          {{ cat }}
        </button>

        <button class="category-btn add-btn" @click="onAdd">
          <img :src="addIcon" alt="Add" class="add-icon" />
        </button>
      </div>

<button class="filter-btn">
  <img :src="filterIcon" alt="Filter Icon" class="filter-icon" />
  <span class="filter-text">Filter</span>
  <img :src="arrowIcon" alt="Arrow Icon" class="filter-arrow" />
</button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const filterIcon = require('@/assets/Filter.png')


const categories = ['Discovery', 'Abstract', 'Sci-fi', 'Abstract']
const selectedCategory = ref(0)

const buttonWidths = ['100px', '91px', '69px', '91px']

const selectCategory = (index) => {
  selectedCategory.value = index
}

const onAdd = () => {
  console.log('Add category clicked')
}

const addIcon = require('@/assets/Add.png')
const arrowIcon = require('@/assets/Arrow.png')
const bellIcon = require('@/assets/bell.png')
const searchIcon = require('@/assets/Search.png')
</script>

<style scoped>

.view-count, .like-count {
  color: #9CA3AF;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 24px;
  padding-left: 72px;
  padding-right: 72px;
  background-color: #111827; 
  color: white;
}


.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  position: relative; 
  padding-bottom: 8px; 
}

.custom-divider-line {
  height: 1px;
  background-color: rgba(55, 65, 81, 1);
  margin: 16px 0;
}

.search-wrapper {
  background-color: #111827;
  border-radius: 12px;
  width: 260px;
  height: 44px;
  border: 2px solid #6b7280;
  display: flex;
  align-items: center;
  padding: 0 12px;
}
.search-input::placeholder {
  color: white;
  opacity: 1;
}

.search-widget {
  display: flex;
  align-items: center;
  gap: 9px; 
  width: 100%;
}

.search-icon {
  width: 20px;
  height: 20px;
}

.search-input {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 14px;
  line-height: 20px;
  padding-top: 2px; 
  flex: 1;
  outline: none;
}


.profile-widget {
  display: flex;
  align-items: center;
  gap: 16px;
}

.profile-pic {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.info-and-icons {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-info {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
}

.name {
  font-weight: bold;
  margin: 0;
  font-size: 14px;
}

.company {
  opacity: 0.7;
  margin: 0;
  font-size: 14px;
}


.icons-group {
  display: flex;
  align-items: center;
  gap: 8px;
}


.arrow-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow-icon {
  width: 16px;
  height: 16px;
}


.bell-container {
  padding: 12px;
  border: 2px solid #374151;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bell-icon {
  width: 24px;
  height: 24px;
}


.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.categories {
  display: flex;
  gap: 16px;
}

.category-btn {
  background-color: #111827;
  border: 2px solid #6b7280;
  border-radius: 32px;
  color: #6B7280;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.selected {
  background-color: #252A41;
  color: white;
}

.add-btn {
  width: 52px;
  height: 36px;
  padding: 0;
  justify-content: center;
  align-items: center;
}

.add-icon {
  width: 20px;
  height: 20px;
}

.filter-btn {
  width: 260px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #111827; 
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 0 12px;
  cursor: pointer;
  color: white;
  font-family: 'Inter', sans-serif;
}


.filter-icon {
  width: 20px;
  height: 20px;
}

.filter-text {
  width: 34px;
  height: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
}

.filter-arrow {
  width: 20px;
  height: 20px;
  margin-left: auto;
}


</style>