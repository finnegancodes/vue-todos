import "./assets/global.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createStore, Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    todos: Todo[];
    filterCompleted: boolean;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

export interface State {
  todos: Todo[];
  filterCompleted: boolean;
}

export interface Todo {
  id: string;
  task: string;
  isDone: boolean;
}

const savedJSON = localStorage.getItem("vue-todos") ?? "[]";
const localTodos = JSON.parse(savedJSON) ?? [];

const saveTodos = (todos: Todo[]) => {
    localStorage.setItem("vue-todos", JSON.stringify(todos))
}

const store = createStore<State>({
  state() {
    return {
      todos: localTodos,
      filterCompleted: false,
    };
  },
  mutations: {
    add(state: State, todo: Todo) {
      state.todos = [...state.todos, todo];
      saveTodos(state.todos);
    },
    remove(state: State, todo: Todo) {
      state.todos = state.todos.filter((item) => item !== todo);
      saveTodos(state.todos);
    },
    removeCompleted(state: State) {
      state.todos = state.todos.filter((item) => !item.isDone);
      saveTodos(state.todos);
    },
    update(state: State, {todo, isDone}: any) {
      const index = state.todos.indexOf(todo);
      const todos = [...state.todos];
      todos[index].isDone = isDone;
      state.todos = todos;
      saveTodos(state.todos);
    },
    changeFilter(state: State, completed: boolean) {
        state.filterCompleted = completed
    }
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
