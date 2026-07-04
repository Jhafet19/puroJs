<script setup>
import { computed, reactive, ref, watch } from 'vue';
import Header from './components/Header.vue';
import Button from './components/Button.vue';
import { calcularTotalPager } from './helpers/index.js';

const cantidad = ref(10000)
const meses = ref(6)
const total = ref(0)
const state = reactive({ cantidad: 0 })
const MIN = 2000;
const MAX = 20000
const STEP = 100
const formatearDiner = (valor) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formatter.format(valor)
}

watch([cantidad, meses], () => {
  total.value = calcularTotalPager(cantidad.value, meses.value)
})

const pagoMensual = computed(() => {
  return total.value / meses.value
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
      <Button :operador="'-'" :fn="handleChangeDecremento" />
      <Button :operador="'+'" :fn="handleChangeIncremento" />
    </div>
    <div class="my-5">
      <input type="range" :min=MIN :max=MAX :step=STEP class="w-full bg-gray-200 accent-lime-500 hover:accent-lime-600 "
        v-model.number="cantidad" />
      <p class="text-center my-10 text-5xl font-extrabold text-indigo-600">{{ formatearDiner(cantidad) }}</p>

      <h2 class="text-xl font-extrabold text-center text-gray-500">Elige un <span class="text-indigo-600">Plazo</span> a
        pagar
      </h2>

      <select :value="meses" v-model.number="meses"
        class="w-full p-2 bg-white border-gray-500 rounded-lg text-center text-xl font-bold text-gray-500 pt-5">
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

    </div>

    <div v-if="total > 0" class="my-5 space-y-3 bg-gray-50 p-5">
      <h2 class="text-2xl font-extrabold text-gray-500 text-center">
        Resumen <span class="text-indigo-600">de Pagos</span>
      </h2>
      <p class="text-xl text-gray-500 text-center font-bold">{{ meses }} Meses</p>
      <p class="text-xl text-gray-500 text-center font-bold">Total a pagar: {{ formatearDiner(total) }} </p>
      <p class="text-xl text-gray-500 text-center font-bold">Mensuales</p>
    </div>
    <p v-else class="text-center">Añade una cantidad y un plazo a pagar: {{ (formatearDiner(pagoMensual)) }}</p>
  </div>
</template>
