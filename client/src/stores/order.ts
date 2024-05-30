import {defineStore} from 'pinia';
import {ref} from "vue";

export const useOrderStore = defineStore('order', () => {

  const order = ref(null)

  function setOrder(prg, calories, price, days, price_total) {
    order.value = {
      prg,
      calories,
      price,
      days,
      price_total
    }
  }

  function resetOrder() {
    order.value = null
  }

  return {order, setOrder, resetOrder}
})
