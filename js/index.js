(() => {
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        title: "Hello Vue!",
        containerClass: "card text-center shadow",
        imgSrc: 'https://picsum.photos/200/300',
        imgClass: 'img-fluid text-center, rounded',
      };
    },
    methods: {
    },
    mounted() {},
  }).mount("#app");

})();
