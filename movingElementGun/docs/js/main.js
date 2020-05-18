"use strict";
var gameElement = document.getElementsByTagName("game")[0];
var Game = (function () {
    function Game() {
        new Gun();
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Gun = (function () {
    function Gun() {
        var gunElement = document.createElement("gun");
        gameElement.appendChild(gunElement);
    }
    return Gun;
}());
//# sourceMappingURL=main.js.map