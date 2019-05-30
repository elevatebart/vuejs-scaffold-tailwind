<template>
  <div class="p-2">
    <div class="card">
      <div class="flex items-center pb-4">
        <Icon rounded small :src="require('@/assets/mael.jpeg')" />
        <div class="text-sm text-left">
          <p class="text-gray-900 leading-none mb-2">Jonathan Reinink</p>
          <p class="text-gray-600 leading-none mt-2">Aug 18</p>
        </div>
      </div>
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">
          Can coffee make you a better developer?
        </div>
        <p class="text-gray-700 text-base">{{ collab.description }}</p>
      </div>
      <div class="px-6 py-4 pb-10">
        <Tags v-for="(tag, i) in collab.tags" :key="i" :text="tag" />
      </div>
      <div class="flex row justify-around">
        <Button
          @click="$router.push({ name: 'profiles', params: { profileId: 1 } })"
        >
          <template #icon>
            <img
              class="text-gray-500 w-4 h-4 mr-2"
              src="~@/assets/svg/info.svg"
            />
          </template>
          <span class="hidden md:block">Infos</span>
        </Button>
        <Button v-if="!me" disabled>
          <template #icon>
            <img
              class="text-gray-500 w-4 h-4 mr-2"
              src="~@/assets/svg/unlock.svg"
            />
          </template>
          <span class="hidden md:block">Admin</span>
        </Button>
        <Button v-else>
          <template #icon>
            <img
              class="text-gray-500 w-4 h-4 mr-2"
              src="~@/assets/svg/edit.svg"
            />
          </template>
          <span class="hidden md:block">Edit</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Tags from "@/components/Tags";
import Icon from "@/components/Icon";

export default {
  name: "Profile",
  components: {
    Tags,
    Button,
    Icon
  },
  props: {
    collab: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      me: false
    };
  }
};
</script>

<style lang="postcss" scoped>
.button {
  @apply w-1/3 flex cursor-pointer items-center justify-center bg-blue-500  text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded;
}

.button:hover {
  @apply bg-blue-400 border-blue-500;
}

.card {
  @apply border-r border-b shadow-md rounded border-l border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal;

  @screen lg {
    @apply border-l-0 border-t rounded-r rounded-b-none;
  }
}
</style>

<docs>
  <div>
    <Profile
      :collab="{
        id: 1,
        firstName: 'Reingink',
        lastName: 'Jonathan',
        arrived: new Date().getTime(),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
        tags: ['vuejs', 'javascript', 'react'],
        image: '/assets/mael.jpeg',
        missions: [
          {
            client: 'Leroy Merlin',
            description: ''
          }
        ]
      }" />
    </div>
</docs>
