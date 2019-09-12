<template>
  <fragment>
    <v-layout
      justify-space-between
      row
      fill-height
      wrap
      class="container-fluid"
      v-if="book"
    >
      <v-flex
        md2
        xs12
      >
        <img
          :style="{ width: '100%' }"
          :src="book.image"
          :alt="book.title"
        />
      </v-flex>
      <v-flex
        :style="{ paddingLeft: '20px' }"
        md10
        xs12
      >
        <h2 class="font-weight-medium">{{ book.title }}</h2>
        <v-spacer></v-spacer>
        <h3
          class="title faded font-weight-regular"
          :style="{ margin: '5px auto' }"
        >{{ book.authors.toString() }}</h3>
        <v-spacer></v-spacer>
        <v-icon
          :key="star"
          v-for="star of stars"
          :style="{
            color: '#faad14',
            marginRight: 2,
            fontSize: '1.4em',
          }"
        >
          star
        </v-icon>
        <v-spacer></v-spacer>
        <p class="title faded">{{ book.description }}</p>
        <a
          :href="getLink()"
          target="_blank"
          rel="noopener noreferrer"
        >
          Search on Web
        </a>
      </v-flex>
    </v-layout>
  </fragment>
</template>

<script>
import appbase, { TYPE } from '@/utils/appbase';
import { getDescriptionFromAPI } from '@/utils';

export default {
  created() {
    this.loadBook();
  },
  data() {
    return {
      book: null,
    };
  },
  computed: {
    stars() {
      if (!this.book) {
        return [];
      }
      const stars = this.book.average_rating_rounded;
      const starsKey = [];
      for (let i = 1; i <= stars; i += 1) {
        starsKey.push(`star_${i}`);
      }

      return starsKey;
    },
  },
  methods: {
    async loadBook() {
      this.loading = true;
      this.book = null;
      const {
        params: { bookId },
      } = this.$route;
      const bookDetails = await appbase.get({
        type: TYPE,
        id: bookId,
      });

      if (bookDetails.found) {
        // eslint-disable-next-line no-underscore-dangle
        const book = bookDetails._source;
        const description = await getDescriptionFromAPI(book.original_title);
        this.loading = false;
        this.book = { ...book, description };
      } else {
        this.loading = false;
      }
    },
    getLink() {
      const parsedTitle = this.book.original_title.split(' ').join('+');
      return `https://www.google.com/search?q=${parsedTitle}`;
    },
  },
};
</script>


<style>
.container-fluid {
  width: 95%;
  margin: 20px auto 15px auto;
  padding: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
</style>
