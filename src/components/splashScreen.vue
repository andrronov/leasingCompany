<template>
    <TransitionRoot
      as="div"
      :show="isVisible"
      class="fixed flex flex-col justify-center items-center w-screen h-screen bg-dev-500 z-50 overflow-y-hidden"
      enter="transition-opacity duration-75"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-150"
      leave-from="opacity-100"
      leave-to="opacity-0"
  >
  <h1 class="text-lg xs:text-xl text-white" id="font">Leasing Paradise</h1>
  </TransitionRoot>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { TransitionRoot } from '@headlessui/vue'

const isVisible = ref(true)
onMounted(() => {
  setTimeout(() => {
    isVisible.value = false
  }, 1500);
})
</script>

<style>
</style>