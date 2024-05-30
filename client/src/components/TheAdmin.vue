<template>
  <main class="main">
    <div class="content">
      <h2 class="heading-secondary">Админ панель</h2>
      <EasyDataTable
          :headers="headers"
          :items="orders"
          alternating
          border-cell
      >
        <template #item-confirmed="item">
          <button class="flex gap-2 px-2 py-1 bg-[#8aa27d] items-center text-white" v-if="item.confirmed === 0"
                  @click.prevent="handleApprove(item.id)">
            <span class="text-3xl"><IconCheck/></span>
            <span>Одобрить</span>
          </button>
          <div v-else>
            Одобрено
          </div>
        </template>
      </EasyDataTable>
    </div>
  </main>
</template>

<script setup>
import {approveOrder, fetchOrders} from "@/services/order.ts";
import {onMounted, ref} from "vue";
import IconCheck from "@/components/icons/IconCheck.vue";


const headers = [
  {text: 'id', value: 'id', sortable: true},
  {text: 'Никнейм', value: 'username'},
  {text: 'План', value: 'plan'},
  {text: 'Калории', value: 'calories'},
  {text: 'Номер', value: 'phone'},
  {text: 'Цена', value: 'price'},
  {text: 'Способ оплаты', value: 'pay_method'},
  {text: 'Каспи номер', value: 'kaspi_phone'},
  {text: 'Время доставки', value: 'delivery_time'},
  {text: 'Предпочтения', value: 'preferences'},
  {text: 'Комментарий к курьеру', value: 'comment'},
  {text: 'Адрес', value: 'address'},
  {text: 'Одобрить', value: 'confirmed'},
];

const orders = ref([])

onMounted(() => {
  try {
    fetchOrders().then(res => {
      console.log(res)
      orders.value = res
    })
  } catch (err) {
    console.error(err)
  }
})

async function handleApprove(orderId) {
  approveOrder(orderId).then(() => {
    orders.value.find(order => order.id === orderId).confirmed = 1;
  })
}
</script>

<style scoped>
.main {
  padding: 6.4rem 0;
}

.content {
  max-width: 128rem;
  margin: 0 auto;
  height: 48rem;
}
</style>
