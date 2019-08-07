<template>
  <v-layout
    wrap
    justify-center
    row
  >
    <v-flex
      xs10
      d-flex
    >
      <v-select
        label="Select Authors"
        multiple
        :items="itemValues"
        @change="handleChange"
        chips
      />
    </v-flex>
  </v-layout>
</template>

<script>
import { MultiList } from '@appbaseio/reactivesearch-vue';

export default {
  created() {
  },
  props: {
    aggregations: {
      type: Object,
    },
    dataField: {
      type: String,
    },
    value: {
      type: String,
    },
    setQuery: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      itemValues: [],
      selectedAuthors: [],
    };
  },
  computed: {
    items() {
      const { aggregations, dataField } = this;
      let items = [];
      if (aggregations && aggregations[dataField] && aggregations[dataField].buckets.length) {
        // eslint-disable-next-line camelcase
        items = aggregations[dataField].buckets.map(({ key: itemKey, doc_count }) => ({
          value: itemKey,
          count: doc_count,
        }));
      }
      return items;
    },
  },
  methods: {
    handleChange(authors) {
      this.selectedAuthors = authors;
    },
  },
  watch: {
    items(items) {
      this.itemValues = items.map(i => i.value || 'N/A');
    },
    selectedAuthors(authors) {
      const { setQuery, dataField } = this.$props;
      const query = MultiList.defaultQuery(authors, {
        queryFormat: 'or',
        dataField,
      });
      setQuery({
        query,
        value: authors,
      });
    },
    value(value) {
      const query = MultiList.defaultQuery(value);
      this.$props.setQuery({
        query,
        value,
      });
    },
  },
};
</script>
