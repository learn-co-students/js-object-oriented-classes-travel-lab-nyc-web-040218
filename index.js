const eastWest = {'1st Avenue':1, '2nd Avenue':2, '3rd Avenue':3, 'Lexington Avenue':4, 'Park':5, 'Madison Avenue':6, '5th Avenue':7}

class Driver {
    constructor(name, startDate){
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear()
    }
}

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    getValueOfAvenue(horizontalVal) {
        return eastWest[horizontalVal]
    }
    
    blocksTravelled() {
        let verticalDistance = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
        let horizontalDistance = Math.abs(this.getValueOfAvenue(this.endingLocation.horizontal) - this.getValueOfAvenue(this.beginningLocation.horizontal))
        return verticalDistance + horizontalDistance
    }

    estimatedTime(peak) {
        peak = peak || false
        return peak ? this.blocksTravelled()/2 : this.blocksTravelled()/3
    }

}
