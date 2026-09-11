import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../pages/About.vue'
import FoodAndCulture from '../pages/FoodAndCulture.vue'
import EventsAndFestivals from '../pages/EventsAndFestivals.vue'
import News from '../pages/News.vue'
import PlaceToVisit from '../pages/PlaceToVisit.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router