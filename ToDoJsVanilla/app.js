"use strict"

// Add Task
form.onsubmit = () => { 
    const li = document.createElement("li");
    const spanDel = document.createElement("span")
    spanDel.textContent = "[X]";
    li.innerHTML = taskField.value;
    li.append(spanDel);
    spanDel.onclick = () => del(li);

    orderList.appendChild(li); 
    taskField.value = "";
    return false;
    //event.preventDefa ult();
}
function del(element){
    element.remove();
}