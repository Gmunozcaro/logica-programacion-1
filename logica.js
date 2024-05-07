// Función para ordenar los números de mayor a menor
function ordenarMayorMenor(a, b, c) {
    return [Math.max(a, b, c), Math.min(Math.max(a, b), Math.max(b, c), Math.min(a, b)), Math.min(a, b, c)];
}

// Función para ordenar los números de menor a mayor
function ordenarMenorMayor(a, b, c) {
    return [Math.min(a, b, c), Math.min(Math.max(a, b), Math.max(b, c), Math.min(a, b)), Math.max(a, b, c)];
}


function ordenarNumeros() {
    // Obtener los números ingresados por el usuario
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let numero3 = parseFloat(document.getElementById("numero3").value);

    if (numero1 === numero2 && numero2 === numero3) {
        document.getElementById("resultadoMayorMenor").innerText = "Los números ingresados son iguales.";
        document.getElementById("resultadoMenorMayor").innerText = "";
        return;
    }

    let ordenMayorMenor = ordenarMayorMenor(numero1, numero2, numero3);
    let ordenMenorMayor = ordenarMenorMayor(numero1, numero2, numero3);

    document.getElementById("resultadoMayorMenor").innerText = "Ordenados de mayor a menor: " + ordenMayorMenor.join(", ");
    document.getElementById("resultadoMenorMayor").innerText = "Ordenados de menor a mayor: " + ordenMenorMayor.join(", ");
}
