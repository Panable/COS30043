const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fnametest: "",
    };
  },
  watch: {
    // whenever name property changes, execute this
    name(value, oldvalue) {
      if (value === '')
        this.fnametest = '';
      else
        this.fnametest = value + ' ' + 'billy';
    }
  },
  computed: {
    //used like a data property. stops refresh
    //vue aware of dependencies and does caching.
    //better peformance
    fullname() {
      if (this.name === "") return "";

      return this.name + " " + "ligma";
    },
  },
  methods: {
    outputFullname() {
      if (this.name === "") return "";

      return this.name + " " + "ligma";
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
