<template>
  <v-app>
    <v-toolbar app color="primary" :class="classes.appbar">
      <v-toolbar-title class="headline text-uppercase">
        <span :class="classes.logoStyles">BS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import { css } from 'emotion';
import HelloWorld from './components/HelloWorld.vue';

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
  padding: 10px;
  box-shadow: none;
  background: #174ff4;
`;

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    const { theme } = this.$vuetify;
    return {
      css,
      classes: {
        logoStyles,
        appbar: appbarClass(theme),
      },
      message: 'saomthiung',
    };
  },
};
</script>
