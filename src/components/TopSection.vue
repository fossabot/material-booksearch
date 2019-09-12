<template>
 <div :class="headerStyles">
    <h1>The BookSearch App</h1>
    <h2>Search Books & more.</h2>
    <Search />
  </div>
</template>

<script>
import { css } from 'emotion';
import Search from '@/components/Search.vue';

const headerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #174ff4;
  padding: 2rem 1rem;
  h1 {
    font-size: 3rem;
    margin: 1rem auto;
    font-weight: 500;
    color: #f7f7f7;
  }
  h2 {
    font-weight: 500;
    color: #eee;
    font-size: 1.6rem;
    margin: 0 0 1rem;
  }
  @media (max-width: 425px) {
    h1 {
      font-size: 1.9rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export default {
  name: 'TopSection',
  data: () => ({
    headerStyles,
  }),
  components: {
    Search,
  },
};
</script>

<style>

</style>
