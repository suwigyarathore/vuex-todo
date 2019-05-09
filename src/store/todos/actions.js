import Axios from "axios";
export default {
  addTodo({ state, commit }, payload) {
    // make api request to add todo
    Axios.post("http://5cd41fc4b231210014e3d55f.mockapi.io/todos", {
      name: payload
    }).then(() => {
      commit("addTodo", payload);
    });
  },

  getTodos({ commit }) {
    Axios.get("http://5cd41fc4b231210014e3d55f.mockapi.io/todos").then(
      response => commit("addTodos", response.data.map(item => item.name))
    );
  }
};
