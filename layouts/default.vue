<template>
  <div id="app">
    <app-grid />
    <ui-loader />
    <Nuxt />
  </div>
</template>

<script>
import AppGrid from '~/components/AppGrid.vue'
import UiLoader from '~/components/UiLoader.vue'
export default {
  components: { AppGrid, UiLoader },

  async mounted() {
    const { default: supportsWebP } = await import('supports-webp')

    if (await supportsWebP) {
      this.$store.commit('app/setIsWebp', true)
    } else {
      this.$store.commit('app/setIsWebp', false)
    }
    const { hello } = await import('~/scripts/utils/hello')
    hello()

    const { winSizes } = await import('~/scripts/utils/winSizes')
    const { resize } = await import('@emotionagency/utils')
    resize.on(winSizes)

    const { SmoothScroll } = await import('@emotionagency/smoothscroll')
    const { raf } = await import('@emotionagency/utils')

    window.ss = new SmoothScroll({
      el: document.documentElement,
      mobile: false,
      breakpoint: 1060,
      passive: false,
      isFixed: false,
      friction: 0.07,
      stepSize: 0.9,
      scrollbar: true,
      useKeyboard: false,
      raf,
    })

    this.$store.commit('app/setLoaded', true)
  },
}
</script>