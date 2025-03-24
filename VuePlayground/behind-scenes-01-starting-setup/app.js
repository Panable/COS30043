const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },

  beforeUnmount() {
    console.log("unmount");
  },

  unmounted() {
    console.log("unmounted");
  }
});











const app2 = Vue.createApp({
  template: `
      <p> {{ txt }}</p>
      <p>sd</p>
  `,
  data() {
    return {
      txt: "Hello World!",
    };
  },
});

app.mount("#app");
app2.mount("#app2");

// ====== //

// let message = 'Hello!';
// let longMessage = message + 'World!';
// console.log(longMessage);
// message = 'HELLO !!!';
// console.log(longMessage);

const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
    // console.log(target);
    // console.log(key);
    // console.log(value);
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "hello !!!!!";
// console.log(proxy.longMessage);
