<template>
  <main class="main">
    <div class="contain">
      <h2 class="heading-secondary">Оформление заказа</h2>
      <div class="content">
        <div class="text-content">
          <div>
            <label for="name-input">Имя<span class="star">*</span> </label>
            <input id="name-input" type="text" v-model="name" placeholder="Даурен" required/>
          </div>
          <div>
            <label for="name-input">Номер получателя<span class="star">*</span> </label>
            <input id="name-input" type="text" v-model="phone" placeholder="Введите номер телефона" required/>
          </div>
          <div>
            <label for="email-input">Куда привезти?<span class="star">*</span> </label>
            <input id="email-input" type="text" v-model="address" placeholder="Введите адрес" required/>
          </div>
          <div>
            <label for="email-input">Когда привезти?<span class="star">*</span> </label>
            <input id="email-input" type="datetime-local" v-model="datetime" placeholder="Введите дату" required/>
          </div>
          <div class="diet-taste">
            <label for="comment-input">Диета, вкусовые предпочтения и аллергии</label>
            <textarea v-model="preferences" id="comment-input" :class="{'cursor-not-allowed': isCalling}" name="comment"
                      rows="4"
                      :disabled="isCalling"/>
          </div>
          <div class="comment">
            <label for="comment-input">Комментарий к куръеру</label>
            <textarea v-model="comment" id="comment-input" :class="{'cursor-not-allowed': isCalling}" name="comment"
                      rows="4"
                      :disabled="isCalling"/>
          </div>
          <div>
            <label for="email-input">Оплата<span class="star">*</span> </label>
            <select required v-model="selPayment">
              <option v-for="option in paymentOptions" :key="option.code" :value="option.code">{{
                  option.label
                }}
              </option>
            </select>
          </div>
          <div>
            <label for="name-input">Номер Kaspi<span class="star">*</span> </label>
            <input id="name-input" type="email" v-model="kaspi_phone" placeholder="Введите номер" required/>
          </div>
          <div class="price-total-container">
            <h6 class="price-total">Итого: {{ order.price_total.toLocaleString() }} тг.</h6>
          </div>
          <button class="btn btn--full in-total-btn" @click.prevent="handleOrder">Оформить заказ</button>
        </div>
        <div class="micro-container">
          <button class="btn-micro" :class="{'bg-[#8aa27d]': !isCalling, 'bg-[#f87171]': isCalling}"
                  @click.prevent="toggleConversation">
            <MdiMicrophone v-if="!isCalling"/>
            <IconStop v-else/>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import {computed, ref} from "vue";
import MdiMicrophone from "@/components/icons/IconMicrophone.vue";
import IconStop from "@/components/icons/IconStop.vue";
import {RetellWebClient} from "retell-client-js-sdk";
import {http} from "@/shared/api/index.ts";
import {onBeforeRouteLeave} from "vue-router";
import {useOrderStore, useUserStore} from "@/stores";
import {makeOrder} from "@/services/order.ts";
import {useRouter} from "vue-router";

const webClient = new RetellWebClient()
const isCalling = ref(false)
const agentId = import.meta.env.VITE_AGENT_ID
const orderStore = useOrderStore()
const userStore = useUserStore()
const router = useRouter()

const conversation = ref('')

const preferences = ref('')
const comment = ref('')

webClient.on("conversationStarted", () => {
  console.log("conversationStarted");
});

webClient.on("audio", () => {
});

webClient.on("conversationEnded", async () => {
  console.log('---CONVERSATION---')
  const response = await http.post('/groq', {
    conversation: conversation.value
  })
  console.log(response.data);
  const [first, second] = response.data.formatted.split('|');
  preferences.value = first;
  comment.value = second
  isCalling.value = false; // Update button to "Start" when conversation ends
  conversation.value = ''
});

webClient.on("error", (error) => {
  console.error("An error occurred:", error);
  isCalling.value = false; // Update button to "Start" in case of error
});

webClient.on("update", (update) => {
  conversation.value = update.transcript.map(x => `${x.role}: ${x.content}`).join('\n')
  console.log(conversation.value)
});

async function toggleConversation() {
  if (isCalling.value) {
    webClient.stopConversation();
  } else {
    const registerCallResponse = await registerCall(agentId);
    if (registerCallResponse.callId) {
      webClient
          .startConversation({
            callId: registerCallResponse.callId,
            sampleRate: registerCallResponse.sampleRate,
            enableUpdate: true,
          })
          .catch(console.error);
      isCalling.value = true;
    }
  }
}

async function registerCall(agentId) {
  try {
    const response = await http.get(`/assistant/${agentId}`)
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

const order = computed(() => orderStore.order)


onBeforeRouteLeave(() => {
  orderStore.resetOrder()
})

const name = ref('')
const phone = ref('')
const kaspi_phone = ref('')
const address = ref('')
const datetime = ref('')


const paymentOptions = [
  {
    label: 'Kaspi',
    code: 'kaspi',
  }
]

const selPayment = ref(paymentOptions[0].code)

async function handleOrder() {
  const order = {
    user_id: userStore.userId,
    phone: phone.value,
    address: address.value,
    delivery_time: datetime.value,
    preferences: preferences.value,
    comment: comment.value,
    pay_method: selPayment.value,
    kaspi_phone: kaspi_phone.value,
    plan: orderStore.order.prg.name_ru,
    plan_code: orderStore.order.prg.id,
    calories: orderStore.order.calories,
    price: orderStore.order.price_total,
    confirmed: false
  }

  const orderId = await makeOrder(order)
  await router.push({name: 'orderCreated', params: {orderId}})

}
</script>


<style scoped>
.main {
  padding: 8rem 0;
}

.contain {
  @apply container;
  margin: 0 auto;
}

.content {
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 12.8rem;
}

.text-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4.8rem;
  border-right: 1.6px solid #ccc;
  padding-right: 6.4rem;
}

.text-content input {
  width: 100%;
  box-shadow: 0 5px 10px #ddd;
  padding: 1.6rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 3.2rem;
  outline: none;
}

.text-content label {
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.star {
  color: red;
  font-size: 3rem;
  position: relative;
  top: 0.6rem;
}

.comment,
.diet-taste {
  grid-column: span 2;
  margin-bottom: 1.6rem;
}

#comment-input {
  display: block;
  width: 100%;
  box-shadow: 0 5px 10px #ddd;
  padding: 1.6rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;
  outline: none;
}

select {
  display: block;
  width: 100%;
  box-shadow: 0 5px 10px #ddd;
  padding: 1.6rem 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  outline: none;
}

.btn {
  grid-column: span 2;
  width: 100%;
  margin-top: 2.4rem;
}

.micro-container {
  padding-left: 3.2rem;
}

.btn-micro {
  padding: 1.6rem 1.6rem;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.btn-micro svg {
  color: #fff;
  font-size: 4.8rem;
}

.price-total-container {
  margin-top: 2rem;
}

.price-total {
  font-size: 2.4rem;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
}
</style>
