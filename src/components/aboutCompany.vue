<template>
   <div class="overflow-hidden bg-white py-24 sm:py-32">
     <div class="mx-auto max-w-7xl px-6 lg:px-8">
       <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
         <div class="lg:pr-8 lg:pt-4">
           <div class="lg:max-w-lg">
             <h2 class="text-base font-semibold leading-7 text-indigo-600">о компании</h2>
             <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leasing Paradise</p>
             <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
               <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                 <dt class="inline font-semibold text-gray-900">
                   <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-dev-300" aria-hidden="true" />
                   {{ feature.name }}
                 </dt>
                 {{ ' ' }}
                 <dd class="inline">{{ feature.description }}</dd>
               </div>
             </dl>
             <p class="mt-6 text-lg leading-8 text-dev-300">В наших интересах - помощь в развитии бизнеса и экономия ресурсов компаний наших клиентов.</p>
           </div>
         </div>
         <img src="/parllx.png" alt="Product screenshot" class="w-[48rem] bg-gray-500 max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
       </div>
     </div>
   </div>
 </template>
 
 <script setup>
 import { PaperAirplaneIcon, CheckCircleIcon, CubeIcon, FolderIcon } from '@heroicons/vue/20/solid'
 
 const features = [
   {
     name: 'Leasing Paradise -  это профессиональный брокер',
     description:
       'в сфере финансовых услуг.',
     icon: PaperAirplaneIcon,
   },
   {
     name: 'Успешно',
     description: 'взаимодействуем и являемся официальными партнерами ТОП-10 ведущих лизинговых компаний.',
     icon: CheckCircleIcon,
   },
   {
     name: 'Предоставляем',
     description: 'Лучшие условия лизинговых сделок для наших клиентов.',
     icon: CubeIcon,
   },
   {
     name: 'Наши клиенты',
     description: 'это юридические лица и индивидуальные предприниматели, зарегистрированные на территории РФ.',
     icon: FolderIcon,
   },
 ]
 </script>