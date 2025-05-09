<template>
  <section class="app-home">
    <div class="columns">
      <div
        class="column"
        v-for="(colCards, idx) in columns"
        :key="idx"
      >
        <router-link
          v-for="card in colCards"
          :key="card.id" 
          :to="`/pages/PageSite2/${card.id}`"
          class="card-link"
        >
          <GalleryCard
            :card="card"
            :heart-icon="heartIcon"
            :eye-icon="eyeIcon"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import GalleryCard from './GalleryCard.vue'
import heartIcon from '@/assets/Heart-Icon.svg'
import eyeIcon   from '@/assets/Eye-icon.svg'

// eslint-disable-next-line no-undef
const props = defineProps({
  cards: { type: Array, required: true }
})

const columns = computed(() => {
  const cols = Array.from({ length: 4 }, () => [])
  props.cards.forEach((card, i) => {
    cols[i % 4].push(card)
  })
  return cols
})
</script>

<style scoped>
.app-home {
  padding: 1rem;
  left: 72px;
  right: 72px;
}
.columns {
  display: flex;
  gap: 1rem;
}
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.card-link {
  text-decoration: none;
  color: inherit;
}
</style>
