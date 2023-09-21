let opt;
let answ, num;

const ejercicios = [0, 0, 0, 0, 0, 0, 0, 0];

let max = 0;
let min = 100;

let indexMax, indexMin;

do {
    opt = prompt("Listado de ejercicios:\n\t1: contador de numeros pares\n\t2: Numero factorial.\n\t3: Validacion de contraseñas.\n\t4: Generador de tablas de multiplicar.\n\t5: Suma de numeros primos.\n\t6: secuencia fibonacci.\n\t7: Convertidor de temperatura\n\t8: Calculadora de pontecia")



    switch (opt) {
        case "1":
            console.log("Contador de pares")

            let contEven = 0, contOdd = 0;
            answ = prompt("Quieres ejecutar el programa si o no:  ");

            if (answ == "s" || answ == "si" || answ == "sÍ") {
                ejercicios[0] += 1;
                num = prompt("Ingrese un numero: ");
                
                for (let i = 1; i <= num; i++) {
                    if (i % 2 == 0) {
                        contEven += 1;
                    } else (
                        contOdd += 1
                    )
                }

                console.log("\nEl numero de pares es " + contEven + "\nEl numero de impares es: " + contOdd + "\n");
                console.log("Los números pares son aquellos que son divisibles por 2 sin dejar un residuo (tienen residuo 0), mientras que los números impares son aquellos que no son divisibles por 2 sin dejar un residuo (tienen residuo 1)")
            }

            break;
        case "2":
            answ = prompt("Quieres ejecutar el programa si o no:  ");
            let factorial = 1
            if (answ == "s" || answ == "si" || answ == "sÍ") {
                ejercicios[1] += 1;
                num = prompt("Ingrese un numero entero mayor que cero:");
                for (let i = 1; i <= num; i++) {
                    factorial = factorial * i;
                }

                console.log("El factorial de " + num + " es :" + factorial + " \n ");
                console.log("s un programa que permite al usuario ingresar un número y calcula el factorial de ese número utilizando un ciclo. El factorial de un número entero no negativo se define como el producto de todos los números enteros positivos desde 1 hasta ese número.")
            }


            break;
        case "3":
            console.log("Validacion de contraseñas")
            answ = prompt("Quieres ejecutar el programa si o no:  ");
            if (answ == "s" || answ == "si" || answ == "sí") {
                ejercicios[2] += 1;
                password = prompt("Ingrese una contraseña:");

                if (password === "admin123") {
                    console.log("Acceso concedido! \n");
                } else {
                    console.log("Acceso denegado! \n");
                }
                console.log('En este programa JavaScript, primero se utiliza prompt() para solicitar al usuario que ingrese una contraseña. Luego, se compara la contraseña ingresada con la contraseña válida, que en este caso es "secreto123", utilizando el operador ===. Si ambas contraseñas coinciden, se muestra un mensaje de "Acceso concedido" en la consola. De lo contrario, se muestra un mensaje de "Acceso denegado"')
            }

            break;

        case "4":
            console.log("Generador de tablas de multiplicar");

            answ = prompt("Quieres ejecutar el programa si o no:  ");
            if (answ == "s" || answ == "si" || answ == "sí") {
                ejercicios[3] += 1;
                num = prompt("Ingrese un numero mayor que cero:");

                for (let i = 1; i <= 12; i++) {
                    console.log(num + " * " + i + " = " + i * num);
                }
                console.log("\nes una aplicación simple que permite al usuario ingresar un número y, a partir de ese número, genera y muestra la tabla de multiplicar correspondiente. La tabla de multiplicar muestra los resultados de multiplicar el número ingresado por los números del 1 al 10 (u otro rango si se especifica) y presenta los resultados en un formato legible")
            }

            break;

        case "5":
            console.log("Suma de números primos");
            answ = prompt("Quieres ejecutar el programa si o no:  ");
            if (answ == "s" || answ == "si" || answ == "sí") {
                ejercicios[4] += 1;
                num = parseInt(prompt("Ingrese un numero mayor que cero:"));

                let suma = 0;
                function sumaPrimos(n) {

                    for (let i = 2; i <= n; i++) {
                        if (esPrimo(i)) {
                            suma += i;
                        }
                    }
                    return suma;
                }

                function esPrimo(n) {

                    if (n <= 1) {
                        return false;
                    }

                    for (let i = 2; i * i <= n; i++) {

                        if (n % i === 0) {
                            return false;
                        }
                    }

                    return true;
                }

                console.log("Las suma de los numeros primos hasta " + num + " es " + sumaPrimos(num));

                console.log("es una aplicación que permite al usuario ingresar un número N y luego calcula la suma de los primeros N números primos. Los números primos son aquellos números mayores que 1 que solo son divisibles por sí mismos y por 1. Este programa implica la búsqueda y sumatoria de números primos hasta que se alcance la cantidad deseada (N)")

            }


            break;

        case "6":
            console.log("Secuencia fibonacci");
            answ = prompt("Quieres ejecutar el programa si o no:  ");
            if (answ == "s" || answ == "si" || answ == "sí") {
                ejercicios[5] += 1;
                num = prompt("Ingrese un numero:");

                let num1 = 0;
                let num2 = 1;
                for (let i = 0; i < num; i++) {

                    console.log(num1);
                    let num3 = num1 + num2;

                    num1 = num2;
                    num2 = num3;
                }

                console.log("es una aplicación que genera y muestra la famosa secuencia de Fibonacci hasta un término dado por el usuario. La secuencia de Fibonacci es una serie matemática en la que cada número es la suma de los dos números anteriores en la secuencia, comenzando típicamente con los números 0 y 1")
            }

            break;

        case "7":
            console.log("Convetidor de temperatura");
            answ = prompt("Quieres ejecutar el programa si o no:  ");
            if (answ == "s" || answ == "si" || answ == "sí") {
                ejercicios[6] += 1;
                conversion = parseInt(prompt("Selecione el tipo de conversion a realizar: \n1: Celcius a Fahrenheit\n2: Fahrenheit a Celcius \n"));

                if (conversion == 1) {
                    console.log("Celcius a Fahrenheit");
                    celcius = parseFloat(prompt("Ingrese el los grados celcius a convertir: "))

                    fahrenheit = (celcius * 1.8) + 32;

                    console.log(celcius + " grados celcius  a  fahrenheit son: " + fahrenheit + "°\n");
                } else if (conversion == 2) {
                    fahrenheit = parseFloat(prompt("Ingrese los grados Fahrenheit a convertir a celcius: "));

                    celcius = (fahrenheit - 32) / 1.8;


                    console.log(fahrenheit + " grados fahrenheit a celcius es: " + celcius + "°\n");
                }

                console.log("es una aplicación que permite al usuario convertir temperaturas entre grados Celsius y Fahrenheit, dándole la opción de elegir la dirección de la conversión. Tanto Celsius como Fahrenheit son dos escalas de temperatura ampliamente utilizadas en todo el mundo")
            }

            break;

        case "8":
            console.log("Calculadora de pontecia");
            answ = prompt("Quieres ejecutar el programa si o no:  ");
            if (answ == "s" || answ == "si" || answ == "sí") {
                ejercicios[7] += 1;
                num = parseInt(prompt("Ingrese un numero mayor que cero:"));

                potencia = parseInt(prompt("Ingrese la potencia:"));

                resulatdo = Math.pow(num, potencia);

                console.log("el numero " + num + " elevado  a la potencia " + potencia + " es: " + resulatdo + "\n");

                console.log('es una aplicación que permite al usuario calcular el resultado de elevar un número a una potencia específica. La potenciación es una operación matemática en la que un número (llamado "base") se eleva a una potencia (llamada "exponente") para obtener un resultado')
            }
            break;

        default:
            console.log("ingrese una opcion valida")
            break;

    }

} while (opt != "cerrar")

console.log("\nHas cerrado el programa!");
console.log("Resultados");
for (let i = 0; i < ejercicios.length; i++) {
    console.log("El ejercicio " + (i + 1) + " se ejecuto " + ejercicios[i] + " veces");
}

for (let i = 0; i < ejercicios.length; i++) {
    if (ejercicios[i] > max) {
        max = ejercicios[i];
        indexMax = i;
    }

    if (ejercicios[i] < min) {
        min = ejercicios[i];
        indexMin = i;
    }

}

console.log("El ejercicio que más se selecion es:" + (indexMax + 1 ) );
console.log("El ejercicio que menos se seleciono es: " + (indexMin + 1));
