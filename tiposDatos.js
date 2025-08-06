// TIPOS DE DATOS

// UN VALOR EN JAVASCRIPT SIEMPRE PERTENECE A UN TIPO DE DATO DETERMINADO. POR EJEMPLO, UN STRING O UN NÚMERO.   

// HAY 8 TIPOS BÁSICOS EN JAVASCRIPT. EN ESTE CAPÍTULO LOS CUBRIREMOS EN GENERAL Y EN LOS PRÓXIMOS HABLAREMOS DE CADA UNO DE ELLOS EN DETALLE.

// PODEMOS ALMACENAR UN VALOR DE CUALQUIER TIPO DENTRO DE UNA VARIABLE. POR EJEMPLO, UNA VARIABLE PUEDE CONTENER EN UN MOMENTO UN STRING Y LUEGO ALMACENAR UN NÚMERO.

let message = "hola"; // no hay error 
message = 123456; // se trasforma a un número
console.log(message); // imprimimos por consola

// LOS LENGUAJES DE PROGRAMACIÓN QUE PERMITEN ESTAS COSAS, COMO JAVASCRIPT, SE DENOMINAN "DINÁMICAMENTE TIPADOS", LO QUE SIGNIFICA QUE ALLÍ HAY TIPOS DE DATOS, PERO LAS VARIABLES NO ESTÁN VINCULADAS RÍGIDAMENTE A NINGUNO DE ELLOS. 

// CUANDO DECIMOS QUE JAVASCRIPT ES UN LENGUAJE DINÁMICAMENTE TIPADO, ESTAMOS HABLANDO DE CÓMO MANEJA LOS TIPOS DE DATOS (COMO STRING, NÚMEROS, BOOLEANOS, ETC...). EN TIEMPO DE EJECUCIÓN.

// EN TERMINOS SIMPLES

// 🔮 "DINÁMICAMENTE TIPADO" SIGNIFICA QUE NO NECESITAS DECIRLE A JAVASCRIPT QUÉ TIPO DE DATO VA A TENER UNA VARIABLE. ÉL LO ADIVINA SOLITO Y PUEDE CAMBIARLO CUANDO QUIERA.

// ------------------------------------------------------------------------------------------------------------------------

// NUMBER

let n = 123; 
n = 12.345;
console.log(n);

// EL TIPO NUMBER REPRESENTA TANTOS NÚMEROS ENTEROS COMO DE PUNTO FLOTANTE, ES DECIR, COMO LOS NÚMEROS DECIMALES.

// HAY MUCHAS OPERACIONES PARA NÚMEROS. POR EJEMPLO, MULTIPLICACIÓN *, DIVISIÓN /, SUMA +, RESTA -, Y DEMÁS.

// ADEMÁS QUE LOS NÚMEROS COMUNES, EXISTEN LOS LLAMADOS "VALORES NUMÉRICOS ESPECIALES" QUE TAMBIÉN PERTENECEN A ESTE TIPO DE DATOS: 'Infinity', '-Infinity' Y NaN'.

// 'Infinity' REPRESENTA EL INFINITO MATEMÁTICO ∞. ES UN VALOR ESPECIAL QUE ES MAYOR QUE CUALQUIER NÚMERO.

// PODEMOS OBTENERLO COMO RESULTADO DE LA DIVISIÓN POR CERO: 

console.log( 1 / 0 ); // Infinity

// O SIMPLEMENTE HACER REFERENCIA A ÉL DIRECTAMENTE.

console.log(Infinity); // Infinity

// NaN REPRESENTA UN ERROR DE CÁLCULO. ES EL RESULTADO DE UNA OPERACIÓN MATEMÁTICA INCORRECTA O INDEFINIDA, POR EJEMPLO:

console.log("no es un número" / 2); // NaN, tal división es errónea

// NaN ES "PEGAJOSO". CUALQUIER OTRA OPERACIÓN SOBRE NaN DEVUELVE NaN.

console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log("not a number" / 2 - 1); // NaN

// POR LO TANTO, SI HAY UN 'NaN' EN ALGUNA PARTE DE UNA EXPRESIÓN MATEMÁTICA, SE PROPAGA A TODO EL RESULTADO (CON UNA ÚNICA EXCEPCIÓN: 'NaN ** 0 ES 1').

console.log(NaN ** 0); // 1

// LOS VALORES NUMÉRICOS ESPECIALES PERTENECEN FORMALMENTE AL TIPO "NÚMERO". POR SUPUESTO QUE NO SON NÚMEROS EN EL SENTIDO ESTRICTO DE LA PALABRA.

// ------------------------------------------------------------------------------------------------------------------------

// BIGINT

// 'BigInt' ES UN TIPO DE DATO EN JAVASCRIPT QUE TE PERMITE TRABAJAR CON NÚMEROS ENTEROS EXTREMADAMENTE GRANDES.

// EN JAVASCRIPT, EL TIPO 'number' NO PUEDE REPRESENTAR DE FORMA SEGURA VALORES ENTEROS MAYORES QUE (253-1) (ESO ES 9007199254740991), O MENOR QUE -(253-1) PARA NEGATIVOS.

// EJEMPLO 1

const numeroGigante = 1234567890123456789012345678901234567890n;
console.log(numeroGigante) // la "n" al final significa que es un BigInt

// EJEMPLO 2

const bigInt = BigInt(1234567890123456789012345678901234567890n);
console.log(bigInt); // la "n" al final significa que es un BigInt

// ------------------------------------------------------------------------------------------------------------------------

// STRING

// UN STRING EN JAVASCRIPT ES UNA CADENA DE CARACTERES Y DEBE COLOCARSE ENTRE COMILLAS.

let str = "Hola";
let str2 = 'Las comillas simples también están bien';
let phrase = `se puede incrustar otro ${str}`;

// EN JAVASCRIPT, HAY 3 TIPOS DE COMILLAS. 

// COMILLAS DOBLES: "Hola".
// COMILLAS SIMPLES: 'Hola'.
// BACKTICKS (COMILLAS INVERTIDAS): `Hola`.

// LAS COMILLAS DOBLES Y SIMPLES SON COMILLAS "SENCILLAS" (ES DECIR, FUNCIONAN IGUAL). NO HAY DIFERENCIA ENTRE ELLAS EN JAVASCRIPT.

// LOS BACKTICKS SON COMILLAS DE "FUNCIONALIDAD EXTENDIDA". NOS PERMITEN INCRUSTAR VARIABLES Y EXPRESIONES EN UNA CADENA DE CARACTERES ENCERRÁNDOLAS EN ${...}, POR EJEMPLO:

let name = "John";


console.log( `Hola, ${name}!` ); // incrustar una variable, ejemplo: Hola, John!

console.log( `el resultado es ${1 + 2}` ); // incrustar una expresión, ejemplo: 3

// LA EXPRESIÓN DENTRO DE ${...} SE EVALÚA Y EL RESULTADO PASA A FORMAR PARTE DE LA CADENA. PODEMOS PONER CUALQUIER COSA AHÍ DENTRO: UNA VARIABLE COMO 'name', UNA EXPRESIÓN ARITMÉTICA COMO '1 + 2', O ALGO MÁS COMPLEJO.

// TOMA EN CUENTA QUE ESTO SÓLO SE PUEDE HACER CON LOS BACKTICKS. ¡LAS OTRAS COMILLAS NO TIENEN ESTA CAPACIDAD DE INCRUSTACIÓN.

console.log("el resultado es ${1 + 2}"); // en este caso imprimimos por consola, "el resultado es ${1 + 2}" no podemos ni incrustar variable ni expresiones

// ------------------------------------------------------------------------------------------------------------------------

// BOOLEAN

// EL TIPO BOOLEAN TIENE SÓLO DOS VALORES POSIBLES: 'true' y 'false'.

// ESTE TIPO SE UTILIZA COMÚNMENTE PARA ALMACENAR VALORES DE SÍ/NO: 'true' SIGNIFICA "SÍ, CORRECTO, VERDADERO", Y 'false' SIGNIFICA "NO, INCORRECTO, FALSO". 

// POR EJEMPLO:

let nameFieldChecked = true; // sí, el campo name está marcado
let ageFieldChecked = false; // no, el campo age no está marcado
console.log(nameFieldChecked);
console.log(ageFieldChecked);

// LOS VALORES BOOLEANOS TAMBIÉN SON EL RESULTADO DE COMPARACIONES:

let isGreater = 4 > 1;
console.log(isGreater); // verdadero (el resultado de la comparación es "sí")

// ------------------------------------------------------------------------------------------------------------------------

// EL VALOR "null"

// EL VALOR ESPECIAL 'null' NO PERTENECE A NINGUNO DE LOS TIPOS DESCRITOS ANTERIORMENTE.

// FORMA UN TIPO PROPIO SEPARADO QUE CONTIENE SÓLO EL VALOR 'null'.

let age1 = null;
console.log(age1);

// EN JAVASCRIPT, 'null' NO ES UNA "REFERENCIA A UN OBJETO INEXISTENTE" O UN "PUNTERO NULO" COMO EN OTROS LENGUAJES.

// ES SÓLO UN VALOR ESPECIAL QUE REPRESENTA "NADA", "VACIO" O "VALOR DESCONOCIDO".

// EL CODIGO ANTERIOR INDICA QUE EL VALOR DE 'age' ES DESCONOCIDO O ESTÁ VACÍO POR ALGUNA RAZÓN.

// ------------------------------------------------------------------------------------------------------------------------

