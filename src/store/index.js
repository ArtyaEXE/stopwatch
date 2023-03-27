import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      timers: []
    };
  },
  mutations: {
    addTimer(state) {
      state.timers.push({
        id: Date.now(),
        status: 'stopped'
      });
    }
  }
});

export default store;