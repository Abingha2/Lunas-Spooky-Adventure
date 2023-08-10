class Door{
    element;
    constructor(callback){
        this.element=document.createElement("input")
        this.element.type = "button"
        this.element.classList.add("door")
        this.element.addEventListener("click",callback)
        const doorContainer = root.querySelector("#choices")
        doorContainer.appendChild(this.element)
        return this.element // <--
    }
}