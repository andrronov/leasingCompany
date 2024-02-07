<template>
  <footer class="w-full flex flex-col">
   <div id="f_upper" class="max-w-7xl mx-auto flex flex-col items-center gap-2 mb-6">
      <h1 class="text-lg xs:text-xl" id="font">Leasing Paradise</h1>
      <p>+7 (999) 999-99-99</p>
      <p>pochta@gmail.com</p>
      <p>г. Москва</p>
      <p>Время работы: с 09:00 до 20:00</p>
   </div>
   <div id="f_downer" class="w-full flex px-2 sm:px-6 lg:px-8 flex-row justify-between items-center bg-dev-300 min-h-40 text-white text-sm">
      <div class="flex flex-col items-start gap-1">
         <h1 class="text-lg xs:text-xl" id="font">Leasing Paradise</h1>
         <p>ИП **** *****</p>
         <p>ИНН *********</p>
         <p>ОГРН **********</p>
      </div>
      <div class="hidden xs:flex flex-col flex-wrap text-center s:flex-row items-center">
         <a v-for="item in nav" :key="item.name" v-smooth-scroll="{ duration: 1000, offset: -50 }" :href="item.href" class="text-gray-300 hover:bg-blue-800 hover:text-white rounded-md py-1 s:px-3 s:py-2 text-sm font-medium" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
      </div>
      <a v-smooth-scroll="{ duration: 1000, offset: -50 }" href="#top" class="flex flex-row items-center gap-1 h-full">Наверх
         <img src="/arrowUp.svg" alt="arrow" class="w-6 h-6">
      </a>
   </div>
  </footer>
</template>

<script setup>
defineProps({
   nav: {
      type: Array
   }
})
</script>

<style>

</style>