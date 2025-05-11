<template>
  <div class="main-layout flex" :dir="isRTL ? 'rtl' : 'ltr'">
    <AppSidebar
      class="sidebar"
      @themeChanged="onThemeChanged"
      @localeChanged="onLocaleChanged"
    />

    <div class="main-column flex flex-col">
      <AppHeader
        class="header"
        :user="props.user"
        :categories="props.categories"
        @themeChanged="onThemeChanged"
      />

      <div class="content-wrapper hide-scroll">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-undef */
import { computed } from 'vue'
import { useI18n }   from 'vue-i18n'
import AppSidebar    from '@/components/Common/AppSidebar.vue'
import AppHeader     from '@/components/Common/AppHeader.vue'

const props = defineProps({
  user:       { type: Object, required: true },
  categories: { type: Array,  required: true },
})
const emit = defineEmits(['themeChanged','localeChanged'])

const { locale } = useI18n({ useScope: 'global' })
const isRTL = computed(() => locale.value === 'ar')

function onThemeChanged(newTheme) {
  emit('themeChanged', newTheme)
}

function onLocaleChanged() {
  const next = locale.value === 'en' ? 'ar' : 'en'
  locale.value = next
  emit('localeChanged', next)
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  inset-inline-start: 0;    
  width: 264px;
  height: 100vh;
  overflow-y: auto;
  z-index: 100;
}

.main-column {
  display: flex;
  flex-direction: column;
  margin-inline-start: 264px;
  height: 100vh;
}

.header {
  position: sticky;
  z-index: 50;
  width: 100%;
}

.content-wrapper {
  flex: 1;              
  padding-inline: 55px;
  overflow-y: auto;      
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.content-wrapper::-webkit-scrollbar {
  display: none;
}
</style>
