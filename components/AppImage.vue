<template>
  <picture>
    <source :srcset="getWebpUrl" />
    <img :src="src" :alt="alt" :class="imgClass" />
  </picture>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    imgClass: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
  computed: {
    getWebpUrl() {
      return this.src.replace(/jpe?g|png/gm, 'webp')
    },
  },
}
</script>