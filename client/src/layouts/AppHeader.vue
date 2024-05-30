<template>
  <header class="header">
    <div class="nav-wrapper">
      <router-link class="logo-link" to="/"> DauTamaq</router-link>
      <nav class="nav">
        <ul class="nav-links">
          <li>
            <a class="nav-link" href="#food-programs">Программы</a>
          </li>

          <li>
            <a class="nav-link" href="#about-us">О нас</a>
          </li>

          <li>
            <router-link :to="{name: 'orders'}" class="nav-link">Заказы</router-link>
          </li>
        </ul>
      </nav>
      <ul class="contacts">
        <li class="contact-link">
          <a href="https://t.me/erkinfood" target="_blank">
            <span>
              <IconTelegram/>
            </span>

          </a>
        </li>
        <li class="contact-link">
          <a href="https://api.whatsapp.com/send/?phone=77055850442&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%80%D1%83%D0%B9%D1%82%D0%B5+%D0%BC%D0%B5%D0%BD%D1%8F+%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0.&type=phone_number&app_absent=0"
             target="_blank">
            <IconWhatsapp/>
          </a>
          <a href="tel:+77055850442" class="contact-number">+7-705-585-04-42</a>
        </li>
      </ul>
      <ul class="auth-links">
        <template v-if="!store.loggedIn">
          <li class="auth-link">
            <router-link to="/login">
              <button class="btn btn--outline">
                Войти
              </button>
            </router-link>
          </li>
          <li class="auth-link">
            <router-link to="/signup">
              <button class="btn btn--full">
                Регистрация
              </button>
            </router-link>
          </li>
        </template>
        <template v-else>
          <p class="username">@{{ currentUsername }}</p>
          <button class="btn btn--full" @click.prevent="logout">
            Выйти
          </button>
        </template>
      </ul>
    </div>
  </header>
</template>
<script setup>
import IconWhatsapp from "@/components/icons/IconWhatsapp.vue";
import IconTelegram from "@/components/icons/IconTelegram.vue";
import {useUserStore} from '@/stores'
import {computed} from "vue";

const store = useUserStore()

function logout() {
  store.unsetUser()
  localStorage.removeItem('userId')
}

const currentUsername = computed(() => {
  return store.getUser.username
})
</script>

<style scoped>
.header {
  padding: 1.6rem 0;
  background: var(--secondary-color);
}

.nav-wrapper {
  @apply container;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
}

.logo-link:link,
.logo-link:visited {
  color: var(--primary-color);
  font-weight: 700;
  font-size: 3.6rem;
}

.nav-links {
  display: flex;
  align-items: center;
  color: #333;
}


.nav-link:link,
.nav-link:visited {
  font-weight: 600;
  font-size: 1.6rem;
  transition: all 0.3s ease-out;
  letter-spacing: 0.5px;
  padding: 0 2.4rem 1.2rem 2.4rem;
  background-position: bottom left;
}


.contacts {
  display: flex;
  align-items: center;
  gap: 2.4rem;
}

.contact-link {
  display: flex;
  align-items: center;
}

.contact-link a:link,
.contact-link a:visited {
  display: inline-block;
  font-size: 3.2rem;
  padding: 0.4rem;
  transition: all 0.3s;
}

.contact-link a:hover,
.contact-link a:active {
  color: #333;
}

a.contact-number:link,
a.contact-number:visited {
  font-size: 1.6rem;
  font-family: Montserrat, sans-serif;
}


.nav-link:hover,
.nav-link:active {
  text-shadow: 0 0 0.01px black;
  background-image: linear-gradient(#555, #555);
  background-size: 1.4rem 2px;
  background-position: bottom center;
  background-repeat: no-repeat;
}

.auth-links {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.auth-links .btn {
  font-size: 1.6rem;
  padding: 1.2rem;
}

.btn--outline:hover,
.btn--outline:active {
  background: none;
  color: var(--primary-color);
}

.username {
  font-size: 1.6rem;
  font-weight: 600;
  margin-right: 1.2rem;
}
</style>
