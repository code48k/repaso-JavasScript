// INTERACCIÓN DE VENTANAS MODALES

// COMO USAREMOS EL NAVEGADOR COMO NUESTRO ENTORNO DE DEMOSTRACIÓN, VEAMOS UN PAR DE FUNCIONES PARA INTERACTUAR CON EL USUARIO: 'alert', 'prompt', y 'confirm'.    

// ------------------------------------------------------------------------------------------------------------------------ 

// ALERT

// YA LA HEMOS VISTO. MUESTRA UN MENSAJE Y ESPERA A QUE EL USUARIO PRESIONE 'ACEPTAR'.

// POR EJEMPLO:

alert("Hello");

// LA MINI VENTANA CON EL MENSAJE SE LLAMA VENTANA MODAL. LA PALABRA MODAL SIGNIFICA QUE EL VISITANTE NO PUEDE INTERACTUAR CON EL RESTO DE LA PÁGINA, PRESIONAR OTROS BOTONES, ETC..., HASTA QUE SE HAYA OCUPADO DE LA VENTANA. EN ESTE CASO, HASTA QUE PRESIONEN "OK".

// ------------------------------------------------------------------------------------------------------------------------

// PROMPT

// LA FUNCIÓN 'prompt' ACEPTA DOS ARGUMENTOS.

let result = prompt(title, 'default');

// MUESTRA UNA VENTANA MODAL CON UN MENSAJE DE TEXTO, UN CAMPO DE ENTRADA PARA EL VISITANTE Y LOS BOTONES OK/CANCELAR.

// TITLE

// EL TEXTO A MOSTRAR AL USUARIO.

// DEFAULT

// UN SEGUNDO PARÁMETRO OPCIONAL, ES EL VALOR INICIAL DEL CAMPO DE ENTRADA.

// EL USUARIO PUEDE ESCRIBIR ALGO EN EL CAMPO DE ENTRADA DE SOLICITUD Y PRESIONAR "OK", ASÍ OBTENEMOS ESE TEXTO EN LA VARIABLE 'result'. O PUEDE CANCELAR LA ENTRADA, CON EL BOTÓN 'CANCELAR' O PRESIONANDO LA TECLA ESC, DE ESTE MODO SE OBTIENE 'null' EN LA VARIABLE 'result'.

// LA LLAMADA A 'prompt' RETORNA EL TEXTO DEL CAMPO DE ENTRADA O 'null' SI LA ENTRADA FUE CANCELADA.

// POR EJEMPLO:

let age = prompt ('¿Cuántos años tienes?', 100);

alert(`Tienes ${age} años!`); //Tienes 100 años!

// ------------------------------------------------------------------------------------------------------------------------

// CONFIRM

let results = confirm(pregunta);

// LA FUNCIÓN 'confirm' MUESTRA UNA VENTANA MODAL CON UNA PREGUNTA Y DOS BOTONES: "OK" Y "CANCELAR".

// EL RESULTADO ES 'true' SI SE PULSA "OK" Y 'false' EN CASO CONTRARIO.

// POR EJEMPLO:

let isBoss = confirm("¿Eres el jefe?");
alert(isBoss); // true si se pulsa OK

// ------------------------------------------------------------------------------------------------------------------------