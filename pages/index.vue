<template>
  <main>
    <section class="section home">
      <div class="home__bg"></div>
      <div class="container home__wrapper">
        <div class="home__block">
          <h1 class="home__title">Your Assets, Your Dashboard.</h1>
          <p class="home__desc">
            A crypto portfolio tracker designed for a new generation of digital
            assets.
          </p>
        </div>
      </div>
    </section>
    <section class="section home-2">
      <div class="container grid home-2__wrapper">
        <img class="home-2__img" src="/images/home-2.jpg" alt="Image" />
        <div class="home-2__block">
          <h2 class="home-2__title">Everything In One Place</h2>
          <p class="home-2__desc">
            Track the performance of your crypto assets across a wide variety of
            popular exchanges, blockchain networks and DeFi protocols with just
            one app.
          </p>
          <app-button class="home-2__btn" text="Quick Start" />
        </div>
      </div>
    </section>
    <section class="section home-3">
      <div class="container home-3__wrapper">
        <div class="home-3__text">
          <h2 class="home-3__title">Unrivalled Custom isability</h2>
          <p class="home-3__desc">
            Configure Dashboards to focus on the asset and performance data that
            matters to you most, no matter your level of knowledge or areas of
            interest.
          </p>
        </div>
        <div class="home-3__app-plates">
          <ul class="home-3__plates-wrapper">
            <app-plates
              v-for="plate in 4"
              :key="plate"
              img="/images/color-figure.jpg"
              title="Crypto Newbie"
              text="info ↗"
              name="Figure"
            />
          </ul>
        </div>
        <img
          class="home-3__result-plate"
          src="/images/result-plate.jpg"
          alt="Image"
        />
      </div>
    </section>
    <section class="section home-4">
      <div class="container grid home-4__wrapper">
        <img class="home-4__img" src="/images/home-4.jpg" alt="Image" />
        <div class="home-4__block">
          <h2 class="home-4__title">Get the Bigger Picture</h2>
          <p class="home-4__desc">
            Everything from leverage trades to DeFi positions can be tracked
            within your Dashboards, giving you a bird’s eye view of your
            portfolio’s overall performance.
          </p>
          <app-button class="home-4__btn" text="Learn More" />
        </div>
      </div>
    </section>
    <section class="section home-5">
      <div class="container grid home-5__wrapper">
        <h3 class="home-5__title">
          “SISU enables traders and investors of all backgrounds to track their
          crypto portfolio performance better than ever before. We’re very
          excited to see a portfolio tracker this wide-ranging and
          customisable.”
        </h3>
        <p class="home-5__desc">Etiënne vantKruys <br />- TRGC</p>
      </div>
    </section>
    <section class="section home-6">
      <div class="container home-6__wrapper"></div>
    </section>
    <section class="section home-7">
      <div class="container home-7__wrapper"></div>
    </section>
  </main>
</template>

<script>
import AppButton from '~/components/AppButton.vue'
import AppPlates from '~/components/AppPlates.vue'

export default {
  components: { AppButton, AppPlates },
}
</script>