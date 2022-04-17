<template>
  <div class="signup-page">
    <app-header :is-default="false" />
    <section class="section section--nm signup">
      <div class="signup__bg">
        <app-video link="/videos/1" />
      </div>
      <div class="signup__blur"></div>
      <div class="container signup__wrapper">
        <div class="signup__text-block">
          <h1 class="signup__title">
            We'll Let You Know<br />
            When It's Time...
          </h1>
          <p class="signup__desc">
            With our public launch near,<br />
            be amongst the first to use SISU.
          </p>
        </div>
        <form novalidate class="signup__input-block" @submit.prevent="onSubmit">
          <app-input
            v-for="input in form.inputs"
            :id="input.id"
            ref="inputs"
            :key="input.name"
            class="form__input-wrapper"
            :type="input.type"
            :name="input.name"
            :required="input.required"
            :label="input.label"
            :placeholder="input.label"
            :validation="input.validation"
            :validation-text="input.validationText"
            @inputValue="onInputValue"
          />
          <button class="signup__btn">
            <span class="signup__btn-bg"></span>
            <span class="signup__text">Join!</span>
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import AppVideo from '~/components/AppVideo.vue'
import AppInput from '~/components/AppInput.vue'
import AppHeader from '~/components/AppHeader.vue'
import transition from '~/mixins/transition'

const URL = 'https://sheetdb.io/api/v1/f70cz05l9ntq9'

export default {
  components: { AppVideo, AppInput, AppHeader },
  mixins: [transition],

  data() {
    return {
      form: {
        hasErrors: true,
        inputs: [
          {
            required: true,
            id: 'email',
            name: 'data[Email]',
            label: 'Email',
            type: 'email',
            validation: 'email',
            validationText: 'incorrect email',
            error: true,
            value: '',
          },
        ],
      },
    }
  },

  methods: {
    onInputValue(data) {
      const idx = this.form.inputs.findIndex(el => el.id === data.id)
      this.form.inputs[idx].value = data.value
      this.form.inputs[idx].error = data.error
    },
    async onSubmit() {
      const inputs = this.form.inputs
      const isError = inputs.find(el => el.error)

      if (isError) {
        this.emmitError()
        return
      }

      const formData = new FormData()
      inputs.forEach(el => {
        formData.append(el.name, el.value)
      })

      try {
        await this.$store.commit('app/setLoading', true)
        await fetch(URL, {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        })
        this.$swal({
          title: 'Success!',
          text: 'Your email has been successfully registered',
          icon: 'success',
          confirmButtonText: 'Cool',
          confirmButtonColor: '#49D6BA',
        })
        this.resetForm()
      } catch (error) {
        console.log(error.message)
        this.error = true
      } finally {
        setTimeout(() => {
          this.$store.commit('app/setLoading', false)
        }, 400)
      }
    },
    emmitError() {
      this.$refs.inputs.forEach(input => input.throwError())
    },
    resetForm() {
      this.form.inputs?.forEach(inp => {
        inp.type === 'email' && (inp.error = true)
        inp.value = ''
      })

      this.$refs.inputs.forEach(input => input.reset())
      this.error = false
    },
  },
}
</script>