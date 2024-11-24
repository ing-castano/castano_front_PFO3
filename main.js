/////////////   SOLUCION 1 /////////////
const calcularAreaRectangulo = (lado1, lado2) => {
  return lado1 * lado2;
};

console.log("/////////////   SOLUCION 1 /////////////");

console.log("calcularAreaRectangulo(5, 3) -> ", calcularAreaRectangulo(5, 3));
console.log(
  "calcularAreaRectangulo(1.5, 30) -> ",
  calcularAreaRectangulo(1.5, 30.5)
);
console.log(
  "calcularAreaRectangulo(-2, 10) -> ",
  calcularAreaRectangulo(-2, 10)
);

/* En este caso primero pensé en incorporar dos argunmento 
que podran ser numeros enteros o float. La funcion simplemente retorna
su multiplicación. */

/////////////   SOLUCION 2   /////////////
const contarPalabras = (cadena) => {
  return cadena.trim().split(" ").length;
};
console.log("/////////////   SOLUCION 2   /////////////");
console.log(
  "Humahuaca es un lugar copado -> ",
  contarPalabras("Humahuaca es un lugar copado")
);
console.log(
  "Esta es una oracion convencional. ->",
  contarPalabras("Esta es una oracion convencional.")
);
console.log(
  " Esta es una oracion, con signos de puntuación! -> ",
  contarPalabras(" Esta es una oracion, con signos de puntuación! ")
);

/* Para este ejercicio me pareció interesante identificar como patrón repetitivo
de separación de palabras los espacios entre las mismas. Para ello, la función
split separa una cadena segun el caracter indicado y devuelve un arreglo, ofreciendo
una oportunidad para que contar la longitud del arreglo coincida con la cantidad de palabras
Con la función trim me aseguro que resista un caso de prueba en el que se introduce una 
oración con espacios adelante o detras del inicio de la oración */

/////////////   SOLUCION 3   /////////////

const invertirCadena = (cadena) => {
  return cadena.split("").reduce((acc, char) => char + acc);
};

console.log("/////////////   SOLUCION 3   /////////////");
console.log("Cadena -> hola =", invertirCadena("hola"));
console.log("Cadena -> calabaza =", invertirCadena("calabaza"));
console.log("Cadena -> caballo =", invertirCadena("caballo"));

/* para este ejercicio se me ocurrio que un reduce serviria para iterar un array
de caracteres e ir acumulando el valor en sentido inverso. Sin embargo, para poder 
realizar esto debí transformar la cadena de texto en un array mediante .split("") */

/////////////   SOLUCION 4   /////////////

const esPalindromo = (cadena) => {
  return cadena === invertirCadena(cadena);
};

console.log("/////////////   SOLUCION 4   /////////////");

console.log("Cadena -> neuquen = ", esPalindromo("neuquen"));
console.log("Cadena -> reconocer = ", esPalindromo("reconocer"));
console.log("Cadena -> prueba = ", esPalindromo("prueba"));

/* Dado que para definir si una palabra es palindroma o no se debe invertir y comparar,
la funcion retorna la comparación de la cadena ingresada original con su versión
invertida obtenida a partir de la función del ejercicio 4. */

/////////////   SOLUCION 5   /////////////

const edadCanina = (edadPerro) => {
  console.log(`Tu perro tiene ${edadPerro * 7} años humanos`);
};

console.log("/////////////   SOLUCION 5   /////////////");
console.log("Haga click en Ejecutar solución 5 primero");

document.getElementById("solucion-5").onclick = () => {
  const edadPerroPrompt = Number(prompt("¿Cual es la edad de tu perro?"));
  if (isNaN(edadPerroPrompt) || edadPerroPrompt <= 0) {
    console.log("Por favor, ingresa un número válido mayor a 0.");
  } else {
    edadCanina(edadPerroPrompt);
  }
};

/* Para este caso la funcion no debe retornar nada sino realizar la cuenta e 
imprimirla por consola dentro de su cuerpo funcional. */
