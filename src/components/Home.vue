<template>
  <div class="home__container">
    <div class="home__title">
      <img :src="require('images/logo.svg')" width="100" />
      <h1>Vue 3 Boilerplate</h1>
    </div>
    <div class="home__counter">
      <button-el size="l" @click="inc">+</button-el>
      <button-el size="l" @click="dec">−</button-el>
      <div class="home__count">{{count}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Ref, ref } from 'vue';

export default {
  setup () {
    const count: Ref<number> = ref(0);

    function inc (): void {
      count.value++;
    }
    function dec (): void {
      count.value--;
    }
    return { count, inc, dec };
  },
};
</script>

<style scoped lang="scss">
.home {
  &__container {
    display: grid;
    justify-content: center;
    align-content: center;
    background: var(--gr-azure-pink);
    width: 100%;
    height: 100%;
  }
  &__title {
    display: flex;
    h1 {
      font-size: var(--font-size-h1);
      width: max-content;
      text-transform: uppercase;
      background: var(--teal);
      background: var(--gr-teal-blue);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__counter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  &__count {
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);
  }
}
</style>
