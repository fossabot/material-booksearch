<template>
  <v-container
    fluid
    wrap
  >
      <Filters />
      <v-layout :style="layoutStyle">
        <BookList
          :gridProps="{ md4: true, sm6: true, xs12: true }"
          :reactiveListProps="{
            showResultStats: false,
            react: {
              and: ['Ratings', 'Series', 'Authors', 'Search', 'Year'],
            },
            size: 6,
            loader: null,
              innerClass: {
                pagination: 'hidden',
                poweredBy: 'hidden',
              },
            }"
          :cardProps="{
            style: {
              marginBottom: '24px',
            },
          }"
        />
      </v-layout>
      <v-layout justify-center>
      </v-layout>
  </v-container>
</template>

<script>
import Filters from '@/components/Filters.vue';
import BookList from '@/components/BookList.vue';

export default {
  data() {
    const { drawer } = this.$vuetify.theme;
    return {
      drawer: null,
      layoutStyle: {
        width: `calc(100% - ${drawer.width})`,
        marginLeft: 'auto',
      },
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
