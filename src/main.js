import Vue from 'vue';

import ReactiveSearch from '@appbaseio/reactivesearch-vue';
import { Plugin } from 'vue-fragment';

import App from '@/App.vue';
import router from '@/router';

Vue.config.productionTip = false;


Vue.use(ReactiveSearch);
Vue.use(Plugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
