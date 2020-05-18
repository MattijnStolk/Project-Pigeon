let gameElement = document.getElementsByTagName("game")[0]

class Game{
    constructor(){
        new Gun()
    }
}

window.addEventListener("load", () => new Game())