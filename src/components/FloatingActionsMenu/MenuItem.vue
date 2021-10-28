<template>
  <button
    class="floating-menu-item d-flex align-center text-left"
    @click="triggerAction"
  >
    <v-icon
      size="32"
      class="mr-4"
      :color="menuItem.iconColor"
    >
      {{ menuItem.icon }}
    </v-icon>
    <span>{{ menuItem.name }}</span>
  </button>
</template>

<script>
export default {
  props: {
    menuItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    triggerAction() {
      this.menuItem.action()
      this.$emit('close-menu')
    },
  },
}
</script>

<style lang="scss" scoped>
.floating-menu-item {
  padding: 0.5em 1rem;
  margin: 0 0.25em 0.5em 0.25em;
  box-shadow: -1px 2px 4px rgba($black, 0.3);
  transform: translateY(0);
  transition: all 0.3s ease;
  font-weight: bold;
  border-radius: 0.5em;
  flex-basis: 100%;

  @media (min-width: 767px) {
    flex-basis: 275px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: -1px 4px 6px rgba($black, 0.4);
  }
}
</style>
