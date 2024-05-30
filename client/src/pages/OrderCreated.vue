<template>
  <main class="main">
    <div class="content">
      <h1 class="heading-secondary">Заказ №{{ $route.params.orderId }} был создан</h1>
      <div class="p-wrapper">
        <p class="moder-confirm">Дождитесь одобрение вашего заказа модератором</p>
        <p class="orders-referrer">Намжите
          <router-link class="orders-link" to="/orders">заказы</router-link>
          для просмотра заказов
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
.main {
  padding: 13.6rem 0;
}

.content {
  max-width: 64rem;
  margin: 0 auto;
  height: 24rem;
  box-shadow: -1px 1px 15px #ccc;
  position: relative;
}

.heading-secondary {
  text-align: center;
  background-color: var(--primary-color);
  color: #fff;
  padding: 3.2rem 1.6rem;
  margin: 0;
}

.moder-confirm,
.orders-referrer {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
}

.orders-link:link,
.orders-link:visited {
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 2px;
  transition: all 0.15s;
}

.orders-link:hover,
.orders-link:active {
  color: var(--primary-color);
}

.p-wrapper {
  padding: 3.6rem 4.8rem;
}

</style>
