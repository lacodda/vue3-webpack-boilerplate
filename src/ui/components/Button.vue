<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn {
  background-image: linear-gradient(to top, var(--teal) 0%, var(--blue) 51%, var(--teal) 100%);
  padding: .75rem .5rem;
  text-align: center;
  text-transform: none;
  transition: 0.5s;
  background-size: auto 200%;
  color: var(--white);
  border-radius: 0.5rem;
  display: flex;
  border-color: transparent;
  font-weight: 400;
  font-size: 0.8rem;
  cursor: pointer;
  line-height: 0.5rem;
  align-items: center;
  height: min-content;

  &[size=l] {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.8rem;
  }

  &:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: var(--white);
    text-decoration: none;
  }
}
</style>
