<template>
  <section class="hero">
    <div class="hero-content-wrapper">
      <div class="hero-text-box">
        <h1 class="heading-primary hero-heading" style="color: #eee">Здоровая еда – основа для <span
            class="hero-emphasize">твоего</span> роста и
          развития!</h1>
        <p class="hero-description" style="color: #ddd">
          Наши эксперты предлагают вкусные рецепты, рекомендации по сбалансированному питанию,
          истории, заставляющие задуматься, и новые способы сделать здоровый выбор более
          увлекательным.
        </p>
        <div class="hero-btn-wrapper">
          <a href="#food-programs" class="btn btn--full">Начать питаться правильно</a>
          <a href="#why-healthy-food" class="btn btn--outline"> Узнать больше</a>
        </div>
        <div class="clients-wrapper">
          <div class="clients-images">
            <img src="@/assets/images/customer-1.jpg" alt="Customer 1 Image"/>
            <img src="@/assets/images/customer-2.jpg" alt="Customer 2 Image"/>
            <img src="@/assets/images/customer-3.jpg" alt="Customer 3 Image"/>
          </div>
          <p class="clients-text">Более <span class="clients-em">500</span> довольных клиентов</p>
        </div>
      </div>
      <div class="hero-img"/>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero {
  padding: 16rem 0;
  background: linear-gradient(rgba(28, 32, 25, 0.8), rgba(28, 32, 25, 0.8)), url('@/assets/images/background.jpg');
  background-size: cover;
}

.hero-content-wrapper {
  margin: 0 auto;
  transform: translateY(1.6rem);
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 1.6rem;
  @apply container;
}

.hero-emphasize {
  box-shadow: inset 0 -6px 0 var(--primary-color);
}

.hero-description {
  font-size: 1.6rem;
  line-height: 1.5;
}

.hero-btn-wrapper {
  display: flex;
  gap: 1.6rem;
  margin-top: 4.8rem;
}

.clients-wrapper {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 6.4rem;
}

.clients-images {
  display: flex;
}

.clients-images img {
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-left: -1.6rem;
  border: 2px solid #fff;
}

.clients-images img:first-child {
  margin: 0;
}

.clients-text {
  color: #999;
  font-size: 1.6rem;
  font-weight: 600;
}

.clients-em {
  font-family: Montserrat, sans-serif;
  font-size: 1.8rem;
  color: #ccc;
}

</style>
