const inputContainer = document.getElementById("input-container");
const agregarBoton = document.getElementById("agregar");
const calcularBoton = document.getElementById("calcular");
const resultadoElemento = document.getElementById("resultado");

agregarBoton.addEventListener("click", () => {
    const newInputContainer = inputContainer.cloneNode(true);
    resetInputValues(newInputContainer);
    inputContainer.parentNode.insertBefore(newInputContainer, agregarBoton);
});

calcularBoton.addEventListener("click", () => {
    const inputs = document.getElementsByClassName("input-container");
    let totalSegundos = 0;

    for (const input of inputs) {
        const horas = parseInt(input.querySelector(".horas").value) || 0;
        const minutos = parseInt(input.querySelector(".minutos").value) || 0;
        const segundos = parseInt(input.querySelector(".segundos").value) || 0;
        const operador = input.querySelector(".operador").value;

        const segundosOperacion = horas * 3600 + minutos * 60 + segundos;
        if (operador === "+") {
            totalSegundos += segundosOperacion;
        } else if (operador === "-") {
            totalSegundos -= segundosOperacion;
        }
    }

    const horasResultado = Math.floor(totalSegundos / 3600);
    const minutosResultado = Math.floor((totalSegundos % 3600) / 60);
    const segundosResultado = totalSegundos % 60;
    resultadoElemento.textContent = `${horasResultado} horas : ${minutosResultado} minutos : ${segundosResultado} segundos`;
});

function resetInputValues(inputContainer) {
    const inputs = inputContainer.querySelectorAll("input");
    for (const input of inputs) {
        input.value = "";
    }
}