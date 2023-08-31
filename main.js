//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const numero = 22;
if (numero % 2 == 0) {
  console.log(`El numero ${numero} es par`);
} else {
  console.log(`El número ${numero} es impar`);
}

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
const num1 = 3;
const num2 = 3;
if (num1 > num2) {
  console.log(`El numero ${num1} es mayor y el ${num2} es menor`);
} else {
  console.log("Ambos numero son iguales");
}

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
const number = 7;
if (number % 5 == 0) {
  console.log(`${number} es multiplo de cinco`);
} else {
  console.log(`${number} No es multiplo de 5`);
}

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
const numerox = 10;
function contador() {
  for (i = 0; i <= numerox; i++) {
    console.log(i);
  }
}
contador();

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const mensaje = "Hola";
const cantidad = 3;
function saludo() {
  console.log(`${mensaje} `.repeat(cantidad));
}
saludo();

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
const marcas = ["Honda", " Yamaha", " Suzuki", " Kawasaki"];
function motos() {
  console.log(`Marcas de Motos: ${marcas}`);
}
motos();

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.
function arreglo() {
  const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numero.splice(5, 1);
  console.log(numero);
}
arreglo();

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const multiplicador = 5;
function arregloNumeros() {
  const numeros = [1, 2, 3, 4, 5];
  const numerosMultipocados = numeros.map((numeros) => numeros * multiplicador);
  console.log(numerosMultipocados);
}
arregloNumeros();
