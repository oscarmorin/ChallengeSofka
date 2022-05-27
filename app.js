
import  { quiz }  from './data/index.js';
import { Quiz } from './models/crearJuego.js';
import { mostrarJuego } from './models/mostrarJuego.js';
import { botonReiniciar, botonRetirarse} from './helpers/botones.js';

const iniciar = document.getElementById('iniciar');
let out;

function actualizarPregunta( preguntas, mostrar ) {

    //Limpiar el setTime en cada pregunta nueva
    clearTimeout(out);

    //Verificar si ya termino el juego
    if(preguntas.terminaJuego()) {

        //Mostrar puntaje
        mostrar.mostrarPuntuacion(preguntas.puntos);

        const puntajeAnterior = Number(localStorage.getItem('Puntos'));

        //Verificar puntaje para almacenar en localStorage
        if ( puntajeAnterior <= preguntas.puntos ) {

            localStorage.setItem( 'Puntos', `${preguntas.puntos}` );
        }

        //Muestro boton 
        botonReiniciar();

    } else {

        //Continua el juego hasta recorrer todas las preguntas
        
        //Activar el setTime en cada pregunta
        out = setTimeout(function(){
            alert('No seleccionaste una opción, automáticamente se cierra el juego');
            if(preguntas.puntos === 0){

                //Muestro Puntuacion
                mostrar.mostrarPuntuacion('0');

                //Muestro boton 
                botonReiniciar();
            } else {

                //Muestro Puntuacion
                mostrar.mostrarPuntuacion(preguntas.puntos);

                //Muestro boton 
                botonReiniciar();
            }

            
        }, 10000);
        
        //Mostrar pregunta
        mostrar.mostrarPreguntas(preguntas.obtenerPreguntasIndex().pregunta);

        //Mostrar progreso
        mostrar.mostrarProgreso(preguntas.preguntaIndex + 1, preguntas.preguntas.length);

        //Mostrar opciones
        mostrar.mostrarOpciones(preguntas.obtenerPreguntasIndex().opciones, (seleccion) => {
        preguntas.adivina(seleccion);   
    
        //Validar si selecciono de forma incorrecta
        if(preguntas.preguntaIndex !== preguntas.puntos){

            mostrar.mostrarPuntuacion('0');
            //Muestro boton 
            botonReiniciar();
            return;
        }
        
        //Siguiente pregunta
        actualizarPregunta( preguntas, mostrar );
          
    });
    }
}

//Funcion iniciar juego
function main () {
    const preguntas = new Quiz(quiz);

    const mostrar = new mostrarJuego();

    botonRetirarse( preguntas, mostrar );  

    actualizarPregunta( preguntas, mostrar ); 
    
}

//Funcion que inicia el juego
iniciar.addEventListener('click', () => {

    const nombre = document.getElementById('nombre').value;
    
    //Controlar que no este vacio el input
    if(nombre) {
        localStorage.setItem('User', nombre );
        main();
    } else {
        alert('El nombre es obligatorio');
    }
});

//Funcion para mostrar el historial por pantalla
function historial () {

    const puntos = localStorage.getItem('Puntos');
    const user = localStorage.getItem('User');
    const historial = document.getElementById('historial');

    //Ejecuto solo si hay datos guardados en localStorage
    if(puntos && user) {
        historial.textContent = `La mejor puntuación fue de ${user} con ${puntos} puntos`;
    }

}

historial();



