import Vue from 'vue'
import VueRouter from 'vue-router'
import WhatWeDo from '@/components/WhatWeDo.vue'
import SingleWhatWeDo from '@/components/SingleWhatWeDo.vue'

Vue.use(VueRouter)

const routes = [
		{
			path: '/',
			name: 'whatwedo',
			component: WhatWeDo
		},
		{
			path: '/blog/:id',
			name: 'blog',
			props: true,
			component: SingleWhatWeDo
		}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
