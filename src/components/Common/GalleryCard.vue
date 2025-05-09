<template>
  <div class="gallery-card">
    <img :src="card.image" alt="Card image" class="card-image" />
    <div class="card-info">
      <div class="card-header">
        <div class="profile">
          <img :src="card.avatar" alt="Avatar" class="avatar" />
          <p class="username">{{ card.username }}</p>
        </div>
        <div class="stats">
          <div class="stat">
            <img :src="heartIcon" alt="Likes" class="icon" />
            <span>{{ card.likes }}</span>
          </div>
          <div class="stat">
            <img :src="eyeIcon" alt="Views" class="icon" />
            <span>{{ card.views }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// Define the props directly with validation
defineProps({
  card: {
    type: Object,
    required: true,
    validator(value) {
      return (
        value &&
        typeof value.image === 'string' &&
        typeof value.avatar === 'string' &&
        typeof value.username === 'string' &&
        typeof value.likes === 'number' &&
        typeof value.views === 'number'
      )
    },
    message: 'The card prop must be an object with image, avatar, username, likes, and views properties.'
  },
  heartIcon: {
    type: String,
    required: true,
    validator(value) {
      return typeof value === 'string'
    },
    message: 'heartIcon must be a string representing the icon URL or path.'
  },
  eyeIcon: {
    type: String,
    required: true,
    validator(value) {
      return typeof value === 'string'
    },
    message: 'eyeIcon must be a string representing the icon URL or path.'
  }
})
</script>

<style scoped>
.gallery-card {
  background: transparent;
  border-radius: 16px;
  overflow: hidden;
  transition: transform .2s, box-shadow .2s;
}
.gallery-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,.2);
}
.card-image {
  width: 100%;
  object-fit: cover;
}
.card-info {
  padding: 12px;
  color: #e5e7eb;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.profile {
  display: flex;
  align-items: center;
  gap: 8px;
}
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.username {
  font-size: 14px;
  margin: 0;
}
.stats {
  display: flex;
  align-items: center;
  gap: 12px;
}
.stat {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
}
.icon {
  width: 16px;
  height: 16px;
}
</style>
