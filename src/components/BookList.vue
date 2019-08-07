<template>
<fragment>
  <h2 :class="classes.heading" v-if="title" class="mb-0">{{  title }}</h2>
  <ReactiveList
    v-bind="props"
  >
    <div slot="renderAllData" slot-scope="{ results }">
      <v-container grid-list-xl text-center fluid class="pa-0 mt-2">
        <v-layout row>
          <v-flex sm6 md3 xs12 :key="item.id" v-for="item in results">
            <BookCard :item="item" />
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </ReactiveList>
  </fragment>
</template>

<script>
import { css } from 'emotion';
import { get } from 'lodash';

import BookCard from '@/components/BookCard.vue';

const headingStyles = css`
  margin-bottom: 15px;
`;
const listStyles = css`
  margin-bottom: 80px;
`;

export default {
  props: {
    gridProps: {
      type: Object,
      default: () => ({
        sm6: true, md3: true, xs12: true,
      }),
    },
    title: {
      type: String,
    },
    reactiveListProps: {
      required: false,
      default: {},
    },
  },
  data() {
    return {
      classes: {
        heading: headingStyles,
        list: listStyles,
      },
    };
  },
  computed: {
    props() {
      return Object.assign({}, {
        pagination: true,
        componentId: 'result',
        dataField: 'original_title.raw',
        size: 4,
        scrollOnChange: false,
        class: listStyles,
      }, get(this, 'reactiveListProps', {}));
    },
  },
  components: {
    BookCard,
  },
};
</script>
