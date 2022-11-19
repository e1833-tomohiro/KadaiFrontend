import { Store } from 'vuex'
import { createStore } from 'vuex-extensions'
import createPersistedState from 'vuex-persistedstate'
const store = createStore(Store, {
    state () {
      return {
          suppliesDataSets: {
            "labels": [],
            "datasets": []
          }
      }
    },
    mutations: {
        init(state, payload){
            state.suppliesDataSets.labels = payload.labels;
            state.suppliesDataSets.datasets = payload.datasets;
        }
    },
    plugins: [createPersistedState(
        { 
          key: 'akashiDX',
          storage: window.sessionStorage
        }
    )]
})

export default store