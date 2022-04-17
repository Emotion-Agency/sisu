import { resize } from '@emotionagency/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export class OnScrollAppereance {
  constructor($el, opts = {}) {
    this.$el = $el
    this.offset = opts.offset || 0
    this.breakpoint = opts.breakpoint || 960

    this.resize = this.resize.bind(this)

    resize.on(this.resize)
  }

  resize() {
    if (window.innerWidth > this.breakpoint) {
      this.animation()
    }
  }

  animation() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$el,
        pin: false,
        end: `+=bottom`,
        scrub: 0.1,
      },
    })
    tl.to(this.$el, {
      x: 0,
      opacity: 1,
      ease: 'linear.none',
    })
  }
}
