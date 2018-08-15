export default class Champion {
  constructor(reqData) {
    this.id = reqData.id
    this.name = reqData.name
    this.imgUrl = reqData.imgUrl
    this.race = reqData.race
    this.class = reqData.class
    this.hp = reqData.hp
    this.attacks = reqData.attacks
  }
}