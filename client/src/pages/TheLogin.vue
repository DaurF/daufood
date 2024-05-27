<template>
  <main class="main">
    <div class="content">
      <div class="img"/>
      <div class="text-content">
        <h2 class="heading-secondary">Создать аккаунт</h2>
        <form class="signup-form">
          <input type="text" placeholder="Имя пользователя"/>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  padding: 6.4rem 0;
}

.content {
  @apply container;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  height: 64rem;
  gap: 12.8rem;
}

.img {
  background: url('@/assets/images/eating-food.jpg');
  background-size: cover;
  border-radius: 9px;
}

.text-content {

}

.signup-form input {
  width: 100%;
  box-shadow: -3px 3px 30px #ccc;
  padding: 1.2rem 2.4rem;
  font-size: 2rem;
}
</style>
