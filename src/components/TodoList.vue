<script lang="ts">
import Todo from "./Todo.vue";
import { type Todo as TD } from "../main";

export default {
  components: {
    Todo,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    filteredTodos() {
      if (this.$store.state.filterCompleted) {
        return this.$store.state.todos.filter((item: TD) => !item.isDone);
      } else {
        return this.$store.state.todos;
      }
    }
  },
};
</script>

<template>
  <ul role="list">
    <li v-for="todo in filteredTodos" :key="todo.id">
      <Todo :todo="todo"></Todo>
    </li>
  </ul>
</template>
