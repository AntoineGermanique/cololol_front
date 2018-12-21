<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button>
      <router-link to="/search">{{ $t("common.search") }}</router-link>
    </button>
    <button>
      <router-link to="/create">{{ $t("common.createAdd") }}</router-link>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
