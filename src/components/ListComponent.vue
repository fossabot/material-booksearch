<template>
  <div class="root">
    <v-list>
      <v-subheader
        v-if="!!title"
        class="title"
      >
        {{ title }}
      </v-subheader>
      <v-list-tile
        v-for="item in items"
        :key="item.value"
        @click="() => handelChange(item.value)"
        class="cursor"
        :style="{
          background: value === item.value ? '#e8e8e8' : 'inherit'
        }"
      >
        <v-list-tile-content>
          <v-list-tile-title
            v-text="item.value"
            ></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import { SingleList } from '@appbaseio/reactivesearch-vue';

export default {
  props: {
    title: {
      type: String,
    },
    selectedValue: {
      default: '',
      type: String,
    },
    aggregations: {
      default: {},
      required: true,
    },
    dataField: {
      required: true,
    },
    setQuery: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      value: this.selectedValue,
    };
  },
  computed: {
    items() {
      const { dataField, aggregations } = this;

      let items = [];
      if (aggregations && aggregations[dataField] && aggregations[dataField].buckets.length) {
        // eslint-disable-next-line camelcase
        items = aggregations[dataField].buckets.map(({ key: itemKey, doc_count }) => ({
          value: itemKey,
          count: doc_count,
        }));

        items = items.filter(({ value }) => value !== '');
      }
      return items;
    },
  },
  methods: {
    handelChange(value) {
      const { setQuery, dataField } = this;
      this.value = value;
      const query = SingleList.defaultQuery(value, {
        queryFormat: 'or',
        dataField,
      });

      setQuery({ query, value });
    },
  },
};
</script>

<style scoped>
  .root {
    width: 100%;
    margin: 10px;
    height: 250px;
    overflow-y: scroll;
    border: 1px solid #d9d9d9;
  }

  .title {
    font-weight: 600;
    font-size: 1rem;
    color: #424242;
    position: sticky;
    top: 0;
    background: white;
    border-bottom: 1px solid #d9d9d9;
    padding: 5px 10px;
    z-index: 2;
  }

</style>
