import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBitcoin, faBtc } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(faBitcoin)
library.add(faBtc)

Vue.component('font-awesome-icon', FontAwesomeIcon)
