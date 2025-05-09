<template>
  <nav class="app-navbar flex items-center justify-between p-4 bg-white shadow" style="padding-top: 20px; gap: 8px;">

    <div class="nav-left flex items-center space-x-4" style="padding-left: 30px; gap: 8px;">
      <img src="@/assets/Navigate-left.svg" alt="Back" class="icon cursor-pointer" />
      <img src="@/assets/Navigation-right.svg" alt="Forward" class="icon cursor-pointer" />
    </div>


    <div class="nav-right flex items-center space-x-4" style="padding-right: 34px; gap: 16px;">
      <div class="flex items-center space-x-1 cursor-pointer" style="gap: 8px;">
        <img src="@/assets/Home.svg" alt="Home" class="icon" />
        <span class="font-medium">Home</span>
      </div>

      <div class="flex items-center space-x-1 cursor-pointer" style="gap: 8px;">
        <img src="@/assets/Star.svg" alt="Create" class="icon" />
        <span class="font-medium">Create</span>

        <img src="@/assets/Add.svg" alt="Add" class="icon" />
        <span class="font-medium">Post</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
};
</script>

<style scoped>
.app-navbar img.icon {
  width: 24px;
  height: 24px;
}
</style>
