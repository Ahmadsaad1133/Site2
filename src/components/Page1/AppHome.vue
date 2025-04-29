<template>
  <div class="main-container">
    <div class="gallery-wrapper">
      <div class="gallery">
        <div class="gallery-column" v-for="(column, i) in columns" :key="i">
          <div class="gallery-card" v-for="(card, index) in column" :key="index">
            <img :src="card.image" class="card-image" />
            <div class="card-info">
              <div class="user">
                <div class="profile">
                  <img :src="card.avatar" class="avatar" />
                  <p class="username">{{ card.username }}</p>
                </div>
                <div class="icons">
                  <div class="icon-group">
                    <img :src="heartIcon" class="icon" />
                    <span>{{ card.likes }}</span>
                  </div>
                  <div class="icon-group">
                    <img :src="eyeIcon" class="icon" />
                    <span>{{ card.views }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- end gallery-column -->
      </div> <!-- end gallery -->
    </div> <!-- end gallery-wrapper -->
  </div> <!-- end main-container -->
</template>

<script setup>
import Card1 from '@/assets/Card1.png'
import Card2 from '@/assets/Card2.png'
import Card3 from '@/assets/Card3.png'
import Card4 from '@/assets/Card4.png'
import Card5 from '@/assets/Card5.png'
import Card6 from '@/assets/Card6.png'
import Card7 from '@/assets/Card7.png'
import Card8 from '@/assets/Card8.png'
import Card9 from '@/assets/Card9.png'
import Card10 from '@/assets/Card10.png'
import Card11 from '@/assets/Card11.png'
import heartIcon from '@/assets/Heart-Icon.png'
import eyeIcon from '@/assets/Eye-Icon.png'

const cards = [
  { image: Card1, avatar: 'https://i.pravatar.cc/30?u=1', username: 'Nicholas Turner', likes: 24, views: 42 },
  { image: Card2, avatar: 'https://i.pravatar.cc/30?u=2', username: 'Patty Stone', likes: 19, views: 31 },
  { image: Card3, avatar: 'https://i.pravatar.cc/30?u=3', username: 'Noel Wilson', likes: 17, views: 28 },
  { image: Card4, avatar: 'https://i.pravatar.cc/30?u=4', username: 'Angela Art', likes: 29, views: 55 },
  { image: Card5, avatar: 'https://i.pravatar.cc/30?u=5', username: 'John Doe', likes: 35, views: 60 },
  { image: Card6, avatar: 'https://i.pravatar.cc/30?u=6', username: 'Alice Smith', likes: 40, views: 72 },
  { image: Card7, avatar: 'https://i.pravatar.cc/30?u=7', username: 'James Brown', likes: 28, views: 50 },
  { image: Card8, avatar: 'https://i.pravatar.cc/30?u=8', username: 'Maria Garcia', likes: 21, views: 48 },
  { image: Card9, avatar: 'https://i.pravatar.cc/30?u=9', username: 'Marlos Garcia', likes: 51, views: 45 },
  { image: Card10, avatar: 'https://i.pravatar.cc/30?u=10', username: 'Carla Moon', likes: 33, views: 47 },
  { image: Card11, avatar: 'https://i.pravatar.cc/30?u=11', username: 'David Sky', likes: 37, views: 53 }
]

// Initialize columns
const columns = [[], [], [], []]

cards.forEach((card, index) => {
  if (index === 8) {
    columns[1].push(card) // Card9 → column 2
  } else if (index === 9) {
    columns[2].push(card) // Card10 → column 3
  } else if (index === 10) {
    columns[3].push(card) // Card11 → column 4
  } else {
    const colIndex = index % 4
    columns[colIndex].push(card)
  }
})
</script>

<style scoped>
.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #111827;
  box-sizing: border-box;
}

.gallery {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding: 20px 72px;
  background-color: transparent;
  margin-bottom: 20px;
}

.gallery-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  max-width: 25%;
}

.gallery-card {
  background-color: transparent;
  border-radius: 16px;
  overflow: hidden;
  color: white;
}

.card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card-info {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.profile {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: -12px;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.username {
  font-size: 14px;
  margin: 0;
}

.icons {
  display: flex;
  gap: 12px;
  align-items: center;
  color: #e5e7eb;
}

.icon-group {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
}

.icon {
  width: 16px;
  height: 16px;
}

@media (max-width: 1024px) {
  .gallery {
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .gallery-column {
    max-width: 50%;
  }
}

@media (max-width: 480px) {
  .gallery-column {
    max-width: 100%;
  }
}
</style>
