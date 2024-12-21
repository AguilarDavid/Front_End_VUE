// Función que cambia el contenido de una fila específica con información de un personaje de Star Wars
function cambiarTodo(row, color, numPersona) {
    // Construye la URL para obtener datos de un personaje específico de la API de Star Wars
    let url = `https://swapi.dev/api/people/${numPersona}`

    // Realiza una solicitud GET a la API
    fetch(url, {
        headers: {
            'Content-Type': 'application/json', // Especifica que el contenido es JSON
        },
        method: "GET", // Método de la solicitud
    })
        .then(response => response.json()) // Convierte la respuesta a formato JSON
        .then(result => {
            console.log(result) // Imprime el resultado en la consola para depuración
            // Agrega un nuevo div con la información del personaje a la fila especificada
            $(row).append(
                `<div class="col-12 col-md-6 col-lg-4 a">
                    <div class="single-timeline-content d-flex wow fadeInLeft 2021" data-wow-delay="0.3s"
                        style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                        <div class="timeline-icon" style="background-color:${color}"><i class="fa fa-address-card" aria-hidden="true"></i>
                        </div>
                        <div class="timeline-text">
                            <h6>${result.name}</h6>
                            <p>Estatura: ${result.height} cm. Peso: ${result.mass} kg.</p>
                        </div>
                    </div>
                </div> `)
        })
        .catch(error => console.log('Error', error)); // Manejo de errores en caso de que la solicitud falle
}

// Función que se ejecuta al cargar el documento
$(function () {

    // Generador que controla la secuencia de llamadas a la función cambiarTodo
    function* generador(row, color, queryNum) {
        cambiarTodo(row, color, queryNum); // Llama a cambiarTodo con los parámetros proporcionados
        yield; // Pausa la ejecución del generador

        cambiarTodo(row, color, queryNum); // Llama nuevamente a cambiarTodo
        yield; // Pausa la ejecución

        cambiarTodo(row, color, queryNum); // Llama nuevamente a cambiarTodo
        yield; // Pausa la ejecución

        cambiarTodo(row, color, queryNum); // Llama nuevamente a cambiarTodo
        yield; // Pausa la ejecución

        cambiarTodo(row, color, queryNum); // Llama nuevamente a cambiarTodo
        return 'terminado...'; // Finaliza el generador
    }

    // Contador para la primera fila
    var i = 0;
    // Evento mouseenter para el primer grupo de elementos
    $('p:contains(1 - 5)').mouseenter(() => {
        i++ // Incrementa el contador

        // Si el contador es menor o igual a 5, ejecuta el generador
        if (i <= 5) {
            var gen1 = generador('.firstRow', 'salmon', i); // Instancia el generador
            gen1.next() // Llama al siguiente paso del generador
        } else {
            console.log('no más') // Mensaje si se excede el límite
        }
    })

    // Contador para la segunda fila
    var j = 5;
    // Evento mouseenter para el segundo grupo de elementos
    $('p:contains(6 - 11)').mouseenter(() => {
        j++ // Incrementa el contador

        // Si el contador es menor o igual a 11, ejecuta el generador
        if (j <= 11) {
            var gen2 = generador('.secondRow', 'lightgreen', j); // Instancia el generador
            gen2.next() // Llama al siguiente paso del generador
        } else {
            console.log('no más') // Mensaje si se excede el límite
        }
    })

    // Contador para la tercera fila
    var k = 11;
    // Evento mouseenter para el tercer grupo de elementos
    $('p:contains(12 - 17)').mouseenter(() => {
        k++ // Incrementa el contador
        // Si el contador es menor o igual a 17, ejecuta el generador
        if (k <= 17) {
            var gen3 = generador('.thirdRow', 'lightskyblue', k); // Instancia el generador
            gen3.next() // Llama al siguiente paso del generador
        } else {
            console.log('no más') // Mensaje si se excede el límite
        }
    })
})

