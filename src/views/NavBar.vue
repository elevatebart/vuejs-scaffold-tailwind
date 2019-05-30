<template>
  <div id="nav" class="flex justify-between items-center">
    <router-link :to="{ name: router.home.name }">Home</router-link>
    <form class="w-full max-w-sm">
      <div class="flex items-center py-2">
        <input
          class="appearance-none  w-full text-gray-700 border-b-4 border-red-800 text-lg mr-2 py-2  pr-2 pl-5 leading-tight focus:outline-none"
          type="text"
          placeholder="Search..."
          aria-label="Collaborator name"
        />
        <Button>Search</Button>
      </div>
    </form>
  </div>
</template>

<script>
import router from "@/configs/router.js";
import Button from "@/components/Button";

export default {
  name: "NavBar",
  components: {
    Button
  },
  data: () => {
    return {
      router
    };
  }
};
</script>

<style lang="postcss" scoped>
#nav {
  padding: 30px;
}

#nav a {
  @apply border-b-8 border-red-300;
}

#nav a.router-link-exact-active {
  @apply text-gray-700 text-lg;
}
</style>
