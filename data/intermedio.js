import { crearPregunta } from '../helpers/crearPregunta.js';

const intermedio = [
    {
        pregunta: '¿Qué deporte practicaba Michael Jordan?',
        opciones: ['Fútbol', 'Básket', 'Golf', 'Tenis'],
        respuesta: 'Básket',
    },
    {
        pregunta: '¿Cuál es tercer planeta en el sistema solar?',
        opciones: ['Tierra', 'Venus', 'Marte', 'Júpiter'],
        respuesta: 'Tierra',
    },
    {
        pregunta: '¿Cuál es la moneda del Reino Unido?',
        opciones: ['Dólar', 'Euro', 'Libra', 'Peso'],
        respuesta: 'Libra',
    },
    {
        pregunta: '¿Cual es país más poblado de la Tierra?',
        opciones: ['México', 'España', 'China', 'Alemania'],
        respuesta: 'China',
    },
    {
        pregunta: '¿Cuántas patas tiene la araña?',
        opciones: ['4', '6', '12' , '8'],
        respuesta: '8',
    }
];

export const preguntaIntermedio = crearPregunta(intermedio);