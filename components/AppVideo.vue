<template>
  <video playsinline="" muted autoplay loop>
    <source :src="`${link}.webm`" type="video/webm" />
    <source :src="`${link}.mp4`" type="video/mp4" />
  </video>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
  },
}
</script>