<template>
  <reactive-base
      :app="esApp.app"
      :credentials="esApp.credentials"
      :type="esApp.type"
    >
    <Layout>
    </Layout>
  </reactive-base>
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
// import { css } from 'emotion';
import { esApp } from '@/constants';
import Layout from '@/components/Layout.vue';

export default {
  name: 'app',
  data() {
    return {
      esApp,
    };
  },
  components: {
    Layout,
  },
};
</script>
