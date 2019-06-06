<template>
  <button
    v-on="$listeners"
    class="button"
    :class="{
      disabled,
      red,
      green,
      orange
    }"
  >
    <!-- @slot Use this slot for icon -->
    <slot name="icon"/>
    <!-- @slot Default slot -->
    <slot name="default"/>
  </button>
</template>

<script>
/**
 * It is a slot component base
 * @version 0.1.0
 * @author [Giraud Florent](https://github.com/f3ltron)
 * @since version 0.1.0
 */
export default {
  name: "Button",
  props: {
    /**
     * color + bg-color + cursor change
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * color + bg-color
     */
    red: {
      type: Boolean,
      default: false
    },
    /**
     * color + bg-color
     */
    orange: {
      type: Boolean,
      default: false
    },
    /**
     * color + bg-color
     */
    green: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="postcss" scoped>
.button {
  @apply w-1/3 flex cursor-pointer items-center justify-center bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded;
}

.button:hover {
  @apply bg-blue-400 border-blue-500;
}

.disabled {
  @apply text-black bg-white border-b-4 border-gray-400  !important;
}

.disabled:hover {
  @apply cursor-not-allowed;
}

.red {
  @apply bg-red-500 border-b-4 border-red-700  !important;
}

.orange {
  @apply bg-orange-500 border-b-4 border-orange-700  !important;
}

.green {
  @apply bg-green-500 border-b-4 border-green-700  !important;
}
</style>

<docs>
### Colors Button
```vue live
const iconSrc = require("@/assets/svg/info.svg")

<Button>
  <template #icon>
  <img class="text-gray-500 w-4 h-4 mr-2" :src="iconSrc">
</template>
  <span class="hidden md:block">Infos</span>
</Button>
<Button red>
  <template #icon>
  <img class="text-gray-500 w-4 h-4 mr-2" :src="iconSrc">
</template>
  <span class="hidden md:block">Infos</span>
</Button>
<Button green>
  <template #icon>
  <img class="text-gray-500 w-4 h-4 mr-2" :src="iconSrc">
</template>
  <span class="hidden md:block">Infos</span>
</Button>
<Button orange>
  <template #icon>
  <img class="text-gray-500 w-4 h-4 mr-2" :src="iconSrc">
</template>
  <span class="hidden md:block">Infos</span>
</Button>
```

### Without Icon

```vue live
<Button>
  <span class="hidden md:block">Infos</span>
</Button>
```

### Disabled Button

```vue live
const iconSrc = require("@/assets/svg/info.svg")

<Button disabled>
  <template #icon>
  <img class="text-gray-500 w-4 h-4 mr-2" :src="iconSrc">
</template>
  <span class="hidden md:block">Admin</span>
</Button>
```    
</docs>
