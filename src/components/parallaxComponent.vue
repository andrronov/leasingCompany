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
                <input v-model="dataForm.userName" class="shadow focus:border-dev-300 appearance-none border-2 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Имя">
              </div>
              <div>
                <label class="block text-white text-sm font-bold mb-2" for="phone">
                  Телефон
                </label>
                <input v-model="dataForm.userPhone" class="shadow focus:border-dev-300 appearance-none border-2 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" type="tel" id="phone" name="phone" placeholder="+7">
                <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
              </div>
              <div class="mb-6">
                <label class="block text-white text-sm font-bold mb-2" for="number">
                  ИНН
                </label>
                <input v-model="dataForm.userINN" class="shadow focus:border-dev-300 appearance-none border-2 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="number" type="number" placeholder="ИНН">
                <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
              </div>
              <label class="block text-white text-sm font-bold mb-2" for="leasType">
               Интересующий Вас предмет лизинга
             </label>
              <select v-model="dataForm.userTransport" class="block appearance-none w-full py-2 px-3 text-black bg-white border-2 focus:border-dev-300 mb-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
               <option>Автотранспорт</option>
               <option>Спецтехника</option>
             </select>
             <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-700">
               <svg class="fill-blue-500 h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
             </div>
              <div class="flex flex-col items-center justify-center w-full gap-4">
                <button @click="sendEmail" class="bg-dev-300 hover:bg-blue-900 w-1/2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Отправить
                </button>
                <svg v-if="loading" class="w-8 h-8 mr-3 -ml-1 text-white dark:text-black animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                <p v-if="resLog" class="text-gray-200 bg-red-800 p-2">{{ resLog }}</p>
              </div>
            </form>
          </div>
   </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import axios from 'axios'

const dataForm = reactive({
  userName: '',
  userPhone: '',
  userINN: '',
  userTransport: '',
})
const resLog = ref(null)
const loading = ref(false)

async function sendEmail(){
  const {userName: name, userPhone: phone, userINN: inn, userTransport: transport} = dataForm
  loading.value = true
  if([name, phone, inn, transport].every(val => val.toString().length > 0)) {
    resLog.value = null
    // const res = await fetch(import.meta.env.VITE_SITE_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    //   },
    //   body: JSON.stringify(dataForm)
    // });
    axios.post('/api/application', dataForm).then(res => {
      if(res.status == 200){
      loading.value = false
      resLog.value = 'Заявка успешно отправлена!'
    }
    }).catch(err => {
      if(err) {
      loading.value = false
      resLog.value = `Возникла ошибка - ${err}`
    } 
    })     
  } else {
    loading.value = false
    resLog.value = 'Пожалуйста, заполните все поля'
    setTimeout(() => {
      resLog.value = null
    }, 5000);
  }
}
</script>