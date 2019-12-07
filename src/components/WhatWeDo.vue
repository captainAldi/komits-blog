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
				md="6"
				lg="4"
				v-for="item in fakeData"
				:key="item"
			>
				<v-skeleton-loader
      class="mx-auto"
						type="card"
    ></v-skeleton-loader>
			</v-col>
		</v-row>
	</v-container>

	<v-container fluid v-else transition="scroll-y-transition">
		<v-row>
			<v-col 
				cols="12"
				md="6"
				lg="4"
				v-for="item in wholeResponse"
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
//import axios from 'axios'

export default {
	props: ['wholeResponse', 'loading'],
	data: function () {
		return {
			isActive: false,
			fakeData: 6
		}
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