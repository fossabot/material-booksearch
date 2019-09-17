<template>
  <DataSearch
    :className="topBar ? inputContainerStylesTopBar : inputContainerStyles"
    :componentId="topBar ? 'topsearch' : 'Search'"
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
    URLParams
    showIcon
    :fieldWeights="[2, 1, 1, 1, 2, 1, 1, 1]"
    @valueSelected="pushBook"
  >
    <template
      slot="renderAllSuggestions"
      slot-scope="{
        currentValue,
        isOpen,
        getItemProps,
        getItemEvents,
        highlightedIndex,
        suggestions,
        parsedSuggestions,
      }"
    >
      <suggestions
        v-if="suggestions && suggestions.length > 0 && isOpen"
        :currentValue="currentValue"
        :suggestions="suggestions"
        :highlightedIndex="highlightedIndex"
        :parsedSuggestions="parsedSuggestions"
      />
    </template>
  </DataSearch>
</template>

<script>
import { css } from 'emotion';
import Suggestions from '@/components/Suggestions.vue';

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

const inputContainerStylesTopBar = css`
  margin: 0.5em 0.5em;
  width: 30%;
  min-width: 350px;

  @media (max-width: 600px) {
    display: none;
  }

  input {
    padding: 10px 10px 10px 40px;
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

export default {
  name: 'Search',
  props: {
    topBar: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    inputContainerStyles,
    inputContainerStylesTopBar,
  }),
  methods: {
    pushBook(selection, type, obj) {
      if (obj) {
        this.$router.push(`/book/${obj.id}`);
      }
    },
  },
  components: {
    Suggestions,
  },
};
</script>
