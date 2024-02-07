<template>
  <div :class="isVisible ? 'block' : 'hidden'" class="fixed flex flex-col justify-center items-center w-screen h-screen bg-dev-500 z-50 overflow-y-hidden">
      <Transition>
        <h1 class="text-lg xs:text-xl text-white" id="font">Leasing Paradise</h1>
      </Transition>
  </div>
  <!-- <button @click="show = !show">Toggle</button>
<Transition>
  <div>
    <p v-if="show">hello</p>
  </div>
</Transition> -->
</template>

<script setup>
import {ref, onMounted} from 'vue'
const isVisible = ref(true)
// const show = ref(false)
onMounted(() => {
  setTimeout(() => {
    isVisible.value = false
  }, 1500);
})
</script>

<style lang="css">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>