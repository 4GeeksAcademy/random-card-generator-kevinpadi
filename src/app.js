import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let paloTop = document.querySelector(".palo-top");
let paloBottom = document.querySelector(".palo-bottom");
let numero = document.querySelector(".numero");
let botonNuevaCarta = document.querySelector("#nueva-carta");

window.onload = function() {
  generarCarta();
};

function generarCarta() {
  let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
  let palos = ["♦", "♥", "♠", "♣"];

  function randomNumero(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let randomPalo = randomNumero(palos);
  let randNumero = randomNumero(numeros);

  paloTop.innerHTML = randomPalo;
  paloBottom.innerHTML = randomPalo;
  numero.innerHTML = randNumero;

  let color = randomPalo == "♦" || randomPalo == "♥" ? 'red' : 'black'
  paloTop.style.color = color;
  paloBottom.style.color = color;
}

botonNuevaCarta.addEventListener("click", generarCarta);
