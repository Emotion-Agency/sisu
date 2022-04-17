<template>
  <li class="home-7__plates-list">
    <div class="home-7__img-wrapper">
      <app-image :src="img" :alt="title" />
    </div>
    <div class="home-7__text-wrapper">
      <h3 class="home-7__plate-title">{{ title }}</h3>
      <p class="home-7__desc">
        {{ text }}
      </p>
    </div>
  </li>
</template>

<script>
import AppImage from './AppImage.vue'
export default {
  components: { AppImage },
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '/',
    },
  },
  mounted() {
    setTimeout(async () => {
      const { OnScrollAppereance } = await import(
        '~/scripts/OnScrollAppereance'
      )
      new OnScrollAppereance(this.$el)
    }, 1000)
  },
}
</script>