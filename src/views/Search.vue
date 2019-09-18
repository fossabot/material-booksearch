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
