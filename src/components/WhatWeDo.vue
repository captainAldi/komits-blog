<template>
<v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>
<v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="item in wholeResponse"
        :key="item.ID"
        mb-2>
        

<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="item.foto"
    >
    </v-img>
				<v-card-title>{{item.judul}}</v-card-title>
				
    <v-card-text class="text--primary">
      <div>{{item.deskripsi}}</div>
      <div>{{item.ID}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        @click="SingleWhatWeDo(item.ID)"
      >
        View
      </v-btn>
    </v-card-actions>
  </v-card>

      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
	data: function () {
		return {
			wholeResponse: [],
      loading: true,
		}
	},
	created() {
		axios
			.get('https://script.google.com/macros/s/AKfycbwOtWg76OZtuIZyISiFtuIVbRbD11GqI1YjsAjhIi7jSS_kVbwP/exec'+'?action=read_wwD')
			.then(response => {
				this.wholeResponse = response.data.records
				this.loading = false
			})
	},
	methods: {
		SingleWhatWeDo (id) {
			this.$router.push('/blog/' + id)
		}
	}
}
</script>

<style scoped>
.v-progress-circular {
	margin: 1rem;
}
</style>