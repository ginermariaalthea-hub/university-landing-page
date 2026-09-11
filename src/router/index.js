import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

import About from '../pages/About.vue'
import FoodAndCulture from '../pages/FoodAndCulture.vue'
import EventsAndFestivals from '../pages/EventsAndFestivals.vue'
import News from '../pages/News.vue'
import PlaceToVisit from '../pages/PlaceToVisit.vue'

import SampleData from '../views/SampleData.vue'
import SampleMethods from '../views/SampleMethods.vue'
import SampleVmodel from '../views/SampleVmodel.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/places',
    name: 'Places',
    component: PlaceToVisit
  },

  {
    path: '/food',
    name: 'FoodAndCulture',
    component: FoodAndCulture
  },

  {
    path: '/events',
    name: 'EventsAndFestivals',
    component: EventsAndFestivals
  },

  {
    path: '/news',
    name: 'News',
    component: News
  },

  {
    path: '/sample-data',
    name: 'SampleData',
    component: SampleData
  },

  // Vue Part 2 - Methods
  {
    path: '/sample-methods',
    name: 'SampleMethods',
    component: SampleMethods
  },

  {
    path: '/sample-vmodel',
    name: 'SampleVmodel',
    component: SampleVmodel
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router