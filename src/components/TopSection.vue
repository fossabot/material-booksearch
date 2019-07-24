<template>
 <div :class="headerStyles">
    <h1>The BookSearch App</h1>
    <h2>Search Books & more.</h2>
    <DataSearch
      :className="inputContainerStyles"
      componentId="homesearch"
      :dataField="[
        'authors',
        'original_title',
        'original_title.autosuggest',
        'original_title.raw',
        'original_title.search',
        'authors.autosuggest',
        'authors.raw',
        'authors.search',
      ]"
      :fuzziness="2"
      placeholder="Search for books & author"
      autosuggest
      :fieldWeights="[2, 1, 1, 1, 2, 1, 1, 1]"
      :onValueSelected="pushBook"
    />
  </div>
</template>

<script>
import { css } from 'emotion';

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

const inputContainerStyles = css`
  margin: 2em 0.5em;
  width: 50%;
  min-width: 200px;

  @media (max-width: 768px) {
    width: 80%;
  }

  input {
    padding: 15px 20px 15px 40px;
    font-size: 1rem;
    height: auto;
    border: 0;
    box-shadow: 0 10px 5px -5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: all ease 0.2s;
  }

  input:hover {
    box-shadow: 0 10px 5px -6px rgba(0, 0, 0, 0.1);
  }
`;

const resultStyles = css`
  padding: 20px 40px;
  overflow: hidden;
  @media (max-width: 576px) {
    padding: 20px;
  }
`;


export default {
  name: 'TopSection',
  data: () => ({
    headerStyles,
    inputContainerStyles,
    resultStyles,
  }),
  methods: {
    pushBook (value) {
      console.log('called', value);
      this.$router.push(`/search/?Search="${value}"`);
    }
  }
};
</script>

<style>

</style>
