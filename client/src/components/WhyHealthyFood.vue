<template>
  <section id="why-healthy-food" class="why-healthy-food">
    <div class="why-healthy-food__img-wrapper">
      <img
          src="@/assets/images/why-health-important.png"
          alt="Why Health important picture"
          class="why-healthy-food__img"
      />
    </div>
    <div class="text-content">
      <h1 class="why-healthy-food__heading" style="color: #fff">Почему это важно?</h1>
      <div class="quote-wrapper">
        <p class="quote">
          Не позволяйте еде управлять вашей жизнью. Позвольте ей поддерживать ваше здоровье.
          <span class="quotation-mark">’’</span>
        </p>
      </div>
      <div class="why-healthy-food__arg why-healthy-food__arg--1">
        <h6 class="arg-heading mb-4">1</h6>
        <h6 class="arg-heading">Повышенный уровень энергии</h6>
        <p class="arg-description">Употребление здоровой пищи, богатой питательными веществами</p>
      </div>
      <div class="why-healthy-food__arg why-healthy-food__arg--2">
        <h6 class="arg-heading mb-4">2</h6>
        <h6 class="arg-heading">Контроль веса</h6>
        <p class="arg-description">Здоровая пища часто содержит меньше калорий</p>
      </div>
      <div class="why-healthy-food__arg why-healthy-food__arg--3">
        <h6 class="arg-heading mb-4">3</h6>
        <h6 class="arg-heading">Сильная иммунная система</h6>
        <p class="arg-description">Продукты с высоким содержанием питательных веществ, такие как фрукты и овощи</p>
      </div>
      <div class="why-healthy-food__arg why-healthy-food__arg--1">
        <h6 class="arg-heading mb-4">4</h6>
        <h6 class="arg-heading">Улучшение состояния пищеварительной системы</h6>
        <p class="arg-description">Способствуют хорошему пищеварению, предотвращают запоры</p>
      </div>
      <div class="why-healthy-food__arg why-healthy-food__arg--2">
        <h6 class="arg-heading mb-4">5</h6>
        <h6 class="arg-heading">Снижение числа хронических заболеваний</h6>
        <p class="arg-description">Благодаря обилию необходимых питательных веществ</p>
      </div>
      <div class="why-healthy-food__arg why-healthy-food__arg--3">
        <h6 class="arg-heading mb-4">6</h6>
        <h6 class="arg-heading">Ментальное здоровье</h6>
        <p class="arg-description">Поддержание здоровья мозга и уменьшение когнитивных нарушений</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-healthy-food {
  display: flex;
  position: relative;
  background: var(--tertiary-color);
  padding: 9.6rem 0;
  align-items: center;
}

.why-healthy-food__img-wrapper {
  position: absolute;
  left: -36rem;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.why-healthy-food__img {
  height: 90%;
}

.text-content {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 9.6rem;
  color: #fff;
  max-width: 120rem;
  margin-left: 48rem;
}

.why-healthy-food__heading {
  font-size: 5.2rem;
  font-weight: 700;
  line-height: 1.2;
  grid-column: 1 / 4;
}

.quote-wrapper {
  position: relative;
  grid-column: 4 / -1;
  background: var(--primary-color);
  padding: 3.2rem;
  margin-top: -18rem;
  max-width: 48rem;
  justify-self: flex-end;
}

.quote {
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.5;
}

.quotation-mark {
  position: absolute;
  font-size: 5.2rem;
  bottom: 0;
  right: 3.2rem;
}

.why-healthy-food__arg {
  grid-column: span 2;
  margin-right: 6.4rem;
}

.why-healthy-food__arg:last-child {
  margin: 0;
}

.arg-heading {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.4;
  font-family: Montserrat, sans-serif;
}

.arg-description {
  margin-top: 2.4rem;
  line-height: 1.5;
  font-size: 1.6rem;
  color: #ccc;
}
</style>
<script setup>
</script>
