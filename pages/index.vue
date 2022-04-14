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
    <section class="section section--pb home-2">
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
    <section class="section section--pb home-3">
      <div class="container home-3__wrapper">
        <div class="home-3__text">
          <h2 class="home-3__title">Unrivalled Custom isability</h2>
          <p class="home-3__desc">
            Configure Dashboards to focus on the asset and performance data that
            matters to you most, no matter your level of knowledge or areas of
            interest.
          </p>
        </div>
        <div class="home-3__hover-plates">
          <ul class="home-3__plates-wrapper">
            <hover-plates
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
    <section class="section section--pb home-4">
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
    <section class="home-5">
      <div class="container grid home-5__wrapper">
        <h3 class="home-5__title">
          “SISU enables traders and investors of all backgrounds to track their
          crypto portfolio performance better than ever before. We’re very
          excited to see a portfolio tracker this wide-ranging and
          customisable.”
        </h3>
        <p class="home-5__desc">
          Etiënne vantKruys <br /><span class="home-5__desc-med">- TRGC</span>
        </p>
      </div>
    </section>
    <section class="section section--pb home-6">
      <div class="container grid home-6__wrapper">
        <img class="home-6__img" src="/images/home-6.jpg" alt="Image" />
        <div class="home-6__block">
          <h2 class="home-6__title">Modular & Adaptive</h2>
          <p class="home-6__desc">
            With innovative features such as drag and drop widgets and multiple
            dashboard creation, SISU offers more functionality than any other
            crypto portfolio tracker.
          </p>
          <app-button class="home-6__btn" text="Create Dashboard" />
        </div>
      </div>
    </section>
    <section class="section section--pb home-7">
      <div class="container home-7__wrapper">
        <h2 class="home-7__title">Get More with SISU</h2>
        <ul class="grid home-7__plates">
          <app-plates
            v-for="plate in 4"
            :key="plate"
            img="/images/color-figure(2).jpg"
            name="Figure"
            title="Connect"
            text="We fetch read-only data related from crypto wallets, exchange and on-chain addresses; you keep full custody of your funds at all times."
          />
        </ul>
      </div>
    </section>
    <section class="section grid home-8">
      <div class="container home-8__wrapper">
        <div class="home-8__block">
          <h2 class="home-8__title">Stay Connected</h2>
          <p class="home-8__desc">
            Following our social media profiles means that you stay up to date
            with regular integrations and platform updates.<br />
            <br />
            You can also explore SISU’s game changing features and learn how to
            get the best out of the platform by diving into the SISU knowledge
            base
          </p>
        </div>
      </div>
      <div class="home-8__img-wrapper">
        <img class="home-8__img" src="/images/home-8.jpg" alt="Image" />
      </div>
    </section>
  </main>
</template>

<script>
import AppButton from '~/components/AppButton.vue'
import HoverPlates from '~/components/HoverPlates.vue'
import AppPlates from '~/components/AppPlates.vue'

export default {
  components: { AppButton, HoverPlates, AppPlates },
}
</script>