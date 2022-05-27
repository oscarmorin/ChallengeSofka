import { crearPregunta } from '../helpers/crearPregunta.js';

const muyDificil = [
    {
        pregunta: '¿En qué año comenzó la II Guerra Mundial?',
        opciones: ['1920', '1993', '1933', '1939'],
        respuesta: '1939',
    },
    {
        pregunta: '¿Cuál es la ciudad de los rascacielos?',
        opciones: ['New York', 'Barcelona', 'Paris', 'Lisboa'],
        respuesta: 'New york',
    },
    {
        pregunta: '¿De qué país es el futbolista Zlatan Ibrahimović?',
        opciones: ['España', 'Hungría', 'Suecia', 'Croacia'],
        respuesta: 'Suecia',
    },
    {
        pregunta: ' ¿Cuál fue el primer metal que empleó el hombre?',
        opciones: ['Cobre', 'Hierro', 'Bronce', 'Oro'],
        respuesta: 'Cobre',
    },
    {
        pregunta: '¿Cuál es el metal más caro del mundo?',
        opciones: ['Oro', 'Rodio', 'Platino', 'Cobalto'],
        respuesta: 'Rodio',
    }
];

export const preguntaMuyDificil = crearPregunta(muyDificil);