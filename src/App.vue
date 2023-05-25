<script lang="ts">
import Todo from "./components/Todo.vue";
import TodoField from "./components/TodoField.vue";
import TodoList from "./components/TodoList.vue";
import Toolbar from "./components/Toolbar.vue";

export default {
  components: {
    TodoField,
    Todo,
    TodoList,
    Toolbar,
  },
};
</script>

<template>
  <header>
    <h1>Vue Todos</h1>
  </header>
  <section class="paper main">
    <main>
      <TodoField></TodoField>
      <TodoList></TodoList>
    </main>
    <footer>
      <Toolbar></Toolbar>
    </footer>
  </section>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-block: 2rem;
}

footer {
  margin-block-end: 5rem;
}

.main {
  max-width: var(--max-width);
  margin: 0 auto;
}
</style>
