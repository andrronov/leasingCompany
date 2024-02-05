<template>
  <section class="flex flex-col items-center">
    <h3 class="text-dev-100 font-bold text-4xl mb-16 px-4">
      Что вы получаете выбирая нас?
    </h3>
    <div class="flex flex-row items-start max-w-3xl px-8 s:px-4 relative mb-6" v-for="(item, index) in items" :key="index">
      <!-- <CheckIcon class="text-dev-300" /> -->
      <component :is="item.img" class="absolute -left-1 s:-left-6 -top-2 h-10 w-10 text-dev-300" aria-hidden="true" />
      <div>
        <h5 class="font-bold text-xl mb-3">{{ item.title }}</h5>
        <p class="text-lg">{{ item.text }}</p>
        <p v-if="item.adding" class="text-dev-300 font-semibold mt-1 text-lg">{{ item.adding }}</p>
      </div>
    </div>
    <defaultButton class="mt-12">Оставить заявку</defaultButton>
  </section>
</template>

<script setup>
import {ref} from 'vue'
import {CheckIcon} from '@heroicons/vue/24/solid'
import defaultButton from './defaultButton.vue'

const items = ref([
  {
    adding: 'Лизинг - это инструмент для поддержки малого и среднего бизнеса.',
    img: CheckIcon,
    title: 'Заинтересованного в развитии вашего бизнеса профессионального специалиста',
    text: 'Получаете компетентного специалиста, который ответит на все ваши вопросы. Мы ориентируемся на долгосрочное сотрудничество, поэтому для нас важно, чтобы Ваша компания развивалась.'
  },
  {
    img: CheckIcon,
    title: 'Экономию денег и времени',
    text: 'Всю работу по поиску подходящей лизинговой компании, переговорам, согласованиям условий сделки до этапа подписания договоров, мы можем взять на себя, поможем подготовить пакет документов. А конкурентные предложения от ведущих лизинговых компаний позволят выбрать наиболее выгодный и подходящий для Bас вариант.'
  },
  {
    img: CheckIcon,
    title: 'Большой выбор выгодных условий',
    text: 'Благодаря обращению в нашу компанию Bы получаете максимальное количество выгодных предложений от разных компаний и имеете возможность выбирать те условия, которые Bам понравятся!'
  },
  {
    img: CheckIcon,
    title: 'Вам отказали? - это не точно!',
    text: 'Если Bам отказала 1 компания - это не приговор. Работаем даже со сложными ситуациями. Оставьте заявку и получите бесплатную консультацию от специалиста и решение поставленной задачи.'
  },
])
</script>

<style></style>
