<template>
   <div>
    <v-img
      class="white--text"
      height="200px"
      :src="item.image"
    >
      <v-chip
        color="default"
        label
        class="rating-chip"
      >
        <v-icon
          left
          class="star-icon"
        >
          grade
        </v-icon>
        {{ item.average_rating }}
      </v-chip>
    </v-img>
    <v-card-title class="align-end mb-0 pb-1 title">
      <div class="text-truncate">
        {{ item.title }}
      </div>
    </v-card-title>

    <v-card-text class="faded mt-auto">
      <span
        class="caption year"
      >
        {{ item.authors.join(', ') }}
      </span><br>
      <span
        class="caption year"
      >
        <v-icon class="year-icon">
          calendar_today
        </v-icon>
        {{ item.original_publication_year }}
      </span>
    </v-card-text>
  </div>
</template>
<script>

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .year-icon {
    font-size: 14px;
    margin-right: 5px;
  }

  .year {
    font-size: 0.975rem !important;
    margin-top: 10px;
  }

  .rating-chip {
    background: #f5f5f5;
    border-radius: 2px;
    box-shadow: none;
    border-color: #e8e8e8;
    color: #8c8c8c;
  }

  .star-icon {
    color: #faad14;
    font-size: 15px;
  }
</style>
