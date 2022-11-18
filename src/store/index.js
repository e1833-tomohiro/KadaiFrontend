import { Store } from 'vuex'
import { createStore } from 'vuex-extensions'
import createPersistedState from 'vuex-persistedstate'
const store = createStore(Store, {
    state () {
      return {
          suppliesDataSets: [
              /*
                [
                  { //food
                      "labels": [],
                      "data": [],
                  },
                  { //drink 
                    "labels": [],
                    "data": [],
                  },
                  { //medicine
                    "labels": [],
                    "data": [],
                  }
              ]
              */
          ]
      }
    },
    mutations: {
        setSuppliesData (state, payload) {
            state.suppliesDataSets[payload.warehouseId-1][payload.type-1].data = payload.data;
            state.suppliesDataSets[payload.warehouseId-1][payload.type-1].labels = payload.labels;
        },
        init(state, suppliesDataSet){
            state.suppliesDataSets.push(suppliesDataSet);
        },
        pop(state){
            state.suppliesDataSets.pop()
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