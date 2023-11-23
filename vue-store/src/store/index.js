import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null
    },
    getters: {
        getUser(store) {
            return store.user;
        }
    },
    actions: {
        setUser(state, payload) {
            // axios.post("https://adress-de-l-api/users", payload)
            state.commit("SET_USER", payload);
        }
    },
    mutations: {
        SET_USER(state, payload) {
           state.user = payload; 
        }
    }
});