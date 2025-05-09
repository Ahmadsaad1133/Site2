<template>
  <header class="header">
    <div class="top-row">
      <div class="search-wrapper">
        <div class="search-widget">
          <img :src="searchIcon" alt="Search Icon" class="search-icon" />
          <input
            type="text"
            v-model="searchQuery"
            @keyup.enter="onSearch"
            placeholder="Search"
            class="search-input"
          />
        </div>
      </div>

      <div class="profile-widget">
        <div class="profile-pic">
          <img :src="props.user.avatar" alt="User" class="avatar" />
        </div>
        <div class="info-and-icons">
          <div class="user-info">
            <p class="name">{{ props.user.name }}</p>
            <p class="company">{{ props.user.company }}</p>
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
          v-for="(cat, i) in categoriesList"
          :key="cat"
          :class="['category-btn', selectedCategory === i ? 'selected' : '']"
          @click="selectCategory(i)"
        >
          {{ cat }}
        </button>

        <button class="category-btn add-btn" @click="onAdd">
          <img :src="addIcon" alt="Add" class="add-icon" />
        </button>
      </div>

      <button class="filter-btn" @click="onFilter">
        <img :src="filterIcon" alt="Filter Icon" class="filter-icon" />
        <span class="filter-text">Filter</span>
        <img :src="arrowIcon" alt="Arrow Icon" class="filter-arrow" />
      </button>
    </div>
  </header>
</template>

<script setup>
/* eslint-disable vue/no-setup-props-destructure */
/* global defineProps, defineEmits */
import { ref, computed } from 'vue'

const props = defineProps({
  user: { type: Object, required: true },
  categories: { type: Array, required: true }
})
const emit = defineEmits(['search', 'categorySelect', 'addCategory', 'filter'])
const categoriesList = computed(() => Array.from(new Set(props.categories)))

const searchIcon = require('@/assets/Search.svg')
const bellIcon   = require('@/assets/bell.svg')
const arrowIcon  = require('@/assets/Arrow.svg')
const filterIcon = require('@/assets/Filter.svg')
const addIcon    = require('@/assets/Add.svg')

const searchQuery = ref('')
function onSearch() {
  emit('search', searchQuery.value)
}

const selectedCategory = ref(0)
function selectCategory(i) {
  selectedCategory.value = i
  emit('categorySelect', categoriesList.value[i])
}

function onAdd() {
  emit('addCategory')
}

function onFilter() {
  emit('filter')
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 72px;
  background-color: #111827;
  color: white;
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 8px;
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
  flex: 1;
  outline: none;
}
.search-input::placeholder {
  color: white;
  opacity: 1;
}

.profile-widget {
  display: flex;
  align-items: center;
  gap: 16px;
}

.profile-pic .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.info-and-icons {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-info .name {
  font-weight: bold;
  font-size: 14px;
  margin: 0;
}
.user-info .company {
  opacity: 0.7;
  font-size: 14px;
  margin: 0;
}

.icons-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.arrow-container .arrow-icon {
  width: 16px;
  height: 16px;
}

.bell-container {
  padding: 12px;
  border: 2px solid #374151;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: #6b7280;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  transition: background-color 0.2s, color 0.2s;
}

.category-btn.selected {
  background-color: #252A41;
  color: white;
}

.add-btn {
  padding: 0;
  width: 52px;
  height: 36px;
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
}

.filter-icon {
  width: 20px;
  height: 20px;
}

.filter-text {
  font-size: 14px;
  margin-left: 8px;
}

.filter-arrow {
  width: 20px;
  height: 20px;
}
</style>
