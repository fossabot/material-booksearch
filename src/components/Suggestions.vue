<template>
  <v-card class="suggestions">
    <v-list two-line>
      <template v-for="(item, index) in suggestions.slice(0, 4)">
        <v-subheader
          v-if="item.header"
          :key="item.header"
        >
          {{ item.header }}
        </v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-tile
          v-else
          :key="item._source.original_title"
          avatar
          @click="() => handelClick(item._id)"
        >
          <v-list-tile-avatar>
            <img :src="item._source.image">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item._source.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item._source.original_series"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <v-btn
      ripple
      large
      block
      color="info"
      bottom
      class="result-btn"
      :to="'/search/?q='+currentValue"
    >
      Show all results for {{currentValue}}
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'Suggestions',
  props: {
    currentValue: {
      required: true,
      type: String,
    },
    suggestions: {
      required: true,
      type: Array,
    },
    parsedSuggestions: {
      required: true,
      type: Array,
    },
  },
  methods: {
    handelClick(id) {
      this.$router.push(`/book/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
  .suggestions {
    display: block;
    width: 100%;
    background-color: #fff;
    z-index: 3;
    position: absolute;
    top: 40px;
    margin-bottom: 0;
    padding-bottom: 0;
    max-height: 260px;
    overflow: hidden;
    overflow-y: scroll;
    margin-top: 20px;
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
    border: 0;
    border-radius: 5px;
    a {
      color: #8c8c8c;
    }
  }

  .result-btn {
    border-radius: 0 0 4px 4px !important;
    border: 0 !important;
    color: white !important;
    position: sticky !important;
    bottom: 0 !important;
    width: 100%;
    margin-bottom: 0;
  }
</style>
