<template>
		<v-container>
    <v-layout row wrap>
      <v-flex xs12
							v-for="item in filteredWhatWeDo"
							:key="item.ID"
						>
        <h2>{{item.judul}}</h2>
          <div>{{item.deskripsi}}</div>
										<p>{{item.ID}}</p>
      </v-flex>
    </v-layout>
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
    }
  },
  mounted () {
    axios
      .get('https://script.google.com/macros/s/AKfycbwOtWg76OZtuIZyISiFtuIVbRbD11GqI1YjsAjhIi7jSS_kVbwP/exec'+'?action=read_wwD')
      .then(response => {
								this.wholeResponse = response.data.records
      })
      .catch(error => {
        console.log(error)
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