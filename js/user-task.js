window.completed = 0;


function loadTasks(){

let container = document.querySelector(".tasks");

container.innerHTML = "";


let savedTasks =
JSON.parse(localStorage.getItem("tasks")) || [];


savedTasks.forEach((task, index)=>{


if(task.status === "Completed"){
    completed++;
}


container.innerHTML += `

<div class="task">

<h3>
${task.title}
</h3>


<p>
${task.description}
</p>


<p>
Assigned: ${task.user}
</p>


<p>
Status: ${task.status}
</p>


<button 
onclick="completeTask(${index}, this)"
${task.status === "Completed" ? "disabled" : ""}
>

${task.status === "Completed" ? "Completed ✓" : "Start Task"}

</button>


</div>

`;

});


updateProgress();

}




function completeTask(index, button){


let savedTasks =
JSON.parse(localStorage.getItem("tasks")) || [];



savedTasks[index].status = "Completed";



localStorage.setItem(
"tasks",
JSON.stringify(savedTasks)
);



button.innerHTML = "Completed ✓";

button.disabled = true;



completed++;


updateProgress();


}




function updateProgress(){


document.getElementById("completed").innerHTML =
completed;


let remaining = 40 - completed;


document.getElementById("remaining").innerHTML =
remaining;



let percent = Math.floor((completed / 40) * 100);



document.getElementById("progress").style.width =
percent + "%";



document.getElementById("progress-text").innerHTML =
percent + "% Completed";


}



loadTasks();
