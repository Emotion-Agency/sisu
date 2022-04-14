<template>
  <li class="home-7__plates-list">
    <div class="home-7__img-wrapper">
      <img :src="img" :alt="name" />
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