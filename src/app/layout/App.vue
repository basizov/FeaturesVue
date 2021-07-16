<template>
  <custom-select :items='items' />
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

</style>
