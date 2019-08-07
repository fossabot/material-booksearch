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
import { MultiList } from '@appbaseio/reactivesearch-vue';
import Select from '@/components/SelectAuthors.vue';

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
  },
};
</script>
