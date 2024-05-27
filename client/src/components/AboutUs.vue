<template>
  <section class="about-us">
    <div class="about-us-content-wrapper">
      <div class="about-us__img-wrapper">
        <!--        <img class="about-us__img" src="@/assets/images/some-guy.png" alt="About us image of a guy">-->
      </div>
      <div>
        <h3 class="heading-tertiary">О нас</h3>
        <p class="about-us-paragraph">
          Мы ErkinFood. Мы верим, что здоровый образ жизни не обязательно должен быть сложным или приносящим страдания.
          Почему?<br>
          Ваше сердце - самая большая угроза для вашей жизни. На самом деле, ваше сердце, скорее всего, убьет вас, чем
          автомобильная авария, насилие с применением огнестрельного оружия или рак.<br>
          Большинство общепринятых советов советуют вам лучше питаться и больше заниматься спортом. Но подумайте, если
          бы это было так просто, вы бы уже это сделали. Здоровый образ жизни должен быть:
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-us {
  padding: 8rem 0;
  background: #fefdfa;
}

.about-us-content-wrapper {
  max-width: 128rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3.2rem;
}

.about-us-paragraph {
  font-size: 1.6rem;
  line-height: 1.5;
  color: #333;
}


.about-us__img-wrapper {
  background-image: url('@/assets/images/people.png'), linear-gradient(rgb(252, 247, 239), rgb(252, 247, 239));
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

</style>
<script setup>
</script>
