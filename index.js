let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(startLocation, endLocation){
    this.startLocation = startLocation
    this.endLocation = endLocation
  }
  avenueToInteger(avenue){
    return eastWest.indexOf(avenue)
  }
  blocksTravelled(){
    let avenueDistance = this.avenueToInteger(this.endLocation.horizontal) - this.avenueToInteger(this.startLocation.horizontal)
    let streetDistance = this.endLocation.vertical - this.startLocation.vertical
    return (Math.abs(avenueDistance) + Math.abs(streetDistance))
  }
  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
