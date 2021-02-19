import * as firebase from 'firebase'
import {
  store
} from '..'

export default {
  state: {
    loadedMeetups: []
  },
  mutations: {
    registerUserForMeetup(state, payload) {
      const id = payload.id
      if (state.user.registeredMeetups.findIndex(meetup => meetup.id === id) >= 0) {
        return
      }
      state.user.registeredMeetups.push(id)
      state.user.fbKeys[id] = payload.fbKey
    },
    unregisterUserFromMeetup(state, payload) {
      const registeredMeetups = state.user.registeredMeetups
      registeredMeetups.splice(registeredMeetups.findIndex(meetup => meetup.id === payload), 1)
      Reflect.deleteProperty(state.user.fbKeys, payload)
    },
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    },
    updateMeetup(state, payload) {
      const meetup = state.loadedMeetups.find(meetup => {
        return meetup.id === payload.id
      })
      if (payload.title) {
        meetup.title = payload.title
      }
      if (payload.description) {
        meetup.description = payload.description
      }
      if (payload.date) {
        meetup.date = payload.date
      }
    },
    setLoadedMeetups(state, payload) {
      state.loadedMeetups = payload
    }
  },
  actions: {
    registerUserForMeetup({
      commit,
      getters
    }, payload) {
      commit('setLoading', true)
      const user = getters.user
      firebase.database().ref('/users/' + user.id).child('/registrations/')
        .push(payload)
        .then(data => {
          commit('setLoading', false)
          commit('registerUserForMeetup', {
            id: payload,
            fbKey: data.key
          })
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    unregisterUserFromMeetup({
      commit,
      getters
    }, payload) {
      commit('setLoading', true)
      const user = getters.user
      if (!user.fbKeys) {
        return
      }
      const fbKey = user.fbKeys[payload]
      firebase.database().ref('/users/' + user.id + '/registrations/').child(fbKey)
        .remove()
        .then(() => {
          commit('setLoading', false)
          commit('unregisterUserFromMeetup', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    },
    loadMeetups({ commit }) {
      commit('setLoading', true)
      firebase.database().ref('meetups').once('value')
        .then((data) => {
          const meetups = []
          const obj = data.val()
          for (let key in obj) {
            meetups.push({
              id: key,
              firstName: obj[key].firstName,
              lastName: obj[key].lastName,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              address: obj[key].address,
              type: obj[key].type,
              teacher: obj[key].teacher,
              date: obj[key].date,
              price: obj[key].price,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedMeetups', meetups)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createMeetup({
      commit,
      getters
    }, payload) {
      const meetup = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        title: payload.title,
        description: payload.description,
        address: payload.address,
        type: payload.type,
        date: payload.date.toISOString(),
        price: payload.price,
        creatorId: getters.user.id
      }
      let imageUrl
      let key
      firebase.database().ref('meetups').push(meetup)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('meetups/' + key + '.' + ext).put(payload.image)
        })
        .then(snapshot => {
          return new Promise((resolve, reject) => {
            snapshot.ref.getDownloadURL().then(url => {
              snapshot.downloadURL = url
              resolve(snapshot)
            })
          })
        })
        .then((snapshot) => {
          imageUrl = snapshot.downloadURL
          return firebase.database().ref('meetups').child(key).update({
            imageUrl: imageUrl
          })
        })
        .then(() => {
          commit('createMeetup', {
            ...meetup,
            imageUrl: imageUrl,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updateMeetupData({
      commit
    }, payload) {
      commit('setLoading', true)
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.description) {
        updateObj.description = payload.description
      }
      if (payload.date) {
        updateObj.date = payload.date
      }
      firebase.database().ref('meetups').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updateMeetup', payload)
        })
        .catch(error => {
          console.log(error)
          commit('setLoading', false)
        })
    }
  },

  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
    //TODO: add slice to get the last meetups to get in the home just the last 4 meetups. https://www.youtube.com/watch?v=GcyjaJZaVLg&list=PL55RiY5tL51qxUbODJG9cgrsVd7ZHbPrt&index=9
  }
}