import { crearPregunta } from '../helpers/crearPregunta.js';

const dificil = [
    {
        pregunta: '¿En qué se especializa la cartografía?',
        opciones: ['Mapas', 'Letras', 'Montañas', 'Luna'],
        respuesta: 'Mapas',
    },
    {
        pregunta: 'Si 50 es el 100%, ¿cuánto es el 90%?',
        opciones: ['40', '43', '49', '45'],
        respuesta: '43',
    },
    {
        pregunta: '¿Qué país tiene forma de bota?',
        opciones: ['Colombia', 'Venezuela', 'Uruguay', 'Italia'],
        respuesta: 'Italia',
    },
    {
        pregunta: '¿Cuál es el color que representa la esperanza?',
        opciones: ['Negro', 'Blanco', 'Verde', 'Rojo'],
        respuesta: 'Verde',
    },
    {
        pregunta: '¿Cómo se llama el animal más rápido del mundo?',
        opciones: ['León', 'Tigre', 'Pantera', 'Guepardo'],
        respuesta: 'Guepardo',
    }
];

export const preguntaDificil = crearPregunta(dificil);