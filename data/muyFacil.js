import { crearPregunta } from '../helpers/crearPregunta.js';

const muyFacil = [
    {
        pregunta: '¿De qué color es el cielo?',
        opciones: ['Negro', 'Blanco', 'Azul', 'Amarillo'],
        respuesta: 'Azul',
    },
    {
        pregunta: '¿De qué color es una nube?',
        opciones: ['Blanco', 'Marrón', 'Verde', 'Rosado'],
        respuesta: 'Blanco',
    },
    {
        pregunta: '¿Cuántos meses del año existen?',
        opciones: ['10', '9', '11', '12'],
        respuesta: '12',
    },
    {
        pregunta: '¿Forma del paneta tierra?',
        opciones: ['Cuadrada', 'Redonda', 'Triángular', 'Rectángular'],
        respuesta: 'Redonda',
    },
    {
        pregunta: '¿Qué animal no es doméstico?',
        opciones: ['Perro', 'Gato', 'Pantera', 'Casa'],
        respuesta: 'Pantera',
    },
];

export const preguntaMuyFacil = crearPregunta(muyFacil);



