import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faUserSecret, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(faUserSecret, faShoppingBasket)

Vue.component('font-awesome-icon', FontAwesomeIcon)
