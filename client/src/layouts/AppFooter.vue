<template>
  <footer class="footer">
    <div class="footer-content-wrapper">
      <div class="footer-top">
        <ul>
          <li class="mb-24">
            <a href="#" class="logo-link"> ErkinFood</a>
          </li>
          <li class="footer__links">
            <a href="https://t.me/erkinfood" target="_blank">
            <span>
              <IconTelegram/>
            </span>
            </a>

            <a href="https://api.whatsapp.com/send/?phone=77055850442&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%80%D1%83%D0%B9%D1%82%D0%B5+%D0%BC%D0%B5%D0%BD%D1%8F+%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0.&type=phone_number&app_absent=0"
               target="_blank">
              <IconWhatsapp/>
            </a>

            <a href="https://tiktok.com/erkinfood" target="_blank">
            <span>
              <IconTiktok/>
            </span>
            </a>
          </li>
        </ul>
        <div class="col-span-2"></div>
      </div>
      <hr>
      <div class="footer-bottom">
        <span>&copy;<span class="num">2024</span> ErkinFood. Все права защищены</span>
        <a href="mailto: erkinfood@gmail.com">erkinfood@gmail.com</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import IconTelegram from "@/components/icons/IconTelegram.vue";
import IconWhatsapp from "@/components/icons/IconWhatsapp.vue";
import IconTiktok from "@/components/icons/IconTiktok.vue";
</script>

<style scoped>
.footer {
  padding: 8rem 0 6.4rem 0;
  background: var(--tertiary-color);
}

.footer-content-wrapper {
  max-width: 128rem;
  margin: 0 auto;
  color: #fff;
}

.footer-top {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.logo-link:link,
.logo-link:visited {
  color: var(--primary-color);
  font-weight: 700;
  font-size: 3rem;
}

.footer__links {
  display: flex;
  align-items: center;
  font-size: 3rem;
  gap: 2.4rem;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 3px solid #3d3535;
  margin: 3.2rem 0;
  padding: 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  color: #bebcbc;
}

.num {
  font-family: Montserrat, sans-serif;
}
</style>

