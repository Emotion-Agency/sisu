<template>
  <div class="signup-page">
    <app-header />
    <section class="section section--nm signup">
      <div class="signup__bg">
        <app-video link="/videos/1" />
      </div>
      <div class="container signup__wrapper">
        <div class="signup__text-block">
          <h1 class="signup__title">
            We'll Let You Know<br />
            When It's Time...
          </h1>
          <p class="signup__desc">
            With our public launch near,<br />
            be amongst the first to use SISU.
          </p>
        </div>
        <div class="signup__input-block">
          <app-input
            id="password"
            ref="password"
            class="form__input-wrapper"
            type="text"
            placeholder="Email"
            :required="true"
          />
          <button class="signup__btn">
            <span class="signup__btn-bg"></span>
            <span class="signup__text">Join!</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppVideo from '~/components/AppVideo.vue'
import AppInput from '~/components/AppInput.vue'
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: { AppVideo, AppInput, AppHeader },
}
</script>