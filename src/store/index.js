import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, payload) {
      state.todos = [...state.todos, payload];
    }
  },
  getters: {
    todosCount(state) {
      return state.todos.length;
    }
  },
  actions: {
    addTodo({ state, commit }, payload) {
      // make api request to add todo
      Axios.post("http://5cd41fc4b231210014e3d55f.mockapi.io/todos", {
        name: payload
      }).then(() => {
        commit("addTodo", payload);
      });
    }
  }
});

export default store;
