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
      <div class="container grid home-3__wrapper"></div>
    </section>
  </main>
</template>

<script>
import AppButton from '~/components/AppButton.vue'

export default {
  components: { AppButton },
}
</script>