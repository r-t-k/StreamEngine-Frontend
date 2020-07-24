<template>
  <client-only>
    <div id="app">
      <div class="app-container">
        <div class="p-grid">
          <div class="p-col-fixed" style="width:100px">Fixed</div>
          <div class="p-col">Auto</div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  components: {
   
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container {
  text-align: center;
}
body #app .p-button {
  margin-left: 0.2em;
}
form {
  margin-top: 2em;
}
</style>