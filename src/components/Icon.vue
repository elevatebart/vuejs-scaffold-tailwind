<template>
  <img
    v-bind="$attrs"
    v-on="$listeners"
    class="mr-4"
    :class="{
      'w-16 h-16': small,
      'w-32 h-32': normal,
      'w-48 h-48': medium,
      'w-64 h-64': large,
      'rounded-full': rounded
    }"
    alt="icon"
    width="50"
  />
</template>

<script>
/**
 * Icon rounded
 * @version 0.1.0
 * @author [Giraud Florent](https://github.com/f3ltron)
 * @since version 0.1.0
 */
export default {
  name: "Icon",
  props: {
    large: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: false
    },
    normal: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<docs>
<br />
  <br />
  <div>
    <h3>width Icon </h3>
    <Icon small :src="require('@/assets/mael.jpeg')" />
    <Icon normal :src="require('@/assets/mael.jpeg')" />
    <Icon medium :src="require('@/assets/mael.jpeg')" />
    <Icon large :src="require('@/assets/mael.jpeg')" />
    <h3>Rounded</h3>
    <Icon rounded small :src="require('@/assets/mael.jpeg')" />
  </div>
</docs>
