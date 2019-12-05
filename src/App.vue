<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
							<router-link
								to="/"
							>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
							</router-link>

        <p>KOMIT'S</p>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-right mt-4">
							<v-text-field
								label="Search"
								dense
								v-model="pencarianString"
							>
							</v-text-field>

							<v-spacer></v-spacer>

							<v-btn color="success"
								fab x-small dark
								:disabled="!dataTersedia"	
								@click="cariWhatWeDo()"
							>
								<v-icon>mdi-magnify</v-icon>
								</v-btn>
						</div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
//import axios from 'axios'

export default {
  name: 'App',
		data: function () {
			return {
				pencarianString: ''
			}
		},
		methods: {
			cariWhatWeDo() {
				this.$router.push('/blog/cari/' + this.pencarianString)
				this.pencarianString = ''
			}
		},
		computed: {
			dataTersedia() {
				return this.pencarianString != null && this.pencarianString != ''
			}
		}
};
</script>
