class Driver {

  constructor(name, joinDate) {
    this.name = name
    this.joinDate(joinDate)
  }

  joinDate(date) {
    this.startDate = new Date(date)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - (this.startDate.getYear() + 1900)
  }

}


class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

}
