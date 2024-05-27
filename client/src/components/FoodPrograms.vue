<template>
  <section class="food-programs" id="food-programs">
    <div class="food-programs-content-wrapper">
      <h2 class="heading-secondary">Программы</h2>
      <div class="food-program-list">
        <button
            class="btn food-program-btn"
            :class="{ 'food-program-btn--selected': prg.id === selPrg.id }"
            v-for="prg in programs"
            :key="prg.id"
            @click.prevent="selPrg = prg"
        >
          <div class="food-program__content">
            <span class="food-program-icon">
              <IconBodyLoss v-if="prg.id === 'loss'"/>
              <IconDaily v-else-if="prg.id === 'daily'"/>
              <IconMuscle v-else-if="prg.id === 'muscle'"/>
            </span>
            <span>{{ prg.name_ru }}</span>
          </div>
        </button>
      </div>
      <div class="selected-program">
        <div class="selected-program-content">
          <div
              class="selected-program-content__meal-wrapper"
              v-for="img in selPrg.images"
              :key="img.url"
          >
            <img :src="img.url" class="selected-program-content__meal" :alt="`${img.name_ru} 1`"/>
            <div class="selected-program-content__meal-text">
              <p class="selected-program-content__meal-text__heading">
                {{ img.name_ru }}
              </p>
              <p class="selected-program-content__meal-text__description">
                {{ img.description }}
              </p>
            </div>
          </div>
          <div class="selected-program-content__text">
            <h6 class="selected-program-title">
              <span class="selected-program-title__icon">
                <IconBodyLoss v-if="selPrg.id === 'loss'"/>
                <IconDaily v-else-if="selPrg.id === 'daily'"/>
                <IconMuscle v-else-if="selPrg.id === 'muscle'"/>
              </span>
              <span>
                {{ selPrg.name_ru }}
              </span>
            </h6>
            <p class="selected-program-description">
              {{ selPrg.description_ru }}
            </p>
            <div class="food-program-options">
              <p class="calories-header">Калорийность <span style="color: #999">• кКал</span></p>
              <div class="calories-options">
                <button
                    v-for="option in selPrg.calories_options"
                    :key="option.calories"
                    class="btn calories-options__btn"
                    :class="{
                    'calories-options__btn--selected':
                      option.prg_id === selCaloriesOption.prg_id &&
                      option.calories === selCaloriesOption.calories
                  }"
                    @click.prevent="selCaloriesOption = option"
                >
                  {{ option.calories }}
                </button>
              </div>
              <div class="days-header">
                <span>Количество дней</span>
<!--                <p>-->
<!--                  <span class="selected-program-price-per-day"-->
<!--                  >{{ selDaysOption.price }}-->
<!--                  </span>-->
<!--                  <span> ₸/день</span>-->
<!--                </p>-->
              </div>
              <div class="days-options">
                <button
                    v-for="option in daysOptions"
                    :key="option.priceTotal"
                    class="btn days-options__btn"
                    :class="{
                    'days-options__btn--selected':
                      option.prg_id === selDaysOption.prg_id && option.days === selDaysOption.days
                  }"
                    @click.prevent="selDaysOption = option"
                >
                  <span class="discount-mark" v-if="option.discount > 0">
                    {{ option.discount * 100 }}%
                  </span>
                  <span>{{ option.name_ru }}</span>
                </button>
              </div>
            </div>
            <div class="in-total">
              <div class="in-total-price">
                <p class="in-total-price__label">Итого:</p>
<!--                <p-->
<!--                    class="in-total-price__old-price"-->
<!--                    v-if="selDaysOption.oldPriceTotal !== selDaysOption.priceTotal"-->
<!--                >-->
<!--                  {{ selDaysOption.oldPriceTotal.toLocaleString() }} ₸-->
<!--                </p>-->
<!--                <p class="in-total-price__price">-->
<!--                  {{ selDaysOption.priceTotal.toLocaleString() }}₸-->
<!--                </p>-->
              </div>
              <a href="#" class="btn btn--full in-total-btn" @click.prevent="showMakingOrder = true">Оформить заказ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from 'vue'
