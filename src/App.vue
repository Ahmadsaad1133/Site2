<template>
  <div id="app" class="app-layout">
    <PageSite16 />
     <router-view />
     <div class="content-area">
      <div class="main-content">
      </div>
    </div>
   </div>
  <div id="app" class="app-layout">
  </div>
  </template>
  
  <script>
   import PageSite16 from '@/Pages/PageSite16.vue'
  
   export default {
     name: 'App',
     components: {
      PageSite16,
     }
   }
  </script>
  
  <style>
  html, body {
    margin: 0;
    padding: 0;
    background-color: #111827;
    color: white;
    height: 100%;
  }
  
  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  /* you can remove these if you’re not using them any more */
  .content-area { display: none; }
  .main-content  { display: none; }
  </style>
  