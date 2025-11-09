const app = Vue.createApp({
  //that called root component
  //data, functions
  data() {
    return {
      showBooks: true,
      title: "the final empire",
      author: "Fakhre",
      age: "21",
      Books: "this is to many books here",
    };
  },
  methods: {
    changeTitle(title) {
      //why we type .this ? because its references the title inside the component itself
      this.title = title;
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
