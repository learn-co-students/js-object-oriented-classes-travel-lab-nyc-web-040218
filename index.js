class Driver{
  constructor(name, start){
    this.name = name
    this.startDate = new Date(start)
  }

  yearsExperienceFromBeginningOf(year){
    return year - (this.startDate.getYear() + 1900)
  }
}


class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let vertical = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    let horizontal = Math.abs((eastWest.indexOf(this.endingLocation.horizontal) + 1) - (eastWest.indexOf(this.beginningLocation.horizontal) + 1))
    return vertical + horizontal
  }

  estimatedTime(peak = false){
    let time = 3
      if (peak){
        time = 2
      }
    return this.blocksTravelled() / time
  }
}
