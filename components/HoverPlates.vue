<template>
  <li
    class="home-3__plates-list"
    :class="[isActive && 'home-3__plates-list--active']"
    @mouseenter="onMouseEnter"
    @touchstart="onMouseEnter"
  >
    <div class="home-3__plates-block">
      <h3 class="home-3__plates-title" v-html="title" />
      <a
        :href="buttonLink"
        target="_blank"
        rel="noreferer noopener"
        class="home-3__plates-button"
      >
        <span class="home-3__text-button">{{ buttonText }}</span>
      </a>
    </div>
    <div class="home-3__plates-figure">
      <app-image :src="img" :alt="title" />
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
    buttonText: {
      type: String,
      default: '',
    },
    buttonLink: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '/',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onMouseEnter() {
      this.$emit('hovered', this.title)
    },
  },
}
</script>