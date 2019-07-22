import Vue from 'vue';
import ReactiveSearch from '@appbaseio/reactivesearch-vue';
import { Plugin } from 'vue-fragment';

import '@/plugins/vuetify';

import App from '@/App.vue';
import router from '@/router';

import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;


Vue.use(ReactiveSearch);
Vue.use(Plugin);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
