<template>
  <button class="btn">
    <span class="btn__bg"></span>
    <span class="btn__text">{{ text }}</span>
    <span class="btn__arrow">
      <svg
        class="btn__svg-arrow"
        width="23"
        height="20"
        viewBox="0 0 23 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.17 0L10.89 2.25L16.5 7.89H0V11.28H16.47L10.89 16.89L13.17 19.14L22.2 9.75V9.39L13.17 0Z"
          fill="#333333"
        />
      </svg>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>