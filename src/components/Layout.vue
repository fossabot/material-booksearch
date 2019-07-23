<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <!-- <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">My Title</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div> -->

        <div class="md-toolbar-row" :class="classes.appbarClass">
          <div class="md-toolbar-section-start">
            <span class="elevation-4" :class="classes.logoStyles">BS</span>
            <span class="md-title">My Title</span>
          </div>
        </div>
      </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
          <md-toolbar class="md-transparent" md-elevation="0">Filters</md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>
      <md-app-content>
        <p>sadnuiysadh</p>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
import { css } from 'emotion';
// import { esApp } from '@/constants';

const logoStyles = css`
  box-shadow: 2px 2px #1890ff, 4px 4px #096dd9;
  padding: 10px;
  font-weight: 600;
  background: white;
  color: #1890ff;
  border-radius: 2px;
  border: 1px solid #bae7ff;
`;

const appbarClass = () => css`
  flex-direction: row;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  box-shadow: none;
  background: #174ff4;
`;

export default {
  name: 'Layout',
  computed: {
    classes() {
      const { topBar } = this.$route.meta;

      const appbaseClasses = topBar !== false ? appbarClass() : ['elevation-0', appbarClass()].join(' ');
      return {
        logoStyles,
        appbar: appbaseClasses,
      };
    },
  },
  data: () => ({
    menuVisible: false,
  }),
};
</script>
