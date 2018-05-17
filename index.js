class Driver{
  constructor(name, day){
    this.name = name;
    this.startDate = new Date(day);
  }

  startDate(){
    let d = new Date();
    return d;
  }

  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year,1,1);

    return endDate.getFullYear() - this.startDate.getFullYear();
  }
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.begin = beginningLocation;
    this.end = endingLocation;
  }

  blocksTravelled(){
    let avs = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    let hori = Math.abs(avs.indexOf(this.begin.horizontal) - avs.indexOf(this.end.horizontal));
    let vert = this.end.vertical - this.begin.vertical;
    return hori + vert;
  }

  estimatedTime(a,b){
    if(a){
      return this.blocksTravelled() / 2
    }
    return this.blocksTravelled() / 3
  }
}
