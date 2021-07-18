<template>
  <section class="loading">
    <span
      class='loading__item'
      v-for="item in spans"
      :key="item"
      :style="{
        '--spanWidth': `${spanWidth / 10}rem`,
        '--spanHeight': `${spanHeight / 10}rem`,
        '--backgroundColor': `${backgroundColor}`,
        'animation-delay': `${startAnimationDelay - (startAnimationDelay / count * (item - 1))}s`,
        'transform': `rotate(${360 / count * (item)}deg)`
      }"
    ></span>
  </section>
</template>

<script lang='ts'>
  import { defineComponent, PropType, ref } from "vue";

  export default defineComponent({
    name: 'Loading',
    props: {
      width: {
        type: Number as PropType<number>,
        default: 25
      },
      height: {
        type: Number as PropType<number>,
        default: 25
      },
      spanWidth: {
        type: Number as PropType<number>,
        default: 5
      },
      spanHeight: {
        type: Number as PropType<number>,
        default: 5
      },
      backgroundColor: {
        type: String as PropType<string>,
        default: '#003554'
      },
      count: {
        type: Number as PropType<number>,
        default: 12
      },
      startAnimationDelay: {
        type: Number as PropType<number>,
        default: -1
      }
    },
    setup({ count }) {
      const spans = ref<number[]>(Array.from(Array(count).keys()));

      return {
        spans
      }
    }
  });
</script>

<style lang='scss' scoped>
  .loading {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    span {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 100%;
      animation: loading linear 1s infinite;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        width: var(--spanWidth);
        height: var(--spanHeight);
        background: var(--backgroundColor);
      }
    }
  }
  
  @keyframes loading {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
