<template>
  <main class="main">
    <div class="content">
      <div class="img"/>
      <div class="text-content">
        <h2 class="heading-secondary">Регистрация</h2>
        <form class="signup-form" @submit.prevent="handleSubmit">
          <input type="text" v-model="username" placeholder="Имя пользователя"/>
          <input type="email" v-model="email" placeholder="Email"/>
          <input type="password" v-model="password" placeholder="Пароль"/>
          <button class="btn btn--full">Создать аккаунт</button>
          <p class="refer-to-login">Уже имеется аккаунт?
            <router-link to="/login">Войдите</router-link>
          </p>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import {ref} from "vue"
import {signup} from "@/services/auth.ts";
import {useUserStore} from "@/stores";
import {useRouter} from "vue-router";

const username = ref('')
const email = ref('')
const password = ref('')

const store = useUserStore()
const router = useRouter()


async function handleSubmit() {
  try {
    signup(username.value, email.value, password.value).then((userId) => {
      localStorage.setItem('userId', userId)
      store.setUser({userId, username: username.value, email: email.value})
      router.push({name: 'home'})
    })

  } catch (err) {
    console.error(err.message)
    username.value = ""
    email.value = ""
    password.value = ""
  }
}

</script>

<style scoped>
.main {
  padding: 6.4rem 0;
}

.content {
  @apply container;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 4fr;
  height: 64rem;
  gap: 12.8rem;
}

.img {
  background: url('@/assets/images/eating-food.jpg');
  background-size: cover;
  border-radius: 9px;
}

.text-content {
  padding-top: 8rem;
}

.signup-form input {
  width: 100%;
  box-shadow: 0 5px 10px #ddd;
  padding: 1.6rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 3.2rem;
  outline: none
}

.btn {
  width: 100%;
  margin: 1.6rem 0 4.8rem 0;
}

.refer-to-login {
  text-align: center;
  font-size: 1.4rem;
}

.refer-to-login a:link {
  font-weight: bold;
}
</style>
