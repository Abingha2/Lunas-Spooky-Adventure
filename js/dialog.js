class Dialog{
    speed = 30;
    //html box element for the page
    element;
    //displayed- true or false
    displayed;
        constructor(width,height){
        //creates the element for the dialog
        this.element = document.createElement("div")
        //creates the style for the element
        this.element.classList.add("narrator")
        //sticks the element to the root div
        root.appendChild(this.element)
        //changes the visability(hides the element until ready)
        this.element.style.display = "none"
        this.element.style.height=`${height}%`
        this.element.style.width=`${width}%`
        //this tells the program when to not display the text
        this.displayed = false
        
    }
    show(text,x,y){
        this.element.innerHTML=text
        this.element.style.left=`${x}%`
        this.element.style.top=`${y}%`
        this.element.style.display="block"
        this.displayed=true
        console.log("Showing Dialog")


    }
    close(){
        this.element.style.display="none"
        this.displayed=false
    }
    get open(){
        return this.displayed
    }
}
