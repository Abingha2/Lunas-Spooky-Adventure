class Player{
    name;
    lives;
    img;
    size;
    constructor(name,lives,img,size){
        this.name=name;
        this.lives=lives;
        this.img=img;
        this.size=size;
    }
    bark(){
        console.log("woof")
    }
}