const CONTADOR_CLICS = document.getElementById("btnClics");
const DISPLAY_CANTIDAD = document.getElementById("numeroClics");

let contador = 0;

CONTADOR_CLICS.addEventListener("click", () => {
    contador++;
    DISPLAY_CANTIDAD.innerHTML = contador;
} );


