"use strict"
// affichage de la liste stocker dans le local storage
ol.innerHTML = localStorage.getItem("list")

// Récupération des boutons de suppression
const spanDels = document.querySelectorAll(".delete");
// Réactivation de l'évênement onclick sur les boutons de suppression
for(let span of spanDels){
    span.onclick = () => del(span.parentElement);
}
// verifier sil ya une tâche au moins
noTask.style.display = (ol.innerHTML == "")? "block" : "none";


// Add Task
form.onsubmit = () => { 
    const li = document.createElement("li");
    const spanDel = document.createElement("span");
    // Ajout de la classe pour les boutons de suppression
    spanDel.classList.add("delete"); 

    spanDel.innerHTML = " <i class='fa-solid fa-trash trash'></i>";
    li.innerHTML = taskField.value;

    //rajout du bouton de suppression
    li.append(spanDel);
    //suppréssion de la tâche
    spanDel.onclick = () => del(li);

    ol.appendChild(li); 
    taskField.value = "";

  
    noTask.style.display = "none"

    //Stocker la liste dans le local storage
    localStorage.setItem("list",ol.innerHTML);

    return false; }

function del(element){
    element.remove();
    // if(ol.innerHTML == ""){
    //     noTask.style.display = "block";
    // }

    //Condition ternaire
    noTask.style.display = (ol.innerHTML == "")? "block" : "none";
    // Stockage de la nouvelle liste après suppréssion
    localStorage.setItem("list",ol.innerHTML);

   
}
