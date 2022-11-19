
import {createRouter, createWebHistory} from 'vue-router'

import Index from '@/components/Index.vue'
import Food from '@/components/Food.vue'
import Drink from '@/components/Drink.vue'
import Medicine from '@/components/Medicine.vue'

//Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/:warehouseId/food',
    name: 'food',
    component: Food
  },
  {
    path: '/:warehouseId/drink',
    name: 'drink',
    component: Drink
  },
  {
    path: '/:warehouseId/medicine',
    name: 'medicine',
    component: Medicine
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router