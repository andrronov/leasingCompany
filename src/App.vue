<script setup>
import { ref } from 'vue';
import headNav from './components/headNav.vue'
import defaultButton from './components/defaultButton.vue'

const darkMode = ref(false)
</script>

<template>
  <div :class="{'dark': darkMode}" class="flex flex-col">
    <div class="w-full">
      <div class="flex flex-row justify-between items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-20">
        <p>LOGO</p>
        <div class="flex flex-row items-center gap-2">
          <p class="text-base">+7 (966) 666 66 66</p>
          <defaultButton class="text-sm">Звонок</defaultButton>
        </div>
      </div>
    </div>
    <headNav></headNav>
    <div class="bg-gray-400" style="height: 580px"></div>
    <div class="bg-gray-200" style="height: 86px" id="divider"></div>
  </div>
</template>

<style scoped>

</style>
