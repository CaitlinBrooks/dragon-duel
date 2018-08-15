import DuelService from "./duel-service.js"

let duelService = new DuelService()

function drawDragons(dragons) {
  let template = ''
  for (let i = 0; i < dragons.length; i++) {
    const dragon = dragons[i];
    template += `
    <p>${dragon.id}</p>
    <p>${dragon.name}</p>
    <img src="${dragon.imgUrl}" alt="dragon photo">
    <p>${dragon.maxHp}</p>
    <p>${dragon.currentHp}</p>
    `
  }
  document.getElementById('dragons').innerHTML = template
}

function drawChampions(champions) {
  let template = ''
  for (let i = 0; i < champions.length; i++) {
    const champion = champions[i];
    template += `
    <p>${champion.id}</p>
    <p>${champion.name}</p>
    <img src="${champion.imgUrl}" alt="champion photo">
    <p>${champion.maxHp}</p>
    <p>${champion.currentHp}</p>
    `
  }
  document.getElementById('champions').innerHTML = template
}


export default class DuelController {
  constructor() {
    duelService.getDragons(drawDragons)
    duelService.getChampions(drawChampions)
  }
}