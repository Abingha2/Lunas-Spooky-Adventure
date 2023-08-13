class Room{
    roomType
    roomNumber
    obstacle
    correctDoor
    constructor(roomNumber){
        if(roomNumber <=14){
            this.roomType = "Early"
        }
        else if(roomNumber <30){
            this.roomType = "Mid"
        }
        else {
            this.roomType = "Late"
        }
        this.roomNumber = roomNumber
        this.correctDoor = Math.floor(Math.random() * 3)
        // TODO: Generate a random obstacle here, and store to this.obstacle based on room difficulity
        // TODO: Make difficulty of obstacle based on room number
    }
    //function to show the room number, the room type, and the name of its obstacle
    roomInfo(){
    const roomData={
        number:this.roomNumber,
        type:this.roomType,
        obstacle:this.obstacle,
    }
        return roomData
}
    noise(){
        console.log("echo")
    }
    
    get getDescription(){
        let description = `You see a ${this.roomType} room. You are in room ${this.roomNumber}`
        return description
    }
}