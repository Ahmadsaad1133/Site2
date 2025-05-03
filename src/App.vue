<template>
  <div id="app" class="app-layout">
    <main class="content-area">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Tajawal', sans-serif;
  background-color: #111827;
}


#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>


<style scoped>
.content-area {
  flex: 1;
  color: white;
  overflow: hidden;
}
</style>
