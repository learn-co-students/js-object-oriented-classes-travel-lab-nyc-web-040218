class Driver {
    constructor(name, day){
        this.name = name;
        this.startDate = new Date(day);
    }

    yearsExperienceFromBeginningOf(year){
        let start = this.startDate.getFullYear();
        let elapsed = year - start;
        return elapsed;
    }
}

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }
    blocksTravelled(){
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
        let horizontal_a = eastWest.indexOf(this.beginningLocation["horizontal"]);
        let horizontal_b = eastWest.indexOf(this.endingLocation["horizontal"]);
        let horz_move = Math.abs(horizontal_a - horizontal_b);
        let vert_move = Math.abs(this.beginningLocation["vertical"] - this.endingLocation["vertical"]);
        return horz_move + vert_move;
    }
    estimatedTime(peak){
        if (peak){
            return (this.blocksTravelled())/2;
        }else{
            return (this.blocksTravelled())/3;
        }
    }
}
