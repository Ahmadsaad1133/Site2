<template>
  <div class="main-layout flex">
    <AppSidebar class="sidebar" />

    <div class="main-column flex flex-col ml-[264px]">


      <AppHeader
        class="header px-[72px]"
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
import AppSidebar from '@/components/Common/AppSidebar.vue'
import AppHeader  from '@/components/Common/AppHeader.vue'

// eslint-disable-next-line no-undef
const props = defineProps({
  user: { type: Object, required: true },
  categories: { type: Array,  required: true },
})
// eslint-disable-next-line no-undef
const emit = defineEmits(['themeChanged'])
function onThemeChanged(newTheme) { emit('themeChanged', newTheme) }
</script>

<style scoped>

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 264px;
  height: 100vh;
  background: #1f2937;
  overflow-y: auto;
  z-index: 100;
}


.main-column {
  display: flex;
  flex-direction: column;
  margin-left: 264px;
  height: 100vh;
}


.header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
}

.content-wrapper {
  flex: 1;              
  padding-left: 55px;    
  padding-right: 55px;  
  overflow-y: auto;      
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.content-wrapper::-webkit-scrollbar {
  display: none;
}
</style>

