import { Pregunta } from '../models/pregunta.js';

//Creo función para crear pregunta aleatoriamente
export function crearPregunta(array) {
    
    //Calcular aleatoriamente la posicion
    let posicion = Math.floor(Math.random()*array.length);

    //Crear pregunta referente a la posicion aleatoria 
    const pregunta = new Pregunta(
        array[posicion].pregunta,
        array[posicion].opciones,
        array[posicion].respuesta
    );
    
    //Devolver pregunta alatoria 
    return pregunta;

}