<template>
  <div>
    <div class="wrap">
      <h1><b>NBA 50 Greatest Players</b></h1>
      <h2>
        Type <b>Desired Stats</b> and you will see <b>Legends</b> that match the
        <b>Stat</b>
      </h2>
      <h3>(Every Search should be typed at least 0, and it should be number, not text)</h3>
    </div>
    <div class="wrapper">
      <div class="search">
        <form class="pure-form">
          <p>Points</p>
          <i class="fas fa-search"></i><input v-model="searchText" />
        </form>
        <form class="pure-form">
          <p>Assists</p>
          <i class="fas fa-search"></i><input v-model="assistsText" />
        </form>
        <form class="pure-form">
          <p>Rebounds</p>
          <i class="fas fa-search"></i><input v-model="reboundsText" />
        </form>
      </div>
    </div>
    <PlayerList :players="players" />
  </div>
</template>

<script>
import PlayerList from "../components/PlayerList.vue";
export default {
  name: "Home",
  components: {
    PlayerList,
  },
  data() {
    return {
      searchText: "",
      assistsText: "",
      reboundsText: "",
    };
  },
  computed: {
    players() {
      return this.$root.$data.players.filter(
        (player) =>
          parseInt(player.points) >= parseInt(this.searchText) &&
          parseInt(player.assists) >= parseInt(this.assistsText) &&
          parseInt(player.rebounds) >= parseInt(this.reboundsText)
      );
    },
  },
};
</script>

<style scoped>
.wrap {
  text-align: center;
}

.wrap h1 {
  color: rgb(94, 94, 252);
}
@font-face {
  font-family: "YanoljaYacheR";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YanoljaYacheR.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  color: #414141;
  background-color: #ffcfcc;
  font-size: 24px;
  font-family: "YanoljaYacheR";
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: "YanoljaYacheR";
  font-weight: normal;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 20%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
