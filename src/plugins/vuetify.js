import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify, {
  theme: {
    primary: '#174ff4',
    secondary: '#eaeaea',
    accent: '#90caf9',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    zIndex: {
      drawer: 2,
    },
  },
  iconfont: 'md',
});
