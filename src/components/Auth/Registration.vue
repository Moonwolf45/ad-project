<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Registration</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field prepend-icon="person" type="text" label="Name" :counter="10" :rules="nameRules"
                                          v-model="name"/>
                            <v-text-field prepend-icon="contact_mail" name="email" label="E-mail" type="email"
                                          :rules="emailRules" v-model="email"/>
                            <v-text-field prepend-icon="lock" name="password" label="Password" type="password"
                                          :counter="6" :rules="passwordRules" v-model="password"/>
                            <v-text-field prepend-icon="lock" name="confPassword" label="Confirm password" type="password"
                                          :counter="6" :rules="confPasswordRules" v-model="confPassword"/>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer/>
                        <v-btn color="primary" @click="onSubmit" :loading="loading" :disabled="!valid || loading">Create account</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confPassword: '',
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
      ],
      confPasswordRules: [
        v => !!v || 'Password is required',
        v => v === this.password || 'Password should match'
      ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('registerUser', user).then(() => {
          this.$router.push('/')
        }).catch(() => {})
      }
    }
  }
}
</script>
