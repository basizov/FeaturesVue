<template>
  <section class="select" @click.stop>
    <div
      class="select__header"
      @click="setShowItems(!showItems)"
    >{{ selectedItem }}</div>
    <div
      class="select__items"
      :class="{
        'select__items-active': showItems
      }"
    >
      <div
        class="select__item"
        v-for="item in workItems"
        :key="item.type"
        @click="setSelectedItem(item.text)"
      >{{ item.text }}</div>
    </div>
    <div
      class="select__arrow"
      :class="{
        'select__arrow-active': showItems
      }"
    ></div>
  </section>
</template>

<script lang='ts'>
  import { computed, defineComponent, onMounted, onUnmounted, PropType, ref } from "vue";
  import { ISelect } from '@/app/models/ISelect';

  export default defineComponent({
    name: 'CustomSelect',
    props: {
      items: {
        type: Array as PropType<ISelect[]>,
        default: []
      }
    },
    setup({ items }, { emit }) {
      const fstItem: ISelect = {
        text: 'Choose item',
        type: ''
      };
      const workItems = computed(() => [fstItem, ...items].filter(item => item.text !== selectedItem.value));
      const selectedItem = ref<string>(fstItem.text);
      const showItems = ref<boolean>(false);
      const setSelectedItem = (newSelectedItem: string) => {
        selectedItem.value = newSelectedItem;
        hideSelect();
        emit('update', newSelectedItem);
      };
      const setShowItems = (value: boolean) => {
        showItems.value = value;
      };
      const hideSelect = () => {
        setShowItems(false);
      };

      onMounted(() => document.addEventListener('click', hideSelect));
      onUnmounted(() => document.removeEventListener('click', hideSelect));

      return {
        selectedItem,
        showItems,
        setSelectedItem,
        setShowItems,
        workItems
      }
    }
  });
</script>

<style lang='scss' scoped>
  .select {
    cursor: pointer;
    position: relative;
    width: max-content;
    min-width: 20ch;
    z-index: 10000;
    &__header,
    &__items {
      border: .1rem solid var(--white);
      text-align: center;
      width: 100%;
      border-radius: .3em;
      box-shadow: 0 0 .125rem var(--white);
    }
    &__header,
    &__item {
      padding: .4em;
      background-color: var(--primary);
    }
    &__items {
      position: absolute;
      overflow: hidden;
      visibility: hidden;
      top: 100%;
      opacity: 0;
      transition: top .25s linear, opacity .25s linear, visibility .25s linear;
      &-active {
        visibility: visible;
        opacity: 1;
        top: calc(100% + .3rem);
      }
    }
    &__item {
      &:hover {
        background-color: var(--secondary);
      }
    }
    &__arrow {
      position: absolute;
      top: 0;
      right: 0;
      width: 3rem;
      height: 100%;
      pointer-events: none;
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 1rem;
        width: .7rem;
        height: .7rem;
        border-top: .2rem solid var(--white);
        border-right: .2rem solid var(--white);
        transform: translateY(-70%) rotate(135deg);
        transition: transform .25s linear;
      }
      &-active {
        &:after {
          transform: translateY(-30%) rotate(-45deg);
        }
      }
    }
  }
</style>