// EL VALOR "undefined"

// EL VALOR ESPECIAL 'undefined' TAMBIÉN SE DISTINGUE. ES UN TIPO PROPIO, IGUAL QUE 'null'.

// EL SIGNIFICADO DE 'undefined' SIGNIFICA "VALOR NO ASIGNADO".

// SI UNA VARIABLE DECLARADA, PERO NO ASIGNADA, ENTONCES SU VALOR ES 'undefined'.

let age2;
console.log(age2); // // imprimimos por consola "undefined"

// ------------------------------------------------------------------------------------------------------------------------

// OBJECT Y SYMBOL

// EL TIPO 'object' (OBJETO) ES ESPECIAL.

// TODOS LOS DEMÁS TIPOS SE LLAMAN "PRIMITIVOS" PORQUE SUS VALORES PUEDEN CONTENER UNA SOLA COSA (YA SEA UNA CADENA, UN NÚMERO, O LO QUE SEA). POR EL CONTRARIO, LOS OBJETOS SE UTILIZAN PARA ALMACENAR COLECCIONES DE DATOS Y ENTIDADES MÁS COMPLEJAS.

// SIENDO ASÍ DE IMPORTANTES, LOS OBJETOS MERECEN UN TRATO ESPECIAL.

// EL TIPO 'symbol' (SÍMBOLO) SE UTILIZA PARA CREAR IDENTIFICADORES ÚNICOS PARA LOS OBJETOS. TENEMOS QUE MENCIONARLO AQUÍ PARA UNA MAYOR INTEGRIDAD, PERO ES MEJOR ESTUDIAR ESTE TIPO DESPUÉS DE LOS OBJETOS.

// ------------------------------------------------------------------------------------------------------------------------

// EL OPERADOR 'typeof'

// EL OPERADOR 'typeof' DEVUELVE EL TIPO DE DATO DEL OPERANDO. ES ÚTIL CUANDO QUEREMOS PROCESAR VALORES DE DIFERENTES TIPOS, DE FORMA DIFERENTE O SIMPLEMENTE QUEREMOS HACER UNA COMPROBACIÓN RÁPIDA.

// LA LLAMADA A 'typeof x' DEVUELVE UNA CADENA CON EL NOMBRE DEL TIPO.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"

typeof null // "object"

typeof alert // "function"

// SE PUEDE ENCONTRAR OTRA SINTAXIS EN ALGÚN CÓDIGO: 'typeof(x)'. ES LO MISMO QUE 'typeof x'.

// PARA DEJARLO CLARO: 'typeof' ES UN OPERADOR, NO UNA FUNCIÓN. LOS PARÉNTESIS AQUÍ NO SON PARTE DEL OPERADOR 'typeof'. SON DEL TIPO USADO EN AGRUPAMIENTO MATEMÁTICO.

// ------------------------------------------------------------------------------------------------------------------------

// RESUMEN

// HAY 8 TIPOS BÁSICOS EN JAVASCRIPT.

// SIETE TIPOS DE DATOS PRIMITIVOS.

// 'number' PARA NÚMEROS DE CUALQUIER TIPO: ENTEROS O DE PUNTO FLOTANTE, LOS ENTEROS ESTÁN LIMITADOS POR ±(253-1).

// 'bigint' PARA NÚMEROS ENTEROS DE LONGITUD ARBITRARIA.

// 'string' PARA CADENAS. UNA CADENA PUEDE TENER CERO O MÁS CARACTERES, NO HAY UN TIPO ESPECIAL PARA UN ÚNICO CARÁCTER.

// 'boolean' PARA VERDADERO Y FALSO: 'true/false'.

// 'null' PARA VALORES DESCONOCIDOS – UN TIPO INDEPENDIENTE QUE TIENE UN SOLO VALOR NULO: 'null'.

// 'undefined' PARA VALORES NO ASIGNADOS – UN TIPO INDEPENDIENTE QUE TIENE UN ÚNICO VALOR INDEFINIDO: 'undefined'.

// 'symbol' PARA IDENTIFICADORES ÚNICOS.

// -------------------------------------

// Y UN TIPO DE DATO NO PRIMITIVO:

// 'object' PARA ESTRUCTURAS DE DATOS COMPLEJAS.

// EL OPERADOR 'typeof' NOS PERMITE VER QUÉ TIPO ESTÁ ALMACENADO EN UNA VARIABLE.

// DOS FORMAS: 'typeof x' O 'typeof(x)'.

// DEVUELVE UNA CADENA CON EL NOMBRE DEL TIPO. POR EJEMPLO 'string'.

// PARA 'null' DEVUELVE 'object': ESTO ES UN ERROR EN EL LENGUAJE, EN REALIDAD NO ES UN OBJETO. 

// ------------------------------------------------------------------------------------------------------------------------