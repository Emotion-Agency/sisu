<template>
  <div class="input-bg">
    <div class="input-wrapper">
      <input
        :id="id"
        class="input form__input"
        :class="[focus && 'js-focus', error && 'js-error']"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        data-validation="required"
        :value="value"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />
      <small v-if="error" class="form__input-error">{{ validationText }}</small>
    </div>
  </div>
</template>

<script>
import validator from '~/scripts/utils/Validation'
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
      default: false,
    },
    validation: {
      type: String,
      default: '',
    },
    validationText: {
      type: String,
    },
  },
  data() {
    return {
      value: '',
      error: false,
      focus: false,
    }
  },

  mounted() {
    this.updateFields()
  },
  methods: {
    updateFields() {
      if (this.value.trim() !== '') {
        this.type !== 'select' && this.$refs.input.focus()
        this.$emit('inputValue', {
          id: this.id,
          value: this.value,
          error: this.error,
        })
      }
      if (this.type === 'textarea') {
        this.textAreaResize(this.$refs.input)
      }
    },
    onInput(e) {
      const target = e.target
      this.value = target.value

      if (this.type === 'textarea') {
        this.textAreaResize(target)
      }

      this.error = this.validationResult().includes(true)

      this.$emit('inputValue', {
        id: this.id,
        value: this.value,
        error: this.error,
      })
    },
    onFocus() {
      this.focus = true
    },

    onBlur() {
      if (!this.value.trim().length) {
        this.focus = false
      }
    },

    togglePass() {
      this.isShow = !this.isShow
    },

    validationResult() {
      if (!this.validation) {
        return [false]
      }
      const options = this.validation.split(' ')

      const validators = options.map(option => {
        const method = option.replace(/[\d(].{0,}/gm, '')
        const param = option.replace(/.{0,}\(|\)/gm, '')
        return { method, param }
      })

      return validators.map(
        v => !validator[v.method](this.value, v.param && v.param)
      )
    },
    throwError() {
      if (this.validationResult().includes(true)) {
        this.focus = true
        this.error = true
        this.$refs.input.focus()
      }
    },
    textAreaResize(el) {
      el.style.height = 'inherit'
      const height = el.scrollHeight + 1 + 'px'
      el.style.height = height
      this.$el.style.setProperty('--height', height)
    },
    reset() {
      this.value = ''
      this.error = false
      this.onBlur()
      this.updateFields()
      if (this.type === 'textarea') {
        this.$refs.input.style.height = 'inherit'
      }
    },
  },
}
</script>