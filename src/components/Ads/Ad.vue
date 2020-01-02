<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-img :src="'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'" height="300px"></v-img>
                    <v-card-text>
                      <h1 class="text--primary"></h1>
                      <p></p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning" flat>Edit</v-btn>
                        <v-btn color="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
