function ponerTarea(id, id2){
    var tarea = document.getElementById(id).value;
    var mostrarTarea = document.getElementById(id2);
    
    if(tarea.length > 3){ 
        var item = document.createElement("div");
        item.textContent = tarea;
        item.style.letterSpacing = "1px";
        item.style.marginTop="15px";
        item.style.marginBottom = "5px";
        mostrarTarea.appendChild(item);
        
        //eliminamos este elemento al hacer click
        item.onclick = eliminar;
        //Al pulsar enter se vacia el contenido
        clearInput('insertarTexto');
    }else{        
        return false;
    }
}

//Elimina el objeto al hacer click
function eliminar(id){
    document.getElementById("mostrarTareas").removeChild(this);
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
