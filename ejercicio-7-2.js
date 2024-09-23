let num1 = Number(prompt("ingrese su primer numero")) 

let num2 = Number(prompt("ingrese su segundo numero")) 

let op = prompt("suma,resta,multiplicacion,division")

switch (op){
    case "suma": alert:(num1+num2)
        break
    case "resta": alert:(num1-num2)
        break
    case "multiplicacion": alert:(num1*num3)
        break
    case "division": alert:(num1/num2)
        break
    default: alert("no se puede realizar la operacion")
}