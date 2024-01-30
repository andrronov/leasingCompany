<template>
   <carousel :autoplay="3500" :wrap-around="true" :items-to-show="1">
     <slide :style="`background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.img}');`" class="carousel__item bg-cover bg-center" v-for="(slide, index) in slides" :key="index">
       <h2 class="font-semibold text-xl">{{slide.title}}</h2>
       <p class="font-medium bg-gray-900/20 p-2">{{ slide.text }}</p>
       <div>
         <p class="text-gray-300 text-base mb-2">Оставьте заявку и мы свяжемся с Вами в ближайшее время!</p>
         <button class="bg-dev-100 p-3 rounded-full text-white dark:text-black cursor-pointer hover:bg-dev-500 hover:text-gray-100">
            Оставить заявку
         </button>
       </div>
     </slide>
 
     <template #addons>
       <navigation />
       <pagination />
     </template>
   </carousel>
 </template>
 
 <script>
 import 'vue3-carousel/dist/carousel.css'
 import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
 
 export default {
   name: 'App',
   components: {
     Carousel,
     Slide,
     Pagination,
     Navigation,
   },
   data(){
      return{
         slides: [
            {
               img: '/bbb.webp',
               title: 'Легковые авто в лизинг на выгодных условиях:',
               text: 'Аванс от 0% | Срок лизинга от 12 до 84 месяцев | Оформление по 2 документам | Решение от 1 дня!'
            },
            {
               img: '/aaa.jpg',
               title: 'Грузовая техника в Лизинг новая и Б/У:',
               text: "Авансовый платеж от 0% | Срок лизинга от 12 до 84 месяцев | Рассмотрение заявки по 2 документам"
            },
            {
               img: '/ccc.webp',
               title: 'Спецтехника любого назначения в Лизинг для развития вашего бизнеса:',
               text: "Аванс от 0% | Срок лизинга от 12 до 60 месяцев | Решение по 2 документам"
            },
         ]
      }
   }
 }
 </script>
 
 <style scoped>
.carousel__item {
  min-height: 590px;
  width: 100%;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: border-box;
}
</style>

<style>svg.carousel__icon{
   fill: white;
}</style>