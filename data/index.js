
//Index para tener todas las preguntas aleatorias en un solo archivo
import { preguntaMuyFacil } from './muyFacil.js';
import { preguntaFacil } from './facil.js';
import { preguntaIntermedio} from './intermedio.js';
import { preguntaDificil } from './dificil.js';
import { preguntaMuyDificil } from './muyDificil.js';



export const quiz = [
    preguntaMuyFacil,
    preguntaFacil,
    preguntaIntermedio,
    preguntaDificil,
    preguntaMuyDificil
]


