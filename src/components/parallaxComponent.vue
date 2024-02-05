<template>
   <div class="w-full mx-auto min-h-[680px] bg-fixed bg-cover bg-center flex items-center justify-center"
   style="background-image:url('/parllx.png')">
         <div class="w-full max-w-sm px-4 text-white">
            <h2 class="font-bold text-xl text-center mb-2">Оставить заявку на лизинг</h2>
            <form class="bg-white/15 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label class="block text-white text-sm font-bold mb-2" for="username">
                  Имя
                </label>
                <input class="shadow focus:border-dev-300 appearance-none border-2 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Имя">
              </div>
              <div>
                <label class="block text-white text-sm font-bold mb-2" for="phone">
                  Телефон
                </label>
                <input class="shadow focus:border-dev-300 appearance-none border-2 rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="phone" placeholder="+7">
                <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
              </div>
              <div class="mb-6">
                <label class="block text-white text-sm font-bold mb-2" for="number">
                  ИНН
                </label>
                <input class="shadow focus:border-dev-300 appearance-none border-2 rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="ИНН">
                <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
              </div>
              <label class="block text-white text-sm font-bold mb-2" for="leasType">
               Интересующий Вас предмет лизинга
             </label>
              <select class="block appearance-none w-full py-2 px-3 text-black bg-white border-2 focus:border-dev-300 mb-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
               <option>Автотранспорт</option>
               <option>Спецтехника</option>
             </select>
             <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-700">
               <svg class="fill-blue-500 h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
             </div>
              <div class="flex items-center justify-center w-full">
                <button class="bg-dev-300 hover:bg-blue-900 w-1/2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Отправить
                </button>
              </div>
            </form>
          </div>
   </div>
</template>

<script>
</script>

<!-- <template>
   <div class="w-full h-1 relative">
      <div class="mx-auto min-h-96 max-w-7xl bg-cover bg-fixed bg-center bg-no-repeat shadow-lg" style="background-image:url('https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp');">
      </div>
   </div>
   </template> -->