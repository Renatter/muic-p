<template>
  <div>
    {{ id }}
  </div>
</template>

<script>
import player from "../components/player.vue";
export default {
  components: {
    player,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style lang="scss" scoped></style>
