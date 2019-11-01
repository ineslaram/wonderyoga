import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    user: null
  },

  getter: {
  user (state) {
    return state.user
  }
  },

  mutations:{
    SET_USER(state, payload) {
      state.user = payload
    }
  },

  actions: {
    signUserUp({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            password: user.password,
            registerMeetups: []
          }
          commit('SET_USER', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
    }
  }
})
