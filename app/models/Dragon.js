export default class Dragon {
  constructor(reqData) {
    this.id = reqData.id
    this.name = reqData.name
    this.imgUrl = reqData.imgUrl
    this.maxHp = reqData.maxHP
    this.currentHp = reqData.currentHP
  }
}