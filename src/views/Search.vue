<template>
  <v-container
    fluid
    wrap
  >
    <Filters />
    <v-layout>
      <SelectedFilters
        clearAllLabel="Clear filters"
        :showClearAll="true"
      />
    </v-layout>
    <v-layout>
      <BookList
        responsiveSwitch
        :gridProps="{ md4: true, sm6: true, xs12: true }"
        :reactiveListProps="{
            showResultStats: false,
            react: {
              and: ['Ratings', 'Series', 'Authors', 'Search', 'Year'],
            },
            size: 6,
            loader: null,
          }"
        :cardProps="{
            style: {
              marginBottom: '24px',
            },
          }"
      />
    </v-layout>

    <v-footer
      app
      dark
      height="auto"
      color="primary"
    >
        <v-btn
           ripple
          large
          block
          color="info"
          class="result-btn"
          :style="{ margin: '0 auto' }"
        >
          Show Filters
        </v-btn>
    </v-footer>
  </v-container>
</template>

<script>
import Filters from '@/components/Filters.vue';
import BookList from '@/components/BookList.vue';

export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
    };
  },
  components: {
    Filters,
    BookList,
  },
};
</script>

<style lang="scss" scoped>
  .result-btn {
    border-radius: 0 0 4px 4px !important;
    border: 0 !important;
    color: white !important;
    position: sticky !important;
    bottom: 0 !important;
    width: 100%;
    margin-bottom: 0;
  }
</style>
