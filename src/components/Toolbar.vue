<script lang="ts">
import { type Todo } from "../main";

export default {
  data() {
    return {
      filterCompleted: false,
    };
  },
  computed: {
    filterText(): string {
      if (this.filterCompleted) {
        return "Show All";
      } else {
        return "Hide Completed";
      }
    },
    todos(): Todo[] {
      return this.$store.state.todos as Todo[];
    },
  },
  methods: {
    removeCompleted() {
      this.$store.commit("removeCompleted");
    },
  },
  watch: {
    filterCompleted: {
      handler(filterCompleted) {
        this.$store.commit("changeFilter", filterCompleted);
      }
    }
  }
};
</script>

<template>
  <ul>
    <a
      @click="filterCompleted = !filterCompleted"
      :class="{ disabled: !todos.length }"
    >
      <small>{{ filterText }}</small>
    </a>
    <a @click="removeCompleted" :class="{ disabled: !todos.length }">
      <small>Delete Completed</small>
    </a>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-between;
}

.disabled {
  color: var(--secondary);
  pointer-events: none;
}
</style>
