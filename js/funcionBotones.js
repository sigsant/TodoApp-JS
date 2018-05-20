function ponerTarea(id, id2){
    var tarea = document.getElementById(id).value;
    var mostrarTarea = document.getElementById(id2);
    
    if(tarea.length > 3){ 
        var parrafo = document.createElement("p");
        parrafo.innerHTML = tarea;
        mostrarTarea.appendChild(parrafo);
        clearInput('insertarTexto');
    }else{        
        return false;
    }
}

//Permite introducir datos con Enter y vacia el input
function submitEnter(e){
    if(e.keyCode == 13){
        ponerTarea('insertarTexto','mostrarTareas');
        clearInput('insertarTexto');
    }
}

function clearInput(id){
    document.getElementById(id).value="";
}



//Funciona pero no elimina el elemento seleccionado

//~ function eliminar(){
    //~ let mostrarTarea = document.getElementsByClassName('mostrarTareas')[0];
    //~ let parrafo = document.getElementsByTagName('p')[0];
    //~ mostrarTarea.removeChild(parrafo);
//~ }
