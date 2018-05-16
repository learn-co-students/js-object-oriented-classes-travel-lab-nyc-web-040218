class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    const sy = this.startDate.getFullYear()
    return year - sy
  }
  //WRONG!! YOU CAN'T CALL THIS ON THE CLASS, BUT ON THE INSTANCE OF THE CLASS!!!!
  // yearsExperienceFromBeginningOf(year) {
  //   var sy = Date.getFullYear(this.startDate)
  //   return year - sy
  //}
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let horizontalDistance = Math.abs((eastWest.indexOf(this.beginningLocation.horizontal) + 1) - (eastWest.indexOf(this.endingLocation.horizontal) + 1))
    return verticalDistance + horizontalDistance
  }

  estimatedTime(peakHours) {
    let blocks = this.blocksTravelled()
     if (peakHours) {
      return blocks / 2
     } else {
      return blocks / 3
     }
  }
}
