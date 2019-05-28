<template>
  <div id="nav">
    <router-link :to="{ name: router.home.name }">Home</router-link> |
  </div>
</template>

<script>
import router from "@/configs/router.js";

export default {
  name: "NavBar",
  data: () => {
    return {
      router
    };
  }
};
</script>
