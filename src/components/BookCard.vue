<template>
  <v-card
    class="mx-auto pointer"
    height="100%"
    @click="handelClick"
  >
  <vertical-card
    :class="responsiveSwitch && 'hidden-xs-only'"
    :item="item"
  />
  <horizontal-card
    v-if="responsiveSwitch"
    :class="responsiveSwitch && 'hidden-sm-and-up'"
    :item="item"
   />
  </v-card>
</template>

<script>
import VerticalCard from '@/components/VerticalCard.vue';
import HorizontalCard from '@/components/HorizontalCard.vue';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    responsiveSwitch: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    handelClick() {
      // eslint-disable-next-line no-underscore-dangle
      this.$router.push(`/book/${this.item._id}`);
    },
  },
  components: {
    VerticalCard,
    HorizontalCard,
  },
};
</script>

<style lang="scss" scoped>

</style>
