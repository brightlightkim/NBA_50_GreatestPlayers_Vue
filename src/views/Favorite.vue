<template>
  <div class="wrapper">
    <h1>My Best Players</h1>
    <div class="players">
      <div class="player" v-for="player in mybestplayers" :key="player.id">
        <div class="info">
          <h1>{{ player.name }}</h1>
          <p>Points: {{ player.points }}</p>
          <p>Rebounds: {{ player.rebounds }}</p>
          <p>Assists: {{ player.assists }}</p>
          <p>Championships: {{ player.championships }}</p>
          <p>Season MVP: {{ player.season_mvp }}</p>
          <p>Final MVP: {{ player.final_mvp }}</p>
          <p>All Star Times: {{ player.all_stars }}</p>
          <p>Hall of Fame Year: {{ player.HOF }}</p>
        </div>
        <div class="image">
          <img :src="'/images/players/' + player.image" />
        </div>
        <div class="price">
          <h2>{{ player.price }}</h2>
          <button @click="a(player)" class="auto">Remove Player</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {};
  },
  computed: {
    mybestplayers() {
      var id = 0;
      this.$root.$data.mybestplayers.forEach(element => {
          element.id = id;
          id++;
      }); 
      return this.$root.$data.mybestplayers;
    },
  },
  methods: {
    a(player) {
      this.$root.$data.mybestplayers.splice(player.id, 1);
    },
  },
};
</script>

<style scoped>

@font-face { font-family: 'YanoljaYacheR'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YanoljaYacheR.woff') format('woff'); font-weight: normal; font-style: normal; }

body {
  color: #414141;
  background-color: #ffcfcc;
  font-size: 24px;
  font-family: 'YanoljaYacheR';
}

h1, h2, h3, h4, h5, h6, p {
  font-family: 'YanoljaYacheR';
  font-weight: normal;
  
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.players {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.player {
  border: 3px solid #333;
  margin: 5px;
  margin-top: 10px;
  width: 250px;
  word-wrap: break-word;
}

.player img {
  border: 3px solid #333;
  height: 250px;
  width: 250px;
  object-fit: cover;
}

.player .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #cecece;
  color: #000;
  padding: 10px 10px;
  height: 280px;
}

.info h1 {
  font-size: 24px;
}

.info h2 {
  font-size: 20px;
}

.info p {
  margin: 0px;
  font-size: 17px;
}

.price {
  display: flex;
  justify-content: center;
}

button {
  height: 50px;
  width: 250px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>