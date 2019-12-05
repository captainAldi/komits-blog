<template>
<v-lazy
	v-model="isActive"
	:options="{
			threshold: .8
	}"
>
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

	<v-container v-else-if="!searchResponseDong.length">
		<div class="text-xs-center">
		<h2>Kegiatan "<span style="color: red">{{this.nama}}</span>" Tidak Ditemukan</h2>
		</div>
	</v-container>

	<v-container fluid v-else>
		<v-row>
			<v-col
				cols="12"
				md="6"
				lg="4"
			>
				<h2>Hasil Pencarian Untuk "<span style="color: red">{{this.nama}}</span>"</h2>
			</v-col>
		</v-row>
		<v-row>
			<v-col 
				cols="12"
				md="6"
				lg="4"
				v-for="item in searchResponseDong"
				:key="item.ID"
				>
					<v-card
							class="pa-2 mb-4"
							outlined
							tile
							:hover="true"
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
			</v-col>
		</v-row>
	</v-container>
</v-lazy>
</template>

<script>
import axios from 'axios'

export default {
	props: ['nama'],
	data: function () {
		return {
			wholeResponse: [],
      loading: true,
						isActive: false,
			searchResponse: [],
			noData: false
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
	computed: {
		searchResponseDong () {
			const pencarianStringKhusus = this.nama.toLowerCase()

			return this.wholeResponse.filter(coba1 => {
				const judulKhusus = coba1.judul.toLowerCase()
				return judulKhusus.indexOf(pencarianStringKhusus) > -1
			})
		},
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