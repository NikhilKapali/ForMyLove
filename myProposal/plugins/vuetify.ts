import '@mdi/font/css/materialdesignicons.css'
import { MotionPlugin } from '@vueuse/motion'


import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
      
  })
  app.vueApp.use(vuetify)
  app.vueApp.use(MotionPlugin)
})