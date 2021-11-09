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
          <button @click="a(player)" class="auto">Favorite</button>
          <button @click="compare(player)" class="auto">Compare</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
let id = 0;

export default {
  name: "playerList",
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
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.players {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.player {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.player img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.player .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #f2921d;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
