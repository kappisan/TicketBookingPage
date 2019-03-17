import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBitcoin, faBtc, faStripe } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(faBitcoin)
library.add(faBtc)
library.add(faStripe)

Vue.component('font-awesome-icon', FontAwesomeIcon)
