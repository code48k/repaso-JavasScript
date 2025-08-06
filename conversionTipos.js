// CONVERSIÓN DE TIPOS 

// LA CONVERSIÓN DE TIPO EN JAVASCRIPT ES CUANDO UN VALOR DE UN TIPO DE DATO (COMO STRING, NUMBER, BOOLEAN, ETC...) SE TRANSFORMA AUTOMÁTICAMENTE O MANUALMENTE EN OTRO TIPO. JAVASCRIPT LO HACE A VECES POR SU CUENTA (CONVERSIÓN IMPLÍCITA), Y OTRAS VECES TÚ LE DICES "¡CAMBIA ESTO YA!" (CONVERSIÓN EXPLÍCITA).   

// 🔄 TIPOS DE CONVERSION DE TIPO:

// ✅ CONVERSIÓN IMPLÍCITA 

// JAVASCRIPT INTENTA SER SIMPÁTICO Y CONVERTIR TIPOS POR TI, A VECES SIN AVISARTE... A VECES CON CONSECUENCIAS RARAS. AQUÍ JAVASCRIPT CONVIERTE EL '3' A STRING Y LO CONCATENA.

// EJEMPLO 1: 

let resultado1 = '5' + 3; // '53' 
console.log(resultado1);

// PERO SI USAMOS '-', NO ES TAN AMISTOSO:

// EJEMPLO 2: 

let resultado2 = '5' - 3; // 2
console.log(resultado2);

// AHORA CONVIERTE '5' A NÚMERO. BIEN RARO, ¿NO?

// ✋ CONVERSIÓN EXPLÍCITA

// CUANDO TÚ LE DICES DIRECTAMENTE A JAVASCRIPT "QUIERO QUE ESO SEA DE OTRO TIPO".

// EJEMPLO 3: 

let numero = Number('42'); // 42 (número)
let texto = String(123);  // '123' (string)
let booleano = Boolean(0); // false
console.log(numero);
console.log(texto);
console.log(booleano);

// POR EJEMPLO, 'alert' CONVIERTE AUTOMÁTICAMENTE CUALQUIER VALOR A STRING PARA MOSTRARLO. LAS OPERACIONES MATEMÁTICAS CONVIERTE LOS VALORES A NÚMEROS.

// TAMBIÉN HAY CASOS DONDE NECESITAMOS CONVERTIR DE MANERA EXPLÍCITA UN VALOR AL TIPO ESPERADO.

// ------------------------------------------------------------------------------------------------------------------------

// TOSTRING

// LA CONVERSIÓN A STRING OCURRE CUANDO NECESITAMOS LA REPRESENTACIÓN EN FORMA DE TEXTO DE UN VALOR.

// POR EJEMPLO, 'alert(value)' LO HACE PARA MOSTRAR EL VALOR COMO TEXTO.

// TAMBIÉN PODEMOS LLAMAR A LA FUNCIÓN 'String(value)' PARA CONVERTIR UN VALOR A STRING.

let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); // string

// ------------------------------------------------------------------------------------------------------------------------

// TONUMBER

// LA CONVERSIÓN NÚMERICA OCURRE AUTOMÁTICAMENTE EN FUNCIONES MATEMÁTICAS Y EXPRESIONES.

// POR EJEMPLO, CUANDO SE DIVIDEN VALORES NO NÚMERICOS USANDO '/':

console.log("6" / "2"); // 3

// PODEMOS USAR LA FUNCIÓN 'Number(value)' PARA CONVERTIR DE FORMA EXPLÍCITA DE UN VALOR A UN NÚMERO: 

let str = "123";
console.log(typeof str); // string

let num = Number(str); // se convierte en 123
console.log(typeof num); // number

// SI EL STRING NO ES UN NÚMERO VÁLIDO, EL RESULTADO DE LA CONVERSIÓN SERÁ 'NaN'.

let age = Number("un texto arbitrario en vez de un número");
console.log(age); // NaN, conversión fallida

let ejemplo1 = Number(undefined); // NaN, conversión fallida
console.log(ejemplo1); 
let ejemplo2 = Number(null); // conversión 0
console.log(ejemplo2); 
let ejemplo3 = Number(true); // conversión 1
console.log(ejemplo3); 
let ejemplo4 = Number(false); // conversión 0
console.log(ejemplo4); 
let ejemplo5 = Number(0); // conversión 0
console.log(ejemplo5);
let ejemplo6 = Number(1); // conversión 1
console.log(ejemplo6);
let ejemplo7 = Number(""); // conversión 0
console.log(ejemplo7); 
let ejemplo8 = Number(" "); // conversión 0
console.log(ejemplo8);
let ejemplo9 = Number("¡Hola, Chicos!!!"); // NaN, conversión fallida
console.log(ejemplo9);
let ejemplo10 = Number("    123     "); // Se eliminan los espacios (incluye espacios, tabs \t, saltos de línea \n, etc.) al inicio y final del texto.
console.log(ejemplo10);
let ejemplo11 = Number("123z"); // NaN, conversión fallida
console.log(ejemplo11);

// TENGA EN CUENTA QUE 'null' Y 'undefined' SE COMPORTA DE DISTINTA MANERA AQUÍ: 'null' SE CONVIERTE EN 0 MIENTRAS QUE 'undefined' SE CONVIERTE EN 'NaN'.

// CASI TODAS LAS OPERACIONES MATEMÁTICAS CONVIERTEN VALORES A NÚMEROS. UNA EXCEPCIÓN NOTABLE ES LA SUMA +. SI UNO DE LOS VALORES SUMADOS ES UN STRING EL OTRO VALOR ES CONVERTIDO A STRING.

// LUEGO, LOS CONCATENA (UNE):

console.log(1 + '2'); // '12' (string a la derecha)
console.log('1' + 2); // '12' (string a la izquierda)

// ESTO OCURRE SOLO SI AL MENOS UNO DE LOS ARGUMENTOS ES UN STRING, EN CASO CONTRARIO LOS VALORES SON CONVERTIDOS A NÚMERO.

// ------------------------------------------------------------------------------------------------------------------------

// TOBOOLEAN

// LA CONVERSIÓN A BOOLEAN ES LA MÁS SIMPLE.

// OCURRE EN OPERACIONES LÓGICAS (MÁS ADELANTE VEREMOS LOS CONDICIONALES Y OTRAS COSAS SIMILARES), PERO TAMBIÉN PUEDEN REALIZARSE DE FORMA EXPLÍCITA LLAMANDO A LA FUNCIÓN 'Boolean(value)'.

// LAS REGLAS DE CONVERSIÓN:

// LOS VALORES QUE SON INTUITIVAMENTE "vacios", como 0, "", null, undefined, y NaN, SE CONVIERTEN EN 'false'.

// OTROS VALORES SE CONVIERTEN EN 'true'.

console.log(Boolean(0)); // false
console.log(Boolean("0")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false
console.log(Boolean(1)); // true
console.log(Boolean("hola")); // true
console.log(Boolean(" ")); // true

// ------------------------------------------------------------------------------------------------------------------------

// RESUMEN

// LAS TRES CONVERSIONES DE TIPO MÁS USADAS SON A STRING, A NÚMERO Y A BOOLEAN.

// TOSTRING – OCURRE CUANDO SE MUESTRA ALGO. SE PUEDE REALIZAR CON 'String(value)'. LA CONVERSIÓN A STRING ES USUALMENTE OBVIA PARA LOS VALORES PRIMITIVOS.

// TONUMBER – OCURRE EN OPERACIONES MATEMÁTICAS. SE PUEDE REALIZAR CON Number(value).

// LA CONVERSIÓN SIGUE LAS REGLAS:


// VALOR                                                SE CONVIERTE EN…
// undefined	                                        NaN
// null	                                                0
// true / false	                                        1 / 0


// EL STRING ES LEÍDO "COMO ES", LOS ESPACIOS EN BLANCO (INCLUYE ESPACIOS, TABS \t, SALTOS DE LÍNEA \n, ETC.) TANTO AL INICIO COMO AL FINAL SON IGNORADOS. UN STRING VACÍO SE CONVIERTE EN 0. UN ERROR ENTREGA 'NaN'.

// TOBOOLEAN – OCURREN EN OPERACIONES LÓGICAS. SE PUEDE REALIZAR CON Boolean(value).

// SIGUE LAS REGLAS:

// VALOR                                                SE CONVIERTE EN…
// 0, null, undefined, NaN, ""	                        false
// CUALQUIER OTRO VALOR	                                true

// LA MAYORÍA DE ESTAS REGLAS SON FÁCILES DE ENTENDER Y RECORDAR. LAS EXCEPCIONES MÁS NOTABLES DONDE LA GENTE SUELE COMETER ERRORES SON:

// 'undefined' es 'NaN' COMO NÚMERO, NO 0.

// "0" Y TEXTOS QUE SOLO CONTIENEN ESPACIOS COMO " " SON TRUE COMO BOOLEAN.

// ------------------------------------------------------------------------------------------------------------------------