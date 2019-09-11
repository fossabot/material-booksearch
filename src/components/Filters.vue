<template>
  <v-navigation-drawer v-bind="props">
    <v-flex sm12>
      <ReactiveComponent
        componentId="Authors"
        :defaultQuery="defaultQuery"
        :selectComponentProps="{
          placeholder: 'Select Authors',
        }"
        showFilters
      >
        <div slot-scope="{ aggregations, value, setQuery }">
          <Select
            key="Authors"
            dataField="authors.keyword"
            :aggregations="aggregations"
            :value="value"
            :setQuery="setQuery"
          />
        </div>
      </ReactiveComponent>
    </v-flex>
    <v-flex sm11>
      <ReactiveComponent
        :defaultQuery="listDefaultQuery"
        componentId="Series"
      >
        <div slot-scope="{ aggregations, setQuery, value }">
          <ListComponent
            key="Series"
            title="Select Book Series"
            dataField="original_series.keyword"
            :aggregations="aggregations"
            :setQuery="setQuery"
            :selectedValue="value"
          />
        </div>
      </ReactiveComponent>
    </v-flex>
    <v-divider />
    <v-flex sm12>
      <RangeSlider
        tooltipTrigger="hover"
        title="Publication Year"
        dataField="original_publication_year"
        componentId="Year"
        :range="{ start: 1950, end: 2019 }"
        :innerClass="{
          slider: sliderStyles,
        }"
      />
    </v-flex>
  </v-navigation-drawer>
</template>

<script>
import { css } from 'emotion';
import { MultiList, SingleList } from '@appbaseio/reactivesearch-vue';
import Select from '@/components/SelectAuthors.vue';
import ListComponent from '@/components/ListComponent.vue';

const sliderStyles = css`
  .rheostat-progress {
    background-color: #174ff4 !important;
  }
  .rheostat-handle {
    border-color: #bfbfbf !important;
  }
`;

export default {
  props: {
    drawerProps: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      sliderStyles,
      drawer: null,
      defaultQuery: () => ({
        ...MultiList.generateQueryOptions({
          dataField: 'authors.keyword',
          size: 50,
        }),
      }),
    };
  },
  computed: {
    listDefaultQuery() {
      return () => ({
        ...SingleList.generateQueryOptions({
          dataField: 'original_series.keyword',
          size: 50,
        }),
      });
    },
    props() {
      const { drawer } = this.$vuetify.theme;
      return {
        'v-model': 'drawer',
        height: drawer.height,
        width: drawer.width,
        absolute: true,
        ...this.drawerProps,
      };
    },
  },
  components: {
    Select,
    ListComponent,
  },
};
</script>
