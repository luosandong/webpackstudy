<template>
  <div>
    <h1 class="title">{{message}}</h1>
    <button @click="show()">按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "Hello Webpack VueJs  Kobe"
    };
  },
  methods: {
    show() {
      alert("Hello Vue");
    }
  }
};
</script>

<style>
.title {
  color: black;
}
</style>