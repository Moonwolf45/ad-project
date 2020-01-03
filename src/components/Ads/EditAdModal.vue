<template>
  <v-dialog v-model="modal" width="400px">
    <v-btn class="warning" flat slot="activator">Edit</v-btn>

    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary">Edit Ad</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider/>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field name="title" label="title" type="text" v-model="editedTitle"/>
              <v-textarea name="description" label="description" v-model="editedDescription"/>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider/>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer/>
              <v-btn flat @click="onCancel">Cancel</v-btn>
              <v-btn class="success" flat @click="onSave">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['ad'],
  data () {
    return {
      modal: false,
      editedTitle: this.ad.title,
      editedDescription: this.ad.description
    }
  },
  methods: {
    onCancel () {
      this.editedTitle = this.ad.title
      this.editedDescription = this.ad.description
      this.modal = false
    },
    onSave () {
      if (this.editedTitle !== '' && this.editedDescription !== '') {
        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id
        })
        this.modal = false
      }
    }
  }
}
</script>
