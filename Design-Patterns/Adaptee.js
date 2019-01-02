class Adaptee {
  specificRequest () {
    return '德国标准插头'
  }
}

class Target {
  constructor () {
    this.adaptee = new Adaptee()
  }

  request () {
    let info = this.adaptee.specificRequest();
    return `${info}-->适配器-->中国标准插头`
  }
}

console.log((new Target()).request())