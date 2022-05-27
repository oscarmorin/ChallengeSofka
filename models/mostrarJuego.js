export class mostrarJuego {

    constructor () {}

    //Creo la funcion para mostrar cada pregunta
    mostrarPreguntas( texto ) {
        const titulo = document.getElementById('titulo');
        titulo.innerText = texto;
    }

    //Creo la funcion mostrar opciones que recibe como parametro las opciones en un arreglo y una funcion
    mostrarOpciones( opciones, callback ) {
        const btn = document.getElementById('opciones');

        btn.innerHTML = '';
        
        //Creo cada opcion como boton
        opciones.forEach(opcion => {
            const boton = document.createElement('button');
            boton.innerText = opcion;
            boton.className = 'btn';

            //Creo el evento click y va a recibir un callback de una funcion en el parametro donde le voy a pasar la opcion en cada boton
            boton.addEventListener('click', () => callback(opcion))

            btn.append(boton);
        });
    }

    //Funcion mostrar puntuacion

    mostrarPuntuacion (puntuacion) {
        
        const user = localStorage.getItem('User');
        let gameOverHTML = '';

        if (puntuacion === '0') {

          gameOverHTML = `
          <h1>Perdiste</h1>
          <h2 id="score">${user} tu puntuación es: ${puntuacion}</h2>
          `;

        } else if(puntuacion === 5) {

          gameOverHTML = `
          <h1>Felicidades superaste el reto con el mayor puntaje</h1>
          <h2 id="score">${user} tu puntuación es: ${puntuacion}</h2>
          `;

        } else {

          gameOverHTML = `
          <h1>Buen resultado aunque pudiste hacerlo mejor</h1>
          <h2 id="score">${user} tu puntuación es: ${puntuacion}</h2>
          `;
        }
        const element = document.getElementById("preguntas");
        element.innerHTML = gameOverHTML;

    }
    
      mostrarProgreso(index, total) {
        let progreso = document.getElementById("progreso");
        progreso.innerHTML = `Pregunta ${index} de ${total}`;
      }

}