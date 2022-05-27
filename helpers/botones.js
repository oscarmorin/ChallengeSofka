//Variable global
let botones = document.getElementById('botones');

//Boton retirarse con su funcion
export const botonRetirarse = ( preguntas, mostrar ) => {

    //Vacion elemento div
    botones.innerHTML = '';

    //Creo el boton
    const btnRetirarse = document.createElement('button');

    //Agrego atributos
    btnRetirarse.className = 'btn';
    btnRetirarse.id = 'btnRetirarse';
    btnRetirarse.innerText = 'Retirarse';

    //Agrego boton al div
    botones.append( btnRetirarse );

    //Evento retirarse
    btnRetirarse.addEventListener('click', () => {

        mostrar.mostrarPuntuacion(preguntas.puntos);

        botonReiniciar();
        
    });
}

//Boton reiniciar con su funcion
export const botonReiniciar = () => {

    //Vacio elemento div
    botones.innerHTML = '';

    //Creo boton
    const btnReiniciar = document.createElement('button');

    //Modifico atributos
    btnReiniciar.className = 'btn';
    btnReiniciar.id = 'btnReiniciar';
    btnReiniciar.innerText = 'Reiniciar';

    //Agrego boton al div
    botones.append( btnReiniciar );

    //Evento reiniciar el juego
    btnReiniciar.addEventListener('click', () => {
        location.reload();
    });
}
