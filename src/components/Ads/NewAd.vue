<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form ref="form" v-model="valid" validation class="mb-3">
          <v-text-field name="title" label="Ad title" type="text" :rules="[v => !!v || 'Title is required']"
                        v-model="title" required/>
          <v-textarea name="description" label="Ad description" type="text"
                      :rules="[v => !!v || 'Description is required']" v-model="description"/>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="warning">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="" height="100" alt="">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch v-model="promo" label="Add to promo?" color="primary"/>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer/>
            <v-btn class="success" @click="createAd()" :disabled="!valid || loading" :loading="loading">Create ad</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageScr: ''
        }

        this.$store.dispatch('createAd', ad).then(() => {
          this.$router.push('list')
        }).catch(() => {})
      }
    }
  }
}
</script>
