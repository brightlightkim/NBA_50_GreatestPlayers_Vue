<template>
  <div class="wrapper">
    <div class="players">
      <div class="player" v-for="player in players" :key="player.id">
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
          <button @click="a(player)" class="auto" id = "favorite">Favorite</button>
          <button @click="compare(player)" class="auto" id = "compare">Compare</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
let id = 0;

export default {
  name: "PlayerList",
  props: {
    players: Array,
  },
  methods: {
    a(player) {
      id++;
      this.$root.$data.mybestplayers.push({
        id: id,
        name: player.name,
        image: player.image,
        points: player.points,
        rebounds: player.rebounds,
        assists: player.assists,
        championships: player.championships,
        season_mvp: player.season_mvp,
        final_mvp: player.final_mvp,
        all_stars: player.all_stars,
        HOF: player.HOF,
      });
    },
    compare(player) {
      id++;
      this.$root.$data.compareList.push({
        id: id,
        name: player.name,
        image: player.image,
        points: player.points,
        rebounds: player.rebounds,
        assists: player.assists,
        championships: player.championships,
        season_mvp: player.season_mvp,
        final_mvp: player.final_mvp,
        all_stars: player.all_stars,
        HOF: player.HOF,
      });
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
  width: 125px;
  background: #000;
  color: white;
  border: none;
}

#favorite {
  background: rgb(255, 252, 79);
  color: black;
}

#compare {
  background: rgb(255, 82, 82);
}

.auto {
  margin-left: auto;
}
</style>
