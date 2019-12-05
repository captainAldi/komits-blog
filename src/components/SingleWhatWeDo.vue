<template>
<v-container fluid v-if="loading">
		<v-row>
			<v-col 
				cols="12"
				align="center"
				justify="center"
			>
				<v-progress-circular
					indeterminate
					:size="150"
					:width="8"
					color="blue">
				</v-progress-circular>
				<p>Sedang Memuat Data Mohon Tunggu</p>
			</v-col>
		</v-row>
	</v-container>

	<v-container v-else>
		<v-row>
			<v-col
				cols="12"
				align="center"
				justify="center"
				v-for="item in filteredWhatWeDo"
				:key="item.ID"
			>
				<v-card
							class="pa-2 mb-4"
							outlined
							tile
					>
							<v-img
									class="white--text align-end"
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
									>
											Tombol
									</v-btn>
							</v-card-actions>
					</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import axios from 'axios'
//import WhatWeDoVue from './WhatWeDo.vue'

export default {
  props: ['id'],
  data () {
    return {
						wholeResponse: [],
						loading: true,
    }
  },
  mounted () {
    axios
      .get('https://script.google.com/macros/s/AKfycbwOtWg76OZtuIZyISiFtuIVbRbD11GqI1YjsAjhIi7jSS_kVbwP/exec'+'?action=read_wwD')
      .then(response => {
								this.wholeResponse = response.data.records
								this.loading = false
      })
  },
		computed: {
			filteredWhatWeDo () {
				return this.wholeResponse.filter(coba => {
					return this.id == coba.ID
				})
			}
		}
}
</script>

<style>

</style>