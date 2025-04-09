import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let palos = [
    { palo: '♣', color: 'black' },
    { palo: '♥', color: 'red' },
    { palo: '♠', color: 'black' },
    { palo: '♦', color: 'red' }
  ];
  let valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

  function generarAleatorio(array) {
    let aleatorio = Math.floor(Math.random() * array.length);
    return array[aleatorio];
  }

  function generarCarta() {
    let paloAleatorio = generarAleatorio(palos);
    let valorAleatorio = generarAleatorio(valores);

    document.querySelector(".numero").innerHTML = valorAleatorio;

    document.querySelector(".iconoarriba").innerHTML = paloAleatorio.palo;
    document.querySelector(".iconoarriba").style.color = paloAleatorio.color;

    document.querySelector(".derecha").innerHTML = paloAleatorio.palo;
    document.querySelector(".derecha").style.color = paloAleatorio.color;
  }

  let reiniciarTemporizador;
 
  reiniciarTemporizador = setInterval(generarCarta, 10000);
  document.querySelector(".generador").addEventListener("click", () => {
    clearInterval(reiniciarTemporizador);

    generarCarta();

    reiniciarTemporizador = setInterval(generarCarta, 10000);
  });

  generarCarta();
};
