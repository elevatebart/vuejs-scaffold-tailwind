<template>
  <span v-bind="$attrs" v-on="$listeners" class="tag">#{{ text }}</span>
</template>

<script>
/**
 * Tags normal
 * @version 0.1.0
 * @author [Giraud Florent](https://github.com/f3ltron)
 * @since version 0.1.0
 */
export default {
  name: "Tags",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="postcss" scoped>
.tag {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2;
}
</style>

<docs>
  <div>
    <br />
    <br />
    <Tags text="vuejs"/>
    <Tags :text="'super-vuejs'"/>
  </div>
</docs>