import IconBodyLoss from '@/components/icons/IconBodyLoss.vue'
import IconDaily from '@/components/icons/IconDaily.vue'
import IconMuscle from '@/components/icons/IconMuscle.vue'
import {getDaysOptions} from "@/services/getDaysOptions";

const programs = [
  {
    id: 'daily',
    name_ru: 'Базированная',
    description_ru:
        'Этот план предназначен для людей, ведущих активный образ жизни и нуждающихся в энергии в течение всего дня. Программа включает пять приемов пищи: три основных блюда и два перекуса, которые помогают поддерживать энергию на высоком уровне без скачков глюкозы.',
    calories_options: [
      {
        prg_id: 'daily',
        calories: 2000,
        pricePerDay: 7200
      }
    ],
    images: [
      {
        url: 'public/daily-1.jpg',
        name_ru: 'Полезный куриный стир-фрай',
        description: '465 кКал • 35 г • 13 г • 47 г'
      }
    ]
  },
  {
    id: 'loss',
    name_ru: 'Похудение',
    description_ru:
        'Эта программа разработана для тех, кто стремится снизить вес через сбалансированное питание. Меню включает в себя низкокалорийные блюда, богатые питательными веществами, которые помогут удовлетворить суточные потребности организма, при этом снижая общее потребление калорий.',
    calories_options: [
      {
        prg_id: 'loss',
        calories: 750,
        pricePerDay: 5000
      },
      {
        prg_id: 'loss',
        calories: 1000,
        pricePerDay: 5500
      },
      {
        prg_id: 'loss',
        calories: 1500,
        pricePerDay: 6500
      }
    ],
    images: [
      {
        url: 'public/weight-loss-1.jpg',
        name_ru: 'Суп с фрикадельками и томатом',
        description: '330 кКал • 17 г • 12 г • 36 г'
      }
    ]
  },
  {
    id: 'muscle',
    name_ru: 'Набор массы',
    description_ru:
        'Эта программа предназначена для тех, кто целенаправленно стремится увеличить мышечную массу. Включает в себя высокопротеиновые блюда, которые обеспечивают необходимые аминокислоты для восстановления и роста мышц после тренировок.',
    calories_options: [
      {
        prg_id: 'muscle',
        calories: 2500,
        pricePerDay: 8000
      },
      {
        prg_id: 'muscle',
        calories: 3500,
        pricePerDay: 9000
      }
    ],
    images: [
      {
        url: 'public/muscle-1.jpg',
        name_ru: 'Бефстроганов с курицей',
        description: '425 кКал • 43 г • 23 г • 11 г'
      }
    ]
  }
]


const showMakingOrder = ref(false)

const selPrg = ref(programs[0])
const selCaloriesOption = ref(selPrg.value.calories_options[0])

const daysOptionsTemplate = ref([])
onMounted(async () => {
  daysOptionsTemplate.value = await getDaysOptions()
})

//     [
//   {
//     name_ru: '2 дня',
//     days: 2,
//     discount: 0
//   },
//   {
//     name_ru: '4 дня',
//     days: 4,
//     discount: 0.05
//   },
//   {
//     name_ru: '6 дня',
//     days: 6,
//     discount: 0.1
//   },
//   {
//     prg_id: 'loss',
//     name_ru: '12 дней',
//     days: 12,
//     discount: 0.15
//   },
//   {
//     name_ru: '24 дня',
//     days: 24,
//     discount: 0.18
//   },
//   {
//     name_ru: '30 дней',
//     days: 30,
//     discount: 0.22
//   }
// ]


const daysOptions = computed(() => {
  const {prg_id, price} = selCaloriesOption.value

  const options = daysOptionsTemplate.value.map((el) => {
    const newPricePerDay = Math.floor(price * (1 - el.discount))
    const totalPrice = newPricePerDay * el.days

    return {
      ...el,
      prg_id,
      pricePerDay: newPricePerDay,
      priceTotal: totalPrice,
      oldPriceTotal: price * el.days
    }
  })

  return options
})

const selDaysOption = ref(daysOptions.value[0])

watch(selPrg, (newPrg) => {
  selCaloriesOption.value = newPrg.calories_options[0]
})

watch(daysOptions, (newDaysOptions) => {
  selDaysOption.value = newDaysOptions[0]
})
</script>

<style scoped>
.food-programs {
  padding: 8rem 0;
  background: var(--secondary-color);
}

