<template>
  <div :class="layoutStyle">
    <h2 :class="classes.heading" v-if="title" class="mb-0">{{  title }}</h2>
    <ReactiveList
      v-bind="props"
    >
      <div slot="renderAllData" slot-scope="{ results }">
        <v-container grid-list-xl text-center fluid class="pa-0 mt-2">
          <v-layout row wrap>
            <v-flex v-bind="gridProps" :key="item.id" v-for="item in results">
              <BookCard :responsiveSwitch="responsiveSwitch" :item="item" />
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </ReactiveList>
  </div>
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
    width: {
      required: false,
      type: String,
    },
    gridProps: {
      type: Object,
      default: () => ({
        sm3: true, md3: true, xs12: true,
      }),
    },
    title: {
      type: String,
    },
    reactiveListProps: {
      required: false,
      default: {},
    },
    responsiveSwitch: {
      type: Boolean,
      required: false,
      default: false,
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
        dataField: 'original_title.keyword',
        size: 4,
        scrollOnChange: false,
        class: listStyles,
        loader: 'Loading...',
      }, get(this, 'reactiveListProps', {}));
    },
    layoutStyle() {
      const { drawer } = this.$vuetify.theme;

      return css`
        width: ${this.width ? this.width : `calc(100% - ${drawer.width})`};
        margin-left: auto;

        @media (max-width: 762px) {
          width: 100%;
        }
      `;
    },
  },

  components: {
    BookCard,
  },
};
</script>
