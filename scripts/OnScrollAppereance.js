import { resize } from '@emotionagency/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export class OnScrollAppereance {
  constructor($els = [], opts = {}) {
    this.$els = $els
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
    this.$els.forEach(el => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          pin: false,
          // start: `center`,
          end: `+=bottom`,
          // scroller: '#scroll-container',
          scrub: 0.1,
        },
      })
      tl.to(el, {
        x: 0,
        opacity: 1,
        ease: 'linear.none',
      })
    })
  }
}
