<template>
   <section class="bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-dev-300">Название компании</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Лизинг агент - это</p>
          <!-- <p class="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p> -->
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl class="grid max-w-3xl grid-cols-1 gap-x-2 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div v-for="(item, index) in pluses" :key="index" class="relative">
               <dt class="text-dev-500 font-semibold text-xl">{{ item.title }}</dt>
              <dd class="mt-2 text-base leading-7 text-gray-900 font-medium">{{ item.description }}</dd>
              <div class="bg-dev-100 w-16 h-16 text-3xl opacity-35 text-white items-center justify-center flex rounded-lg absolute right-20 bottom-20">{{ index + 1 }}</div>
            </div>
          </dl>
        </div>
       </div>
     </section>
</template>

<script setup>
import {ref} from 'vue'

const pluses = ref([
   {
      title: 'Индивидуальный и гибкий график платежей',
      description: 'Учитывая специфику бизнеса, вы можете выбрать подходящий график платежей: Аннуитет - одинаковые платежи на весь срок лизинга Дигрессия - убывающие платежи от большего к меньшему, при таком графике можно уменьшить процент удорожания Сезонный - позволяет выстроить графики с учетом сезонных товаров или услуг.'
   },
   {
      title: 'Сниженные/отсутствующие требования по дополнительному обеспечению',
      description: 'Предмет лизинга до конца выплаты по графику платежей находиться в собственности лизинговой компании, поэтому он сам является обеспечением, и лизинговые компании в редких случаях прибегают к залогам и поручителям.'
   },
   {
      title: 'Свобода предмета лизинга от претензий кредиторов',
      description: 'В спорных экономических вопросах с кредиторами, предмет лизинга освобожден от претензий на него, так как он находиться в собственности лизинговой компании (лизингодателя) до конца срока лизинга.'
   },
   {
      title: 'Ускоренная амортизация имущества',
      description: 'Балансодержатель предмета лизинга вправе применить к нему коэффициент ускоренной амортизации (до 3). Это дает возможность к окончанию договора выкупить предмет лизинга по минимальной остаточной стоимости, значительно уменьшая налоговую нагрузку'
   },
   {
      title: 'Экономия по налогу на прибыль 20%',
      description: 'Все платежи по договору лизинга в полном объеме, включая авансовый платеж и начисленные проценты, относятся на затраты, уменьшая налог на прибыль .'
   },
   {
      title: 'Экономия НДС 20%',
      description: 'Лизинговые сделки подлежат уплате НДС (20%). Лизингополучатель может вернуть его в качестве вычета или перезачесть на следующий отчетный период, если исходящий НДС больше входящего.'
   },
])
</script>

<style>

</style>template