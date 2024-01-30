<template>
  <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
    <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <h3 class="text-center text-xl bg-dev-500 p-2 text-white">Отзыв нашего клиента!</h3>
      <figure class="mt-10">
        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p>Работа с лизинговой компанией оказалась очень приятной и эффективной. Сотрудники были профессиональными и помогли мне получить необходимое оборудование без лишних сложностей. Очень рекомендую эту компанию!</p>
        </blockquote>
        <figcaption class="mt-10">
          <img class="mx-auto h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          <div class="mt-4 flex items-center justify-center space-x-3 text-base">
            <div class="font-medium text-gray-700">Ирина</div>
            <!-- <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
              <circle cx="1" cy="1" r="1" />
            </svg> -->
            <!-- <div class="text-gray-600">Руководитель </div> -->
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>


<!-- <template>
  <carousel :autoplay="5000" :wrap-around="true" :items-to-show="1" class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <slide class="carousel__item"
    v-for="(comment, index) in comments" :key="index">
    <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div class="mx-auto max-w-2xl lg:max-w-4xl">
        <img class="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
        <figure class="mt-10">
          <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
          </blockquote>
          <figcaption class="mt-10">
            <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
              <div class="font-semibold text-gray-900">Judith Black</div>
              <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div class="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
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
      comments: [
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
 min-height: 420px;
 display: flex;
 flex-direction: column;
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

<style>
svg.carousel__icon{
  fill: black;
}
</style> -->
