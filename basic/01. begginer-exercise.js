// escribe un comentario en una linea
// Cometario

// Escribe un comentario en varias líneas
/*
Este es un comentario en varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let string = "Hola mundo"
let num = "Numero"
let isTrue = "True"
let undefinitedValue
let nullValue = null
let mysbol = Symbol("mi simbolo")
let bigInt = 1234567890123456789012345678901234567890n

// 4. Imprime por consola el valor de todas las variables
console.log(string)
console.log(num)
console.log(isTrue)
console.log(undefinitedValue)
console.log(nullValue)
console.log(mysbol)
console.log(bigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof string)
console.log(typeof num)
console.log(typeof isTrue)
console.log(typeof undefinitedValue)
console.log(typeof nullValue)
console.log(typeof mysbol)
console.log(typeof bigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
string = "Hola mundo modificado"
num = "Numero modificado"
isTrue = "True modificado"
undefinitedValue = "Valor indefinido modificado"
nullValue = "Valor nulo modificado"
mysbol = Symbol("mi simbolo modificado")
bigInt = 1234567890123456789012345678901234567890n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

string = 123
num = true
isTrue = undefined
undefinitedValue = null
nullValue = Symbol("mi simbolo")
mysbol = 1234567890123456789012345678901234567890n
bigInt = "Hola mundo"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const stringConst = "Hola mundo"
const numConst = 123
const isTrueConst = true
const undefinitedValueConst = undefined
const nullValueConst = null
const mysbolConst = Symbol("mi simbolo")
const bigIntConst = 1234567890123456789012345678901234567890n

// 9. A continuación, modifica los valores de las constantes

stringConst = "Hola mundo modificado"
numConst = "Numero modificado"
isTrueConst = "True modificado"
undefinitedValueConst = "Valor indefinido modificado"
nullValueConst = "Valor nulo modificado"
mysbolConst = Symbol("mi simbolo modificado")
bigIntConst = 12345678901234567890123456789012345678920n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// stringConst = "Hola mundo modificado"
// numConst = "Numero modificado"
// isTrueConst = "True modificado"
// undefinitedValueConst = "Valor indefinido modificado"
// nullValueConst = "Valor nulo modificado"
// mysbolConst = Symbol("mi simbolo modificado")
// bigIntConst = 12345678901234567890123456789012345678920n