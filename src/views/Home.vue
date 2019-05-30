<template>
  <div class="home flex flex-wrap">
    <div
      v-for="collab in collabs"
      :key="collab.id"
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4"
    >
      <Profile :collab="collab" />
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Profile";

export default {
  name: "home",
  components: {
    Profile
  },
  async created() {
    await this.$store.dispatch("profiles/_get");
  },
  computed: {
    collabs() {
      return this.$store.state.profiles.collabs;
    }
  }
};
</script>
