class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }

}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let hozDist = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));

    let verDist = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);

    return hozDist + verDist

  }

  estimatedTime(peak = false){
    let div = 3
    if (peak){
      div = 2
    }
    return this.blocksTravelled() / div
  }

}
