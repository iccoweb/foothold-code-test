<template>
  <div class="floating-action-menu d-flex">
    <v-btn
      class="floating-action-menu-toggle"
      elevation="2"
      :color="buttonData.bg"
      fab
      @click.prevent="toggleMenu"
    >
      <v-icon
        :aria-hidden="buttonData.ariaHidden"
        :color="buttonData.color"
        large
      >
        {{ buttonData.icon }}
      </v-icon>
    </v-btn>
    <div
      class="floating-action-menu-items d-flex flex-wrap justify-end"
      :class="{
        open: isOpen
      }"
    >
      <MenuItem
        v-for="menuItem in menuItems"
        :key="`menu-item-${menuItem.name}`"
        :menu-item="menuItem"
        @close-menu="toggleMenu"
      />
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'
import ACTIONS from '@/consts/floatingMenuActions'

export default {
  components: { MenuItem },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    buttonData() {
      return {
        bg: this.isOpen ? 'teal darken-4' : 'teal lighten-2',
        color: this.isOpen ? 'teal lighten-4' : 'teal darken-4',
        icon: this.isOpen ? 'mdi-close' : 'mdi-plus',
      }
    },
    menuItems() {
      return ACTIONS
    },
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.floating-action-menu {
  position: fixed;
  bottom: 30px;
  right: 30px;
  left: 30px;

  @media (min-width: 600px) {
    left: inherit;
  }
}

.floating-action-menu-items {
  opacity: 0;
  transition: opacity 0.15s ease;
  position: absolute;
  bottom: 60px;
  right: 0;

  @media (min-width: 600px) {
    width: 620px;
  }

  &.open {
    opacity: 1;
  }
}

.floating-action-menu-toggle {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
