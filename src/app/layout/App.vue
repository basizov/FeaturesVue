<template>
  <custom-select :items='items' />
  <div class="app__loading">
    <loading />
  </div>
</template>

<script lang='ts'>
  import { defineComponent, ref } from "vue";
  import { ISelect } from "../models/ISelect";

  export default defineComponent({
    name: 'App',
    setup() {
      const items = ref<ISelect[]>([
        { text: '1', type: '1' },
        { text: '2', type: '2' },
        { text: '3', type: '3' }
      ]);

      return {
        items
      }
    }
  });
</script>

<style lang='scss'>
  .app {
    &__loading {
      position: relative;
      width: 10rem;
      height: 10rem;
      background-color: hsl(0, 0%, 100%);
      padding: 1rem;
    }
  }
</style>
