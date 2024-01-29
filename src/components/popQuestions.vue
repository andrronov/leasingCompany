<template>
   <div class="w-full px-4 pt-16">
    <h3 class="text-center font-bold text-dev-300 text-2xl mb-6">Часто задаваемые вопросы</h3>
     <div class="max-w-7xl mx-auto rounded-2xl bg-white p-2">
       <Disclosure v-slot="{ open }">
         <DisclosureButton
           class="flex w-full justify-between rounded-lg bg-dev-500 px-4 py-2 text-left text-lg font-medium text-blue-100 hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75"
         >
           <span>Кто может оформить лизинг?</span>
           <ChevronUpIcon
             :class="open ? 'rotate-180 transform' : ''"
             class="h-5 w-5 text-blue-200"
           />
         </DisclosureButton>
         <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-gray-800">
           <p class="mb-4">Мы предлагаем услуги лизинга как физическим, так и юридическим лицам и индивидуальным предпринимателям.</p>
           <ul>
            <li>- Низкий первоначальный взнос</li>
            <li>- Не требуется дополнительный залог</li>
            <li>- Большая экономия для компании за счет возврата НДС и уменьшения налога на прибыль для юридических лиц</li>
            <li>- Высокая вероятность одобрения сделки, мы работаем с более чем 20 лизинговыми компаниями, поможем в сборе документов и обеспечим реализацию сделки</li>
            <li>- Возможность гибкого графика платежей</li>
            <li>- Мы предлагаем лизинг не только юридическим лицам и предпринимателям но и лизингдля физических лиц, и лиц, не имеющих гражданства РФ</li>
           </ul>
         </DisclosurePanel>
       </Disclosure>
       <Disclosure v-slot="{ open }">
         <DisclosureButton
           class="flex w-full justify-between rounded-lg bg-dev-500 px-4 py-2 text-left text-lg font-medium text-blue-100 hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75"
         >
           <span>Что можно взять в лизинг?</span>
           <ChevronUpIcon
             :class="open ? 'rotate-180 transform' : ''"
             class="h-5 w-5 text-blue-200"
           />
         </DisclosureButton>
         <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-gray-800">
           <p class="mb-4">Мы подбираем финансирование не только для покупки транспорта и спецтехники. Также к вашим услугам следующие виды лизинга:</p>
           <ul>
            <li>- Лизинг такси. Поможем подобрать автомобиль с максимальными скидками</li>
            <li>- Лизинг техники для спорта и отдыха (мотоциклы, квадроциклы, гидроциклы, снегоболотоходы, багги, лодки и катера)</li>
           </ul>
         </DisclosurePanel>
       </Disclosure>
       <Disclosure v-slot="{ open }">
         <DisclosureButton
           class="flex w-full justify-between rounded-lg bg-dev-500 px-4 py-2 text-left text-lg font-medium text-blue-100 hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75"
         >
           <span>Какой срок и аванс возможен?</span>
           <ChevronUpIcon
             :class="open ? 'rotate-180 transform' : ''"
             class="h-5 w-5 text-blue-200"
           />
         </DisclosureButton>
         <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-gray-800">
           <ul>
            <li>- Аванс от 0% до 49%</li>
            <li>- Срок от 1 года до 7 лет</li>
            <li>- Возможность досрочного погашения с перерасчетом процентов</li>
           </ul>
         </DisclosurePanel>
       </Disclosure>
       <Disclosure v-slot="{ open }">
         <DisclosureButton
           class="flex w-full justify-between rounded-lg bg-dev-500 px-4 py-2 text-left text-lg font-medium text-blue-100 hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75"
         >
           <span>Какие преимущества возвратного лизинга?</span>
           <ChevronUpIcon
             :class="open ? 'rotate-180 transform' : ''"
             class="h-5 w-5 text-blue-200"
           />
         </DisclosureButton>
         <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-gray-800">
           <ul>
            <li>- Мы предлагаем услуги возвратного лизинга не только на транспортные средства и спецтехнику, но и на любое оборудование и недвижимость.</li>
            <li>- Вы получаете деньги за вашу технику, транспорт или оборудование и продолжаете использовать их без отрыва от производства.</li>
            <li>- Возможность быстрого получения денежных средств для развития бизнеса.</li>
           </ul>
         </DisclosurePanel>
       </Disclosure>
       <Disclosure v-slot="{ open }">
         <DisclosureButton
           class="flex w-full justify-between rounded-lg bg-dev-500 px-4 py-2 text-left text-lg font-medium text-blue-100 hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75"
         >
           <span>В чем преимущество подачи заявки через наш сервис?</span>
           <ChevronUpIcon
             :class="open ? 'rotate-180 transform' : ''"
             class="h-5 w-5 text-blue-200"
           />
         </DisclosureButton>
         <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-gray-800">
           <ul>
            <li>- Мы подбираем Вам наиболее выгодные условия лизинга бесплатно.</li>
            <li>- Экономия времени на поиск наиболее выгодных условий. Мы делаем сравнительный анализ лучших предложений на рынке лизинга и подбираем самые выгодные условия. Вы получаете готовые расчеты и сравнительный анализ к ним.</li>
            <li>- Мы подбираем Вам лучшие предложения на рынке автомобилей с учетом всех Ваших потребностей. Наши партнеры поставляют автомобили из Китая, Европы и других стран с максимальными скидками.</li>
            <li>- Возможность не только воспользоваться лизинговым финансирование но и получить оборотные средства для развития бизнеса.</li>
            <li>- Мы предлагаем услуги возвратного лизинга. Вы получаете деньги за вашу технику, транспорт или оборудование и продолжаете использовать их без отрыва от производства.</li>
            <li>- Мы самостоятельно готовим анкеты для подачи заявки на лизинг тем самым Вы экономите время.</li>
           </ul>
         </DisclosurePanel>
       </Disclosure>
     </div>
   </div>
 </template>
 
 <script setup>
 import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
 import { ChevronUpIcon } from '@heroicons/vue/20/solid'
</script>
 