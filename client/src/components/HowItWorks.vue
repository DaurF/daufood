<template>
  <section class="how-it-works">
    <div class="how-it-works-content-wrapper">
      <div class="how-it-works__item" v-for="(step, i) in steps" :key="step.code">
        <p class="how-it-works__item-step">Шаг <span class="step-number">{{ i + 1 }}</span>.</p>
        <div class="flex gap-6 items-center">
          <span class="how-it-works__item-icon">
            <IconDocument v-if="step.code === 'order'"/>
            <IconCall v-else-if="step.code === 'call'"/>
            <IconDelivery v-else-if="step.code === 'delivery'"/>
            <IconGoal v-else-if="step.code === 'goal'"/>
          </span>
          <span class="how-it-works__item-text">
            {{ step.name_ru }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconDocument from "@/components/icons/IconDocument.vue";
import IconCall from "@/components/icons/IconCall.vue";
import IconDelivery from "@/components/icons/IconDelivery.vue";
import IconGoal from "@/components/icons/IconGoal.vue";

const steps = [
  {code: 'order', name_ru: 'Оформляете заказ'},
  {code: 'call', name_ru: 'Созваниваемся и подтверждаем'},
  {code: 'delivery', name_ru: 'Доставляем еду по утрам'},
  {code: 'goal', name_ru: 'Достигаете своей цели'}
]
</script>

<style scoped>
.how-it-works {
  padding: 3.2rem 0 4.8rem 0;
  background: var(--secondary-color);
}

.how-it-works-content-wrapper {
  display: flex;
  max-width: 120rem;
  margin: 0 auto;
  justify-content: space-between;

}

.how-it-works__item-step {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  text-align: end;
}

.how-it-works__item-icon {
  display: inline-block;
  font-size: 2.4rem;
  padding: 0.8rem;
  background: #dce3d8;
  border-radius: 99px;
}

.how-it-works__item-text {
  font-size: 1.4rem;
  font-weight: 600;
}

.step-number {
  font-family: Montserrat, sans-serif;
}

</style>
