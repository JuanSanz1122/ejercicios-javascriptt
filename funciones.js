/* function showMessage() { <-------------declaracion de funciones
  alert( '¡Hola a todos!' );
} 

function name(parameter1, parameter2, ... parameterN) {<--------------La palabra clave function va primero, luego va el nombre de función, luego una lista de parámetros entre paréntesis (separados por comas, vacía en el ejemplo anterior) y finalmente el código de la función entre llaves, también llamado “el cuerpo de la función”.
 // body
}

function showMessage() {
  alert( '¡Hola a todos!' );
}

showMessage();
showMessage();


function showMessage() {
  let message = "Hola, ¡Soy JavaScript!"; // variable local

  alert( message );
}

showMessage(); // Hola, ¡Soy JavaScript!

alert( message ); // <-- ¡Error! La variable es local para esta función


let userName = 'Juan';

function showMessage() {
  let message = 'Hola, ' + userName;
  alert(message);
}

showMessage(); // Hola, Juan


let userName = 'Juan';

function showMessage() {
  userName = "Bob"; // (1) Cambió la variable externa

  let message = 'Hola, ' + userName;
  alert(message);
}

alert( userName ); // Juan antes de llamar la función

showMessage();

alert( userName ); // Bob, el valor fué modificado por la función



let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declara variable local

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// la función crea y utiliza su propia variable local userName
showMessage();

alert( userName ); // John, se mantiene, la función no accedió a la variable externa


function showMessage(from, text) { // parámetros: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', '¡Hola!'); // Ann: ¡Hola! (*)
showMessage('Ann', "¿Cómo estás?"); // Ann: ¿Cómo estás? (**)


function showMessage(from, text) {

  from = '*' + from + '*'; // hace que "from" se vea mejor

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hola"); // *Ann*: Hola

// el valor de "from" es el mismo, la función modificó una copia local
alert( from ); // Ann


showMessage("Ann");


function showMessage(from, text = "sin texto") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: sin texto



showMessage("Ann", undefined); // Ann: sin texto


function showMessage(from, text = anotherFunction()) {
  // anotherFunction() solo se ejecuta si text no fue asignado
  // su resultado se convierte en el valor de texto
}


function showMessage(from, text) {
  if (text === undefined) {
    text = 'sin texto dado';
  }

  alert( from + ": " + text );
}


function showMessage(from, text) {
  // Si el valor de "text" es falso, asignar el valor predeterminado
  // esto asume que text == "" es lo mismo que sin texto en absoluto
  text = text || 'sin texto dado';
  ...
}

  // ...

  if (text === undefined) { // si falta el parámetro
    text = 'mensaje vacío';
  }

  alert(text);
}

showMessage(); // mensaje vacío


function showMessage(text) {
  // si text es indefinida o falsa, la establece a 'vacío'
  text = text || 'vacío';
  ...
}


function showCount(count) {
  // si count es undefined o null, muestra "desconocido"
  alert(count ?? "desconocido");
}

showCount(0); // 0
showCount(null); // desconocido
showCount(); // desconocido


function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3


function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('¿Tienes permiso de tus padres?');
  }
}

let age = prompt('¿Qué edad tienes?', 18);

if ( checkAge(age) ) {
  alert( 'Acceso otorgado' );
} else {
  alert( 'Acceso denegado' );
}


function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Mostrándote la película" ); // (*)
  // ...
}



function doNothing() { /* empty }

alert( doNothing() === undefined ); // true


function doNothing() {
  return;
}

alert( doNothing() === undefined ); // true





*/