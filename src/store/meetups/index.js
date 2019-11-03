

export default {
  state: {
    loadedMeetups: [
      {
        id: 1,
        title: 'Yoga en La Malvarosa',
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1094&q=80',
        address: 'Calle de la Malvarosa 88',
        type: 'Vinyassa Flow',
        teacher: 'Rachel Brathen',
        time: '10:00h a 11:00h',
        date: '15-09-2019',
        price: '5€'
      },   
      {
        id: 2,
        title: 'Yoga en la Patacona',
        imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        address: 'Calle de la Malvarosa 88',
        type: 'Vinyassa Flow',
        teacher: 'Rachel Brathen',
        time: '10:00h a 11:00h',
        date: '14-09-2019',
        price: '5€'
      }
    ]
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        title: payload.title,
        description: payload.description,
        imageUrl: payload.imageUrl,
        address: payload.address,
        type: payload.type,
        date: payload.date,
        id: 'ojsdffuwefskjd588'
      }
      //TODO: reach out to firebase and store it
      commit('createMeetup', meetup)
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