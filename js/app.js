let narrator
let root
let player
let GameState
let Narrator

async function ready() {
  root = document.querySelector("#root")
  player = new Player("player1")
  narrator = new Diaglog("Narrator")
  Gamestate = {
    room: new room(),
    roomNumber: 1,
  };
  
// TODO: Set up event listeners on buttons to handle right/wrong/meh answers, and initialize first setTimeout()
  Mainloop()
}

// REFERENCE
//narrator=new Dialog(95,30) // Reference for testing and later use
//const door1 = new Door(selectDoor1) // Reference
// console.log(door1)
// const door2 = new Door(selectDoor2)
// console.log(door2)
// const door3 = new Door(selectDoor3)
// console.log(door3)
// }
//async function selectDoor1(){ // Reference function
// console.log(narrator.open)
// // Assume room was declared
// const myRoom = new Room("Forest", 2)

// if(!narrator.open){
//     narrator.show(myRoom.getDescription,2.5,67.5)
// }else{
//     narrator.close()
// }

async function Mainloop() {
    Narrator.show(GameState.room)
}

document.addEventListener("DOMContentLoaded", ready);
