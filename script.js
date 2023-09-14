const NUEVA_TAREA = document.querySelector("#nuevaTarea");
const AGREGAR = document.querySelector("#botonAgregarTarea");
const LISTA = document.querySelector("#listaTareas");

function isValidInput(string){
  return string.trim() !== "";
}

function marcarCompletada(tarea) {
  tarea.classList.toggle("completed");
}

AGREGAR.addEventListener( "click",() =>{

  if(isValidInput(NUEVA_TAREA.value)){
    const tarea = document.createElement("li");
    tarea.innerText = NUEVA_TAREA.value;
    
    
    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("delete");
    botonEliminar.innerText = "Eliminar";
    botonEliminar.addEventListener("click",()=>{
      LISTA.removeChild(tarea);
    })
    
    tarea.appendChild(botonEliminar);
    LISTA.appendChild(tarea);
  
  }
  
  NUEVA_TAREA.value= "";

})

LISTA.addEventListener( "click" ,(event)=>{
  if(event.target.tagName === "LI"){
    marcarCompletada(event.target);
  }
})


function mostrarCompletadas(){
  const tareas = document.querySelectorAll("li");
  tareas.forEach( tarea =>{
    if(!tarea.classList.contains("completed")){
      tarea.style.display = "none";
    }
    else{
      tarea.style.display = "flex";
    }
  })
}

function mostrarPendientes(){
  const tareas = document.querySelectorAll("li");
  tareas.forEach( tarea =>{
    if(tarea.classList.contains("completed")){
      tarea.style.display = "none";
    }
    else{
      tarea.style.display = "flex";
    }
  })
}

function reset(){
  const tareas = document.querySelectorAll("li");
  tareas.forEach( tarea =>{
    tarea.style.display = "flex";
  })
}
document.querySelector("#reset-btn").addEventListener("click", reset)
document.querySelector("#completadas-btn").addEventListener("click", mostrarCompletadas);
document.querySelector("#pendientes-btn").addEventListener("click", mostrarPendientes);
