//book section that is known and filled
const GameState= {
  room: null,
  roomNumber: 0
}
//different book sections but havent filled them yet?
let narrator
let root
let player
let Narrator
let lifeCounter
//layout of library?
async function ready() {
  root = document.querySelector("#root")
  player = new Player("player1", 5)
  narrator = new Dialog(95, 30)
  lifeCounter = new Lives(5)
  new Door(0, handleDoorAndTimer)
  new Door(1, handleDoorAndTimer)
  new Door(2, handleDoorAndTimer)
  Mainloop()
}

async function Mainloop() {
  // increase the room number by 1
  GameState.roomNumber++
  // creates a new set of rooms to chose from
  GameState.room = new Room(GameState.roomNumber)
  // Creates a new timer for the room, with 45 seconds on the clock - Passing the function handleDoorAndTimer to the constructor
  new Timer(45, GameState.roomNumber, handleDoorAndTimer)
  lifeCounter.update(player.lives)
  // Increment Room
  // Create new Room
  narrator.show(GameState.room.getDescription,2.5,67.5) // We'll be updating this.
}

async function isCorrectDoor(door) {
  // check if door clicked is correct door based on args
  if (door === GameState.room.correctDoor) {
    return true
  }
  return false
}

async function deathCheck() {
  if (player.lives === 0) {
    return true
  }
  return false
}

async function winCheck(){
  if(GameState.roomNumber === 30 && player.lives > 0){
    return true
  }
  return false
}

async function handleLose(){
    narrator.show("You Lose the Game. Are you sure you don't want to play again, Luna needs your help finding her way home! Push any button to play again" ,2.5,67.5) 
    GameState.roomNumber = 0
    player.lives = 5
}

async function handleWin(){
  narrator.show("You win! Congrats Luna made it home safely! To play again click any button.",2.5,67.5)
  GameState.roomNumber = 0
  player.lives = 5
}

async function handleDoorAndTimer(door, timeout) {
  const doorCheck = await isCorrectDoor(door)
  if(!doorCheck || timeout){
    player.lives--
    console.log(`Player has ${player.lives}`)
  }
  const isDead = await deathCheck()
  if(isDead){
    await handleLose()
    return false
  }
  const hasWon = await winCheck()
  if(hasWon){
    await handleWin()
    return false
  }
  await Mainloop()
}

document.addEventListener("DOMContentLoaded", ready)

/* 
timer.js
lives.js
*/
class Timer{
    value
    element
    ticker
    room
    callback
    constructor(value, room, callback){
      this.callback = callback
      // Creates a repeating timer to call this.tick() every 1000 milliseconds
      
      this.room = room
      this.value = value
      // Sets this element to the document's "timer" element, by ID
      this.element = document.querySelector("#timer")
      this.ticker = setInterval(this.tick.bind(this),1000)
    }

    tick(){
      //if the GameState's roomTimer does equal this timer...
      if(GameState.roomNumber === this.room){
        // current value decrements
        this.value --
        console.log(`Timer count: ${this.value}`)
        this.element.innerHTML = this.value
      }else{
        // This is no longer the active room - clear the timer
        clearInterval(this.ticker)
        delete this
      }
      // if timer hits zero
      if(this.value===0 && GameState.roomNumber === this.room){
        // then call the callback from our constructor
        this.callback(null,true)
      }
    }
}
class Lives{
    value
    element
    constructor(value){
      this.value = value
      this.element = document.querySelector("#lives")
      this.element.value = this.value
    }

    update(value){
      this.value = value
      this.element.value = value
    }
}