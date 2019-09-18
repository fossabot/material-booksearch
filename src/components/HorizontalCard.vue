<template>
   <div class="dhidden-xs-only card">
    <div class="card-content">
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
        <div class="d-flex calender-text caption align-start year">
          <span
            class="caption align-start year"
          >
            <v-icon class="year-icon">
              calendar_today
            </v-icon>
            {{ item.original_publication_year }}
          </span>
        </div>
         <v-chip
          color="default"
          label
          class="rating-chip"
          outline
        >
          <v-icon
            left
            class="star-icon"
          >
            grade
          </v-icon>
          {{ item.average_rating }}
        </v-chip>
      </v-card-text>
    </div>

    <v-img
      class="white--text"
      height="200px"
      width="30%"
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

  .card {
    display: flex;
    justify-content: space-between;
    font-family: Roboto;

    .v-image {
      width: 40%;
      max-width: 150px;
    }

    .card-content {
      width: 60%;
      min-width: calc(100% - 150px);
    }

    .calender-text {
      align-items: center;
    }
  }
  .year-icon {
    font-size: 1.275rem;
    margin-right: 5px;
    line-height: 1.46429em;
  }

  .year {
    font-size: 1.275rem !important;
    line-height: 1.46429em;
    font-weight: 400;
    margin-top: 10px;
  }

  .rating-chip {
    background: #f5f5f5 !important;
    border-radius: 2px !important;
    border-width: 1px !important;
    box-shadow: none !important;
    border-color: #e8e8e8  !important;
    color: #8c8c8c !important;
  }

  .star-icon {
    color: #faad14;
    font-size: 15px;
  }
</style>
