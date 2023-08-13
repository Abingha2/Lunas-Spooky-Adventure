class Door{
    element;
    constructor(doorNum,callback){
        this.element=document.createElement("input")
        this.element.type = "button"
        this.element.classList.add("door")
        this.element.addEventListener("click",async () => {
            await callback(doorNum)
        })
        const doorContainer = root.querySelector("#choices")
        doorContainer.prepend(this.element)
        return this.element // <--
    }
}