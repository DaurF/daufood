<template>
  <section class="faq">
    <div class="faq-content-wrapper">
      <h2 class="heading-secondary">Часто задаваемые вопросы</h2>
      <ul class="questions">
        <li class="question-answer" v-for="(qa, i) in questions_answers" :key="qa.question"
            :class="{'question-answer--selected': selQuestion === i}">
          <button class="question" @click.prevent="handleSelect(i)">
            <span class="question-text">
              {{ qa.question }}
            </span>
            <span v-show="selQuestion !== i">
              <IconPlus/>
            </span>
            <span v-show="selQuestion === i">
              <IconMinus/>
            </span>
          </button>
          <div v-show="selQuestion === i" class="answer">
            Сделать это наверняка довольно сложно, даже если вы пройдете фитнес-тест на определение базового
            метаболизма, все равно день ото дня уровень энергозатрат будет колебаться. Мы можем предложить вам одну из
            наших программ, а далее будем отслеживать результаты и оценивать их. В случае чего всегда можно
            откорректировать рацион в плюс или минус.
          </div>
        </li>
      </ul>
      <p class="questions-left">Остались вопросы? Позвоните на <a class="contact-number" href="tel:+77055850442">+7-705-585-04-42</a>
      </p>
    </div>
  </section>
</template>

<script setup>
import IconPlus from "@/components/icons/IconPlus.vue";
import IconMinus from "@/components/icons/IconMinus.vue";
import {ref} from "vue";

const selQuestion = ref(null);

const questions_answers = [
  {
    question: 'Как подобрать калорийность рациона',
    answer: 'Сделать это наверняка довольно сложно, даже если вы пройдете фитнес-тест на определение базового метаболизма, все равно день ото дня уровень энергозатрат будет колебаться. Мы можем предложить вам одну из наших программ, а далее будем отслеживать результаты и оценивать их. В случае чего всегда можно откорректировать рацион в плюс или минус.'
  },
  {
    question: 'На сколько дней можно заказать питание и какие результаты я получу?',
    answer: 'Заказать питание можно на любое количество дней. Для достижения результата мы предлагаем полный 28-дневный курс питания на 4 недели с бесплатной доставкой. Вы получаете рацион из 6 блюд на 5 приемов пищи, то есть, завтрак, второй завтрак, обед (первое, второе блюдо), полдник и ужин.'
  },

]

function handleSelect(i) {
  if (selQuestion.value === i) {
    selQuestion.value = null;
  } else {
    selQuestion.value = i;
  }
}
</script>

<style scoped>
.faq {
  padding: 4.8rem 0;
}

.faq-content-wrapper {
  max-width: 96rem;
  margin: 0 auto;
}

.heading-secondary {
  text-align: center;
}

.question-answer {
  padding: 2.4rem 0 1.6rem 0;
  box-shadow: inset 0 -2px 0 #ddd;
}

.question-answer:first-child {
  padding: 0 0 1.6rem 0;
}

.question-answer--selected {
  box-shadow: none;
}

.questions {
  margin-bottom: 4.8rem;
}

.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 3rem;
}

.question-text {
  font-size: 2rem;
  font-weight: 500;
}

.answer {
  font-size: 1.6rem;
  line-height: 1.5;
  margin-top: 2.4rem;
}

.questions-left {
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
}

.contact-number:link,
.contact-number:visited {
  font-family: Montserrat, sans-serif;
}

</style>


<!--.v-enter-active,-->
<!--.v-leave-active {-->
<!--  transition: opacity 0.3s ease;-->
<!--}-->

<!--.v-enter-from,-->
<!--.v-leave-to {-->
<!--  opacity: 0;-->
<!--}-->

