function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value === 0) {
        if (this.monsterHealth === 0) {
          this.winner = "draw";
        } else {
          this.winner = "monster";
        }
      }
    },
    monsterHealth(value) {
      if (value === 0) {
        if (this.playerHealth === 0) {
          this.winner = "draw";
        } else {
          this.winner = "player";
        }
      }
    },
  },
  computed: {
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },

    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },

    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = null;
      this.logMessages = [];
    },

    surrender() {
      this.winner = "monster";
    },

    attackMonster() {
      this.currentRound++;
      console.log(this.monsterHealth);
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth = Math.max(0, this.monsterHealth - attackValue);
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },

    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth = Math.max(0, this.playerHealth - attackValue);
      this.addLogMessage('monster', 'attack', attackValue);
    },

    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth = Math.max(0, this.monsterHealth - attackValue);
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },

    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      this.playerHealth = Math.min(100, this.playerHealth + healValue);
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
    },

    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
