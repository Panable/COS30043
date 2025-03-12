const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'hello world',
            goalA: 'nigglet',
            goalB: '<h4>rigglet</h4>',
            vueLink: 'https://jedsaxon.com/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5)
                return this.goalA;
            else
                return this.goalB;
        }
    }
});

app.mount('#user-goal');
