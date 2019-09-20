<template>
  <v-app>
    <reactive-base
      :app="esApp.app"
      :credentials="esApp.credentials"
      :type="esApp.type"
    >
      <v-toolbar app color="primary" :class="classes.appbar">
        <v-toolbar-title class="headline text-uppercase elevation-4">
          <router-link to="/">
            <span class="elevation-4" :class="classes.logoStyles">BS</span>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <Search v-if="topBar" topBar />
      </v-toolbar>
      <v-content>
        <router-view />
        <v-footer
          app
          dark
          height="auto"
          color="#2f1b5e"
        >
          <v-card-actions color="info" class="white--text">
            This app is part of the ReactiveSearch Marketplace. You can check more apps here.
          </v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            ripple
            color="#FFFFFF"
            class="result-btn ml-auto black--text"
            to="https://gumroad.com/l/DHtTHl"
          >
            Buy Now
          </v-btn>
        </v-footer>
      </v-content>
  </reactive-base>
  </v-app>
</template>

<style>
 .hidden {
   display: none !important;
 }

 .faded {
   color: #8c8c8c !important;
 }

 .pointer, .cursor {
   cursor: pointer;
 }

</style>

<script>
import { css } from 'emotion';
import { esApp } from '@/constants';
import Search from '@/components/Search.vue';

const logoStyles = css`
  box-shadow: 2px 2px #1890ff, 4px 4px #096dd9;
  padding: 10px;
  font-weight: 600;
  background: white;
  color: #1890ff;
  border-radius: 2px;
  border: 1px solid #bae7ff;
`;

const appbarClass = theme => css`
  z-index: ${theme.zIndex.drawer + 1};
  flex-direction: row;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  box-shadow: none;
  background: #174ff4;
`;

export default {
  name: 'App',
  computed: {
    topBar() {
      return this.$route.meta.topBar !== false;
    },
    classes() {
      const { theme } = this.$vuetify;
      const { topBar } = this.$route.meta;

      const appbaseClasses = topBar !== false ? appbarClass(theme) : ['elevation-0', appbarClass(theme)].join(' ');
      return {
        logoStyles,
        appbar: appbaseClasses,
      };
    },
  },
  data() {
    return {
      esApp,
    };
  },
  components: {
    Search,
  },
};
</script>
