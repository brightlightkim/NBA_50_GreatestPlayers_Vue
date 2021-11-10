<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/greatest_players.jpg" />
        </router-link>
      </div>
      <div id="side">
        <router-link to="/stat">
          <div class="menu-item compare">
            <img src="/images/stat.png" />
          </div>
        </router-link>
        <router-link to="/compare">
          <div class="menu-item compare">
            <img src="/images/vs.jpg" />
            <p>{{ numberOfCompares }} Players</p>
          </div>
        </router-link>
        <router-link to="/favorite">
          <div class="menu-item" >
            <img src="/images/love.png" />
            <p>{{ numberOfPlayers }} Players</p>
          </div>
        </router-link>
      </div> 
    </div>
    <router-view />
    <div id="footer">
      <a href="https://github.com/brightlightkim/NBA_50_GreatestPlayers_Vue">GitHub Link</a>
    </div> 
  </div>
</template>

<script>
export default {
  computed: {
    numberOfPlayers() {
      var playerNum = this.$root.$data.mybestplayers.length;
      return playerNum;
    },
    numberOfCompares() {
      var playerNum = this.$root.$data.compareList.length;
      return playerNum; 
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 20px;
}

#menu a {
  color: #b84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  text-align: center;
}

#brand img {
  height: auto;
  width: 600px;
}


#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;

}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.compare {
  margin-right: 20px;
}

#footer {
  position: fixed;
  bottom: 0;
  left: 0; 
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
}

#footer a {
  color: white;
}
</style>
