var database = firebase.database();
const tarea = document.getElementById('tarea');
const btnNew = document.getElementById('btnNew');
const toDoContainer = document.getElementById('toDoContainer');
const doingContainer = document.getElementById('doingContainer');
const doneContainer = document.getElementById('doneContainer');




nueva = () => {

    
    
    let referencia = database.ref('To Do/').push();
    let fechita = new Date();

    let objetoTarea = {
        t : tarea.value,
        id: referencia.key, 
        year: fechita.getFullYear(),
        day: fechita.getDate(),
        month: fechita.getMonth(),
    }

    referencia.set(objetoTarea);
    tarea.value = " ";
    
    
    
}

btnNew.addEventListener('click', nueva);

//lectura
database.ref('To Do/').on('value', function(data) {
    toDoContainer.innerHTML= ' ';
    data.forEach (
        objetoTarea => {
            let valor=objetoTarea.val();
            let fila = new FilaTarea(valor);
            toDoContainer.appendChild(fila.render());
        }
    );
})

database.ref('Doing/').on('value', function(data){
    doingContainer.innerHTML= ' ';
    data.forEach (
        objetoTarea => {
            let valor=objetoTarea.val();
            let fila2 = new FilaDoing(valor);
            doingContainer.appendChild(fila2.render());
        }
    );
})

database.ref('Done/').on('value', function(data) {
    doneContainer.innerHTML=' ';
    data.forEach (
        objetoTarea => {
            let valor=objetoTarea.val();
            let fila3 = new FilaDone(valor);
            doneContainer.appendChild(fila3.render());
        }
    );
})