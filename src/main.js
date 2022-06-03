import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faPeriscope } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faFacebookF)
library.add(faTwitter)
library.add(faYoutube)
library.add(faPinterestP)
library.add(faPeriscope)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')
