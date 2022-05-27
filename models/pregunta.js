class Pregunta {

    /**
     * 
     * @param { string } pregunta Cada pregunta
     * @param { string[] } opciones Lista opciones
     * @param { string } respuesta Respuesta Correcta
     */

     //Constructor clase pregunta 
    constructor( pregunta, opciones, respuesta ) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    /**
     * 
     * @param { string } seleccion Opción seleccionada por usuario
     */

    //metodo para validar seleccion
    respuestaCorrecta( seleccion ) { 
        return seleccion  === this.respuesta; 
    }

}

export { Pregunta };