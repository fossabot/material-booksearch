import Vue from 'vue';
import ReactiveSearch from '@appbaseio/reactivesearch-vue';
import VueMaterial from 'vue-material';
import { Plugin } from 'vue-fragment';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;


Vue.use(ReactiveSearch);
Vue.use(VueMaterial);
Vue.use(Plugin);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
