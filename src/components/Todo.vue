<script lang="ts">
export default {
  props: ["todo"],
  data() {
    return {
      isDone: this.todo.isDone
    };
  },
  methods: {
    removeTodo() {
      this.$store.commit("remove", this.todo);
    },
  },
  watch: {
    isDone: {
      handler(isDone) {
        this.$store.commit("update", {todo: this.todo, isDone});
      }
    }
  }
};
</script>

<template>
  <article>
    <input type="checkbox" v-model="isDone" />
    <p class="task" :class="{done: isDone}">{{ todo!.task }}</p>
    <button class="remove" @click="() => removeTodo()">
      <span class="material-symbols-outlined"> delete </span>
    </button>
  </article>
</template>

<style scoped>
article {
  border-bottom: 1px solid var(--divider);
  display: flex;
  align-items: center;
  padding-inline-start: 1rem;
}

input[type="checkbox"] {
  margin-inline-end: 1rem;
  border: none;
}

.task {
  flex: 1;
  display: block;
  padding: .5rem 0;
}

.remove {
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  margin: 1rem;
  padding: 0;
  color: var(--secondary);
}

.done {
  color: var(--secondary);
  text-decoration: line-through;
}
</style>
