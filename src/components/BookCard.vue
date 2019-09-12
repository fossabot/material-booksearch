<template>
  <v-card
    class="mx-auto pointer"
    height="100%"
  >
    <v-img
      class="white--text"
      height="200px"
      :src="item.image"
    >
      <v-chip
        color="default"
        label
        :style="styles.ratingChip"
      >
      <v-icon left :style="styles.starIcon">grade</v-icon>
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
        class="caption"
        :style="styles.year"
      >
        {{ item.authors.join(', ') }}
      </span><br>
      <span
        class="caption"
        :style="styles.year"
      >
        <v-icon
          :style="styles.yearIcon"
        >
          calendar_today
        </v-icon>
        {{ item.original_publication_year }}
      </span>
    </v-card-text>

  </v-card>
</template>

<script>

const styles = () => ({
  card: {
    display: 'flex',
    position: 'relative',
    borderRadius: '2px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '20%',
  },
  yearIcon: {
    fontSize: '14px',
    marginRight: '5px',
  },
  year: {
    fontSize: '0.975rem !important',
    marginTop: '10px',
  },
  ratingChip: {
    background: '#f5f5f5',
    borderRadius: '2px',
    boxShadow: 'none',
    borderColor: '#e8e8e8',
    color: '#8c8c8c',
  },
  starIcon: {
    color: '#faad14',
    fontSize: '15px',
  },
});

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    styles,
  },
};
</script>
