import { crearPregunta } from '../helpers/crearPregunta.js';

const facil = [
    {
        pregunta: '¿Cuál es el lugar más frío de la tierra?',
        opciones: ['Antártida', 'Polo Sur', 'Perro', 'Gato'],
        respuesta: 'Antártida',
    },
    {
        pregunta: '¿Cuál es el río más largo del mundo?',
        opciones: ['Guaire', 'Churca', 'Amazonas', 'Azul'],
        respuesta: 'Amazonas',
    },
    {
        pregunta: '¿Dónde originaron los juegos olímpicos?',
        opciones: ['China', 'España', 'Brasil', 'Grecia' ],
        respuesta: 'Grecia',
    },
    {
        pregunta: '¿En qué continente está Ecuador?',
        opciones: ['Europa', 'Asia', 'Africa', 'America'],
        respuesta: 'America',
    },
    {
        pregunta: '¿Quién pintó “la última cena”?',
        opciones: ['Pedro', 'Da Vinci', 'Guzman', 'Jorge'],
        respuesta: 'Da Vinci',
    }
];

export const preguntaFacil = crearPregunta(facil);