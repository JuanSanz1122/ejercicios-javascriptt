/* // no hay error
let message = "hola";
message = 123456;

//numeros
let n = 123;
n = 12.345;

alert( 1 / 0 ); // Infinity  //el resultado de esta linea es "infinity"

alert( "no es un número" / 2 ); // NaN, tal división es errónea

//bigint
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
// la "n" al final significa que es un BigInt
const bigInt = 1234567890123456789012345678901234567890n;

string
let str = "Hola";
let str2 = 'Las comillas simples también están bien';
let phrase = `se puede incrustar otro ${str}`;

Las comillas dobles y simples son comillas “sencillas” (es decir, funcionan igual). No hay diferencia entre ellas en JavaScript.
Los backticks son comillas de “funcionalidad extendida”. Nos permiten incrustar variables y expresiones en una cadena de caracteres encerrándolas 
en ${...}, por ejemplo:

let name = "John";

// incrustar una variable
alert( `Hola, ${name}!` ); // Hola, John!

// incrustar una expresión
alert( `el resultado es ${1 + 2}` ); //el resultado es 3


booleanos
let nameFieldChecked = true; // sí, el campo name está marcado
let ageFieldChecked = false; // no, el campo age no está marcado


*/


//tarea
let name = "Ilya";

// la expresión es un número 1
alert( `hola ${1}` ); // hola 1

// la expresión es la cadena "name"
alert( `hola ${"name"}` ); // hola name

// la expresión es una variable
alert( `hola ${name}` ); // hola Ilya