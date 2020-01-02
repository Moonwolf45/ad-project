import * as firebase from 'firebase/app'
import 'firebase/database'

class Ad {
  constructor (title, description, ownerId, imageSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.promo = promo
    this.imageSrc = imageSrc
    this.id = id
  }
}

export default {
  state: {
    ads: [
      // {
      //   id: '1',
      //   title: 'First Ad',
      //   description: 'Hello i am first description',
      //   promo: false,
      //   imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      // },
      // {
      //   id: '2',
      //   title: 'Two Ad',
      //   description: 'Hello i am two description',
      //   promo: true,
      //   imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      // },
      // {
      //   id: '3',
      //   title: 'Three Ad',
      //   description: 'Hello i am three description',
      //   promo: true,
      //   imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      // },
      // {
      //   id: '4',
      //   title: 'Four Ad',
      //   description: 'Hello i am four description',
      //   promo: false,
      //   imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      // }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    },
    loadAds (state, payload) {
      state.ads = payload
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const newAd = new Ad(payload.title, payload.description, getters.user.id, payload.imageSrc, payload.promo)

        const firebaseValue = await firebase.database().ref('ads').push(newAd)
        commit('createAd', {
          ...newAd, id: firebaseValue.key
        })
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchAds ({commit}) {
      commit('clearError')
      commit('setLoading', true)
      const resultAds = []

      try {
        const firebaseVal = await firebase.database().ref('ads').once('value')
        const ads = firebaseVal.val()
        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(new Ad(ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key))
        })
        commit('loadAds', resultAds)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
