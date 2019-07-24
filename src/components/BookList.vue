<template>
<fragment>
    <v-container grid-list-xl text-center>
    <v-layout wrap>
      <v-flex md2 xs10 offset-xs1>
        <v-card dark color="purple">
          <v-card-text>xs10 offset-xs1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs7 offset-xs5 offset-md2 offset-lg5>
        <v-card dark color="secondary">
          <v-card-text>xs7 offset-(xs5 | md2 | lg5)</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 md3>
        <v-card dark color="primary">
          <v-card-text>(xs12 | sm5 | md3)</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 md5 offset-xs0 offset-lg2>
        <v-card dark color="green">
          <v-card-text>(xs12 | sm5 | md5) offset-(xs0 | lg2)</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

    <h2 :class="classes.heading">{{  title }}</h2>
          <ReactiveList
            v-bind="props"
          >
            <div slot="renderAllData" slot-scope="{ results }">
    <v-container grid-list-xl text-center>
      <v-layout column>
        <v-flex sm6 md3 xs12>
          <v-card dark color="purple" :key="item.id" v-for="item in results">
            <v-card-text>{{ item.id }}</v-card-text>
          </v-card>
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

const headingStyles = css`
  margin-bottom: 15px;
`;
const listStyles = css`
  margin-bottom: 80px;
`;

export default {
  props: {
    title: {
      type: String,
      required: true,
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
};
</script>
