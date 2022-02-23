import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleLeft, faHome, faInfoCircle, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add( faAngleDoubleLeft, faHome, faInfoCircle, faUtensils)


createApp(App)
    .use(createPinia())
    .use(router)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')
