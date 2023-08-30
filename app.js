
//primero obtener los elementos
const form= document.getElementById('agregarForm');
const tareasLista= document.getElementById('tareasLista');
const eliminarCompletadas= document.getElementById('eliminarCompletadas');

form.addEventListener('submit', function(event){
    event.preventDefault();     //metodo q evita envio predeterminado del form no puede venir vacio

    const nuevaTarea= document.getElementById('tarea').value; // valor q ingresa el usario

    const nuevaTareaLi = document.createElement('li')
    //Inner text para mosyrar en pantalla
    nuevaTareaLi.innerText=nuevaTarea;
    nuevaTareaLi.addEventListener('click',function(){
        nuevaTareaLi.classList.toggle('completada');
    })

    //agreahar la lsita d etareas
    tareasLista.appendChild(nuevaTareaLi);

    //limpiar campo
    document.getElementById('tarea').value='';


    eliminarCompletadas.addEventListener('click',function() {
        const  tareasCompletadas= document.querySelectorAll('completadas')
    
        tareasCompletadas.forEach(function(tareaCompletada){
            tareaCompletada.remove();
        });
    });



})

