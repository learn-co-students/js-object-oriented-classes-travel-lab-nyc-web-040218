
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const streetBlockTravelled = Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical));
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const avenueBlockTravelled = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));

    return streetBlockTravelled + avenueBlockTravelled;
  }

  estimatedTime(isPeakHour) {
    console.log(this.blocksTravelled())
    if(isPeakHour === undefined) {
      return this.blocksTravelled()/3;
    } else {
      return this.blocksTravelled()/2;
    }
  }
}
