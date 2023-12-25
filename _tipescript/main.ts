// Tipos de datos primitivos

// Sintaxis
// let identificador: <tipo>

// Tipo string
let mensaje: string;
mensaje = 'Hola Mundo!';
// mensaje = 12; // error tipo solo string

// Tipo nomber
let resultado: number;
resultado = 9.5;

//  Tipo boolean
let mayorEdad: boolean;
mayorEdad = false;

// Tipos compuestos

// let identificador: <tipo-elemento>[]
// let identificador: Array<tipo-elemento>

// Arrays
let frutas: string[];
frutas = ['peras', 'manzanas']

// Tipo any
let id:any = 2876;
id = '0909';
// Rompe la inferencia de tipos, al declarar la variable como "any" permite re-declarar la variable a otro tipo de variable

// Tipado de funciones (parámetros y el retorno de la función)

function suma(a: number, b: number): number {
    return a + b
}
suma(4,9);

// Tipo void (en funciones que no devuelvan valores)
function setMensaje(mensaje: string): void {
    console.log(mensaje)
    // return mensaje; // devolvería error
}

// Tipado genérico en funciones (se define el tipo en la invocación de la función)
function retornoResultado<T> (saludo: T): T {
    return saludo;
}
const a: string = retornoResultado<string> ('Hola');
const b: number = retornoResultado<number> (12);
// Permite usar la misma función para varios tipos de variables

//Tipos de unión
type _id = string | number; // El símbolo | funciona como un "o", lo que permite que la variable pueda ser string o number en este caso.
let referencia: _id;
referencia = 'A1234';
referencia = 12.5;
//referencia = false // Tipo boolean si devolvería error

// Tipos de unión complejos
type razasPerro = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín';
let razaToby: razasPerro;
razaToby = 'Mastín'; // Solo permitiría una de las razas antes declaradas
