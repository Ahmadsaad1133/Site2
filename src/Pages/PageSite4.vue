<template>
  <div class="page-site4">
    <Navbar
      :breadcrumb="['Home', 'Create']"
      :icons="{
        left: Navigateleft,
        right: Navigateright,
        home: Home,
        separator: Navigateright,
        onBack: goToPageSite2
      }"
    />
    <main class="site-main">
      <section class="image-panel">
        <img :src="Paintimage" class="paint-image" />
      </section>
      <section class="form-panel">
        <div class="form-header">
          <span class="header-text">Create post</span>
          <img :src="Buttondark" class="dark-button" />
        </div>
        <div class="form-group">
          <label for="title" class="label">Title</label>
          <input
            id="title"
            v-model="title"
            type="text"
            class="text-input"
            placeholder="The Starry Night"
          />
        </div>
        <div class="form-group">
          <label for="tags" class="label">Tags</label>
          <div class="select-wrapper">
            <select id="tags" class="select">
              <option disabled selected value="">Select tags…</option>
            </select>
            <img :src="Arrow" class="select-arrow" />
          </div>
        </div>
        <div class="genres-row">
          <span
            v-for="g in genres"
            :key="g.value"
            class="genre-pill"
            :class="{ active: selectedGenres.includes(g.value) }"
            @click="toggleGenre(g.value)"
          >{{ g.label }}</span>
          <button class="pill-add" @click="addGenre">
            <img :src="Add" class="add-icon" />
          </button>
        </div>
        <div class="form-group">
          <label for="description" class="label">Description</label>
          <textarea
            id="description"
            v-model="description"
            class="textarea"
            placeholder="Talk about your art…"
          ></textarea>
        </div>
        <div class="button-row">
          <button class="btn-draft" @click="saveDraft">
            <img :src="Folder2" class="icon" />
            <span>Save draft</span>
          </button>
          <button class="btn-post" @click="goToPage13">
            Post
          </button>
        </div>
      </section>
    </main>
    <div v-if="savedMessage" class="toast">
      Draft Saved
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Common/AppNavbar.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Add from '@/assets/Add.svg'
import Buttondark from '@/assets/Button-dark.svg'
import Paintimage from '@/assets/Paint-image.png'
import Arrow from '@/assets/Arrow.svg'
import Folder2 from '@/assets/Folder.svg'

const router = useRouter()
const title = ref('')
const description = ref('')
const selectedGenres = ref([])
const savedMessage = ref(false)

const genres = [
  { value: 'Abstract', label: 'Abstract' },
  { value: 'Sci-fi',   label: 'Sci-fi' },
  { value: 'Fantasy',  label: 'Fantasy' }
]
function goToPage13()    { router.push('/pages/PageSite1') }

function toggleGenre(val) {
  if (selectedGenres.value.includes(val)) {
    selectedGenres.value = selectedGenres.value.filter(g => g !== val);
  } else {
    selectedGenres.value.push(val);
  }
}


function addGenre() {
  console.log('Add genre clicked')
}

function saveDraft() {
  savedMessage.value = true
  setTimeout(() => (savedMessage.value = false), 3000)
}
</script>

<style scoped>

.page-site4 {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 100vh;
  background-color: #111827;
  font-family: 'Inter', sans-serif;
}
.site-header {
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  height: 4rem;
  border-bottom: 1px solid #374151;
}

.site-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 1rem 2rem 2rem;
  align-items: stretch;  
}

.image-panel {
    display: flex;
  align-items: center;
  min-height: 0;
}
.paint-image {
  width: 100%;
  height: auto;    
  max-height: calc(100vh - 100px);
  object-fit: cover;
  aspect-ratio: 1 / 1.2;
  border-radius: 1.25rem;
  border: 0.625rem solid #374151;
}


.form-panel {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}


.form-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
}
.header-text {
  font-size: 2rem;
  color: #FFF;
}
.dark-button {
  width: 3rem;
  height: 3rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.label {
  font-size: 0.875rem;
  color: #FFF;
}


.text-input {
  height: 2.75rem;
  padding: 0 0.75rem;
  background: #171A2B;
  border: 0.125rem solid #374151;
  border-radius: 0.75rem;
  color: #FFF;
}
.textarea {
  min-height: 11.625rem;
  padding: 0.75rem;
  background: #111827;
  border: 0.125rem solid #374151;
  border-radius: 0.75rem;
  color: #FFF;
  resize: vertical;
}


.select-wrapper {
  position: relative;
}
.select {
  width: 100%;
  height: 2.75rem;
  padding: 0 2.5rem 0 0.75rem;
  background: #111827;
  border: 0.125rem solid #374151;
  border-radius: 0.75rem;
  color: #FFF;
  appearance: none;
}
.select-arrow {
  position: absolute;
  top: 50%;
  right: 0.75rem;
  width: 1.25rem;
  height: 1.25rem;
  transform: translateY(-50%);
  pointer-events: none;
}

.genres-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.genre-pill {
  padding: 0 0.75rem;
  height: 2.25rem;
  background: #111827;
  border: 0.125rem solid #374151;
  border-radius: 2rem;
  font-size: 0.875rem;
  color: #6B7280;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.genre-pill.active {
  background: #2563EB;
  border-color: #FFF;
  color: #FFF;
}
.pill-add .add-icon {
  width: 1.25rem;
  height: 1.25rem;
}


.button-row {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.btn-draft,
.btn-post {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 3rem;
  padding: 0 1.25rem;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  cursor: pointer;
  border: none;
}
.btn-draft {
  background: #252A41;
  color: #FFF;
}
.btn-draft .icon {
  width: 1.5rem;
  height: 1.5rem;
}
.btn-post {
  background: #2563EB;
  color: #FFF;
}
.toast {
  position: fixed;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  background: #2563EB;
  color: #FFF;
  padding: 0.625rem 1.25rem;
  border-radius: 0.3125rem;
  font-size: 1rem;
  z-index: 10;
}

@media (max-width: 48em) {
  .site-main {
    grid-template-columns: 1fr;        /* stack on small screens */
  }
}

</style>
