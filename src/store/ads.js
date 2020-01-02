export default {
  state: {
    ads: [
      {
        id: '1',
        title: 'First Ad',
        description: 'Hello i am first description',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: '2',
        title: 'Two Ad',
        description: 'Hello i am two description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        id: '3',
        title: 'Three Ad',
        description: 'Hello i am three description',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        id: '4',
        title: 'Four Ad',
        description: 'Hello i am four description',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ]
  },
  mutations: {},
  actions: {},
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
    }
  }
}
