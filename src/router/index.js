import Vue from 'vue'
import VueRouter from 'vue-router'
import WhatWeDo from '@/components/WhatWeDo.vue'
import SingleWhatWeDo from '@/components/SingleWhatWeDo.vue'
import SearchWhatWeDo from '@/components/SearchWhatWeDo.vue'

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
		},
		{
			path: '/blog/cari/:nama',
			name: 'cari-blog',
			props: true,
			component: SearchWhatWeDo
		}
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
