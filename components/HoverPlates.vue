<template>
  <li class="home-3__plates-list">
    <div class="home-3__plates-block">
      <h3 class="home-3__plates-title">{{ title }}</h3>
      <button class="home-3__plates-button">
        <span class="home-3__text-button">{{ text }}</span>
      </button>
    </div>
    <div class="home-3__plates-figure">
      <img :src="img" :alt="name" />
    </div>
  </li>
</template>

<script>
export default {
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
    name: {
      type: String,
      default: '',
    },
  },
}
</script>