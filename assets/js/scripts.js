/*let factorial = (numero) => {
    var factor = 1;
    for (let i = 1; i <=numero; i++) {
        factor = factor * i;
    }
    return factor
}*/

//validación del número ingresado por el usuario
let validacion = () => {
    let numero = parseInt(prompt("ingrese un numero entre el 1 y 20"));
    while (numero < 1 || numero >20) {
        numero = parseInt(prompt("Número fuera del rango, ingrese un numero entre el 1 y 20"));
    }
    if (numero >= 1 && numero <= 20) {
        return numero
    }
}

//valor del número ingresado (ya validado) por el usuario
var num = validacion ();

// ciclo para mostrar la tabla de multiplicar
for (let i =1; i <= num; i++) {
    let multiplicacion = i*num;
    console.log(`${i} x ${num} = ${multiplicacion}`)
}
//ciclo para mostrar el factorial
for (let i =1; i <= num; i++) {
    var factor = 1;
    for (let j = 1; j <=i; j++) {
        factor = factor * j;
    }
    console.log(`Factorial de ${i} es: ${factor}`)
}