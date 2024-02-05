<template>
   <section class="w-full bg-dev-100 flex flex-col items-center text-white">
      <h3 class="font-bold text-4xl mb-16 mt-6">Предметы лизинга</h3>
      <div class="max-w-7xl flex-col flex s:flex-row items-center gap-4 justify-between mb-24">
         <div v-for="(item, index) in leasItems" :key="index" class="flex flex-col w-full s:w-2/5 items-center s:h-72">
            <img :src='item.img' alt="car" class="max-w-72 max-h-44 object-fill border-4 shadow-sm shadow-white border-white mb-4">
            <h5 class="font-bold text-xl">{{ item.title }}</h5>
            <ul class="text-center">
               <li v-for="(transport, index) in item.items" :key="index">{{ transport }}</li>
            </ul>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ref } from 'vue';

const leasItems = ref([
   {
      title: 'Автотранспорт',
      items: ['- Легковые авто', '- Грузовые авто', '- Коммерческие авто'],
      img: "/bmw.jpeg"
   },
   {
      title: 'Спецтехника',
      items: ['- Дорожная техника', '- Строительная техника', '- Техника сельскохозяйственного назначения'],
      img: "/spec.jpeg"
   },
])
</script>