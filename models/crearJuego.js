
import { Pregunta } from './pregunta.js';
import { botonReiniciar } from '../helpers/botones.js';

//Clase para crear el juego
export class Quiz {
  puntos = 0;
  preguntaIndex = 0;

  constructor(preguntas) {
    this.preguntas = preguntas;
  }

  obtenerPreguntasIndex() {
    return this.preguntas[this.preguntaIndex];
  }

  terminaJuego() {
    return this.preguntas.length === this.preguntaIndex;
  }

  adivina(respuesta) {
    if (this.obtenerPreguntasIndex().respuestaCorrecta(respuesta)) {
      this.puntos++;
    } 
  this.preguntaIndex++;
  }
}