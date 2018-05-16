class Driver {
  constructor(name, dateString) {
    this.name = name
    this.startDate = new Date(dateString)
  }

  yearsExperienceFromBeginningOf(year) {
    return (year - this.startDate.getFullYear());
  }
}

const eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled () {
    let blocksVertical = Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical));

    let blocksHorizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);

    return blocksVertical + blocksHorizontal;
  }

  estimatedTime (peak = false) {
    if (peak === true) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }

}
