<script setup>
import { computed, reactive, ref } from 'vue';
import Header from './components/Header.vue';

const cantidad = ref(10000)
const state = reactive({ cantidad: 0 })
const MIN = 2000;
const MAX = 20000
const STEP = 100
const formatearDiner = computed(() => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formatter.format(cantidad.value)
})

const handleChangeDecremento = () => {
  const valor = cantidad.value - STEP;
  if (valor < MIN) {
    alert('La cantidad no es valida')
    return

  }
  cantidad.value = valor
}


const handleChangeIncremento = () => {
  const valor = cantidad.value + STEP;
  if (valor > MAX) {
    alert('La cantidad no es valida')
    return
  }
  cantidad.value = valor
}

</script>

<template>
  <div class="my-20 max-w-lg mx-auto  bg-white shadow p-10">
    <Header />
    <div class="flex justify-between mt-10">
      <button class="h-10 w-10 flex items-center justify-center font-bold bg-lime-500 rounded-full 
        hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500 text-white text-2xl"
        @click="handleChangeDecremento">-</button>

      <button class="h-10 w-10 flex items-center justify-center font-bold bg-lime-500 rounded-full 
        hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500 text-white text-2xl"
        @click="handleChangeIncremento">+</button>
    </div>
    <div class="my-5">
      <input type="range" :min=MIN :max=MAX :step=STEP class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600 "
        v-model.number="cantidad" />
      <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">{{ formatearDiner }}</p>


    </div>
  </div>
</template>
