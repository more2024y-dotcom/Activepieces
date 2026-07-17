window.completed = 0;


function loadTasks(){

completed = 0;


let container = document.querySelector(".tasks");

container.innerHTML = "";


let savedTasks =
JSON.parse(localStorage.getItem("tasks")) || [];


let currentUser =
localStorage.getItem("user");



savedTasks.forEach((task,index)=>{


if(
task.user === currentUser ||
task.user === "All Users"
){



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
onclick="completeTask(${index})"
${task.status === "Completed" ? "disabled" : ""}
>

${task.status === "Completed" ? "Completed ✓" : "Start Task"}

</button>


</div>

`;

}


});


updateProgress();

}




function completeTask(index){


let savedTasks =
JSON.parse(localStorage.getItem("tasks")) || [];



savedTasks[index].status = "Completed";



localStorage.setItem(
"tasks",
JSON.stringify(savedTasks)
);



loadTasks();


}





function updateProgress(){


document.getElementById("completed").innerHTML =
completed;



let remaining = 40 - completed;


document.getElementById("remaining").innerHTML =
remaining;



let percent = Math.floor(
(completed / 40) * 100
);



document.getElementById("progress").style.width =
percent + "%";



document.getElementById("progress-text").innerHTML =
percent + "% Completed";


}




loadTasks();
