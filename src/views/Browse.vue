<template>
  <div>
    <div class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <a @click="select('United States')" href="#" class="pure-menu-link"
            >United States</a
          >
        </li>
        <li class="pure-menu-item">
          <a @click="select('Canada')" href="#" class="pure-menu-link"
            >Canada</a
          >
        </li>
        <li class="pure-menu-item">
          <a @click="select('Mexico')" href="#" class="pure-menu-link"
            >Mexico</a
          >
        </li>
        <li class="pure-menu-item">
          <a @click="select('Brazil')" href="#" class="pure-menu-link"
            >Brazil</a
          >
        </li>
      </ul>
    </div>
    <PlayerList :players="players" />
  </div>
</template>

<script>
import PlayerList from "../components/PlayerList.vue";
export default {
  name: "Browse",
  components: {
    PlayerList,
  },
  data() {
    return {
      country: "",
    };
  },
  computed: {
    players() {
      return this.$root.$data.players.filter(
        (player) => player.name === this.name
      );
    },
  },
  methods: {
    select(country) {
      this.country = country;
    },
  },
};
</script>
