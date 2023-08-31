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
        nuevaTareaLi.classList.toggle('completada'); ///revisar que no funciona agreagar la descripcion
    })
    //agreahar la lsita d etareas
    tareasLista.appendChild(nuevaTareaLi);
    //limpiar campo
    document.getElementById('tarea').value='';
    document.getElementById('tarea').focus();
    

    eliminarCompletadas.addEventListener('click',function() {
        
        const $elemento = document.querySelector("#tareasLista");
        $elemento.innerHTML = "";
        document.getElementById('tarea').focus();

        /*
        document.getElementById("tareasLista").remove(); 
        window.location.reload();
        
        const  tareasCompletadas= document.querySelectorAll('completada')
        tareasCompletadas.forEach(function(tareaCompletada){
            tareaCompletada.remove();
        });
        */

    });



})

