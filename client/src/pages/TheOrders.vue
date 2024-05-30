<template>
  <main class="main">
    <div class="content">
      <h2 class="heading-secondary">Заказы</h2>
      <EasyDataTable
          :headers="headers"
          :items="orders"
          alternating
          border-cell>
        <template #item-confirmed="item">
          <span v-if="item.confirmed === 1" class="text-3xl text-[#8aa27d]">
            <IconCheck/>
          </span>
          <span v-if="item.confirmed === 0" class="text-3xl text-yellow-300">
            <IconClock/>
          </span>
        </template>
      </EasyDataTable>
    </div>
  </main>
</template>

<script setup lang="ts">
import {fetchOrdersByUserId} from "@/services/order.ts";
import {onMounted, ref} from "vue";
import {useUserStore} from "@/stores";
import IconCheck from "@/components/icons/IconCheck.vue";
import IconClock from "@/components/icons/IconClock.vue";


const headers = [
  {text: 'id', value: 'id', sortable: true},
  {text: 'План', value: 'plan'},
  {text: 'Калории', value: 'calories'},
  {text: 'Номер', value: 'phone'},
  {text: 'Цена', value: 'price'},
  {text: 'Способ оплаты', value: 'pay_method'},
  {text: 'Каспи номер', value: 'kaspi_phone'},
  {text: 'Время доставки', value: 'delivery_time'},
  {text: 'Адрес', value: 'address'},
  {text: 'Одобрен', value: 'confirmed'}
];


const store = useUserStore()
const orders = ref([])

onMounted(() => {
  let userId = store.getUserId

  if (userId === null) {
    userId = localStorage.getItem('userId') as any
  }

  try {
    fetchOrdersByUserId(userId).then(res => {
      orders.value = res
    })
  } catch (err) {
    console.error(err)
  }
})
</script>

<style scoped>
.main {
  padding: 6.4rem 0;
}

.content {
  max-width: 128rem;
  margin: 0 auto;
  height: 48rem;
  font-family: Montserrat, sans-serif;
}

</style>
