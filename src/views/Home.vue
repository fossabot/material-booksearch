<template>
  <fragment>
    <TopSection />
    <v-container grid-list-xl>
      <BookList
        title="Trending Now"
        :reactiveListProps="{
            showResultStats: false,
            react: { and: ['homesearch'] },
            dataField: 'average_rating',
            sortBy: 'desc',
            innerClass: {
              pagination: 'hidden',
              poweredBy: 'hidden',
            },
          }"
      />
    </v-container>
  </fragment>
</template>

<script>
import TopSection from '@/components/TopSection.vue';
import BookList from '@/components/BookList.vue';

export default {
  components: {
    TopSection,
    BookList,
  },
};
</script>
