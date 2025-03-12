const app = Vue.createApp({
  data() {
    return {
      counter: 69,
      name: "nigglet",
      confirmedName: '',
    };
  },
  methods: {
    inc(cnt) {
      this.counter += cnt;
    },

    dec(cnt) {
      this.counter = Math.max(0, this.counter - cnt);
    },

    setName(event, lastName)
    {
      this.name = event.target.value + ' ' + lastName;
    },

    submitForm(event)
    {
      event.preventDefault();
      console.log("nigglet");
      alert("Hello World");
    },

    submitFormNoDef()
    {
      event.preventDefault();
      console.log("nigglet");
      alert("Hello World");
    }
  },
});

app.mount("#events");
