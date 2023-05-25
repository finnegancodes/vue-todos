<script lang="ts">
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      if (!this.newTodo) return;
      this.$store.commit("add", {
        id: crypto.randomUUID(),
        task: this.newTodo,
        isDone: false,
      });
      this.newTodo = "";
    },
  },
};
</script>

<template>
  <form @submit.prevent="addTodo">
    <input
      type="text"
      required
      placeholder="What needs to be done?"
      v-model="newTodo"
      maxlength="128"
      autofocus
    />
    <button type="submit">
      <span class="material-symbols-outlined"> add </span>
    </button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--divider);
}

input[type="text"] {
  flex: 1;
  border: none;
  padding-inline-start: 1rem;
}

input[type="text"]:focus-visible {
  outline: none;
}

button[type="submit"] {
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  margin: 1rem;
  padding: 0;
}
</style>