.food-programs-content-wrapper {
  margin: 0 auto;
  max-width: 128rem;
}

.food-program-list {
  display: flex;
  gap: 2.4rem;
  margin-bottom: 4.8rem;
}

.food-program__content {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}

.food-program-icon {
  position: absolute;
  left: 2.4rem;
  font-size: 2.4rem;
}

.food-program-btn {
  padding: 2rem 1.6rem;
  background: #dce3d8;
  font-size: 2rem;
  flex: 1 1 0%;
  border-radius: 999px;
  color: #53614b;
  transition: all 0.15s ease-out;
}

.food-program-btn:hover {
  box-shadow: 0 3px 15px #b9c7b1;
  transform: translateY(-0.4rem);
}

.food-program-btn--selected {
  font-weight: 700;
  background: var(--primary-color);
  color: #fff;
  /* box-shadow: inset 0 0 0 2px var(--primary-color); */
}

.selected-program {
  padding: 3.2rem;
  box-shadow: 0 15px 30px #d0dacb;
  border-radius: 36px;
  background: #fffefd;
}

.selected-program-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
}

.selected-program-content__meal {
  border-radius: 13px;
  width: 100%;
  height: 48rem;
  object-fit: cover;
  box-shadow: -1px 1px 5px #777;
  transition: all 0.3s ease-out;
}

.selected-program-content__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4.8rem;
  text-align: start;
}

.selected-program-title {
  display: flex;
  gap: 1.6rem;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 700;
}

.selected-program-title__icon {
  font-size: 3rem;
}

.selected-program-description {
  font-size: 1.4rem;
  line-height: 1.5;
  margin-top: 2.4rem;
}

.food-program-options {
  margin-top: 3.2rem;
}

.calories-header,
.days-header {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
}

.days-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.4rem;
}

.days-header p {
  font-weight: 700;
  font-size: 1.8rem;
}

.selected-program-price-per-day {
  font-size: 2.4rem;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
}

.calories-options,
.days-options {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: start;
  gap: 0.8rem;
  margin-bottom: 3.2rem;
}

.calories-options__btn-text-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.calories-options__btn-icon {
  margin-top: -0.2rem;
  font-size: 3rem;
}

.calories-options__btn,
.days-options__btn {
  text-wrap: none;
  font-family: sans-serif;
  box-shadow: inset 0 0 0 1px #999;
  padding: 1.2rem 1.6rem;
  color: #999;
  position: relative;
}

.calories-options__btn--selected,
.days-options__btn--selected {
  box-shadow: inset 0 0 0 2px #6e8264;
  color: #6e8264;
}

.selected-program-content__meal-wrapper {
  position: relative;
}

.selected-program-content__meal-text {
  position: absolute;
  left: 3rem;
  top: 50%;
  background: #fff;
  padding: 1.6rem 2.4rem;
  border-radius: 7px;
}

.selected-program-content__meal-text__heading {
  font-weight: 600;
  font-size: 1.8rem;
  color: #333;
}

.selected-program-content__meal-text__description {
  margin-top: 1.6rem;
  font-family: sans-serif;
  text-align: end;
  font-size: 1.2rem;
  color: #666;
}

.in-total {
  display: flex;
  justify-content: space-between;
  align-items: end;
  font-weight: 600;
  width: 100%;
  margin-top: auto;
}

.in-total-price__label {
  font-size: 1.6rem;
  font-weight: 700;
}

.in-total-price__old-price {
  font-size: 2rem;
  text-decoration: line-through;
  text-decoration-thickness: 1px;
  color: #999;
  font-weight: 500;
}

.in-total-price__old-price,
.in-total-price__price {
  font-family: Montserrat, sans-serif;
}

.in-total-price__price {
  font-size: 3.6rem;
  color: var(--primary-color);
  margin-top: 0.8rem;
}

.in-total-btn {
  padding: 2.4rem 4.8rem;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.discount-mark {
  position: absolute;
  top: -1.6rem;
  right: 0.4rem;
  font-size: 1.2rem;
  padding: 0.6rem;
  border-radius: 999px;
  background: var(--primary-color);
  color: #fff;
}

.heading-secondary {
  text-align: center;
}
</style>
