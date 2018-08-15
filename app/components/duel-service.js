import Dragon from "../models/Dragon.js"
import Champion from "../models/Champion.js"

// @ts-ignore
const dragonsApi = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/dragons',
  timeout: 4000
})

// @ts-ignore
const championsApi = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/champions',
  timeout: 4000
})


export default class DuelService {
  getDragons(draw) {
    dragonsApi.get()
      .then(res => {
        let dragons = res.data.data.map(rawDragon => {
          return new Dragon(rawDragon)
        })
        draw(dragons)
      })
  }

  addDragon(formData, draw) {
    let newDragon = new Dragon({
      id: formData.id.value,
      name: formData.name.value,
      imgUrl: formData.imgUrl.value,
      maxHp: formData.maxHp.value,
      currentHp: formData.currentHp.value,
    })
    dragonsApi.post('', newDragon)
      .then(res => {
        this.getDragons(draw)
      })
  }

  getChampion(draw) {
    championsApi.get()
      .then(res => {
        let champions = res.data.data.map(rawChampion => {
          return new Champion(rawChampion)
        })
        draw(champions)
      })
  }

  addChampion(formData, draw) {
    let newChampion = new Champion({
      id: formData.make.value,
      name: formData.model.value,
      imgUrl: formData.year.value,
      race: formData.price.value,
      class: formData.description.value,
      hp: formData.hp.value,
      attacks: formData.attacks.value
    })
    championsApi.post('', newChampion)
      .then(res => {
        this.getChampion(draw)
      })
  }
}