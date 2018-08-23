function produceDrivingRange(range) {
  return function(sBlock, eBlock) {

    let start = parseInt(sBlock)
    let end = parseInt(eBlock)
    let distanceToTravel = Math.abs(end - start)
    let diff = range - distanceToTravel

    if(diff > 0) {
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
