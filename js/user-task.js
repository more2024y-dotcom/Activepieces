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


let isCompleted =
task.completedBy &&
task.completedBy.includes(currentUser);



if(isCompleted){

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
Status: ${isCompleted ? "Completed" : "Active"}
</p>



<button 
onclick="completeTask(${index})"
${isCompleted ? "disabled" : ""}
>

${isCompleted ? "Completed ✓" : "Start Task"}

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


let currentUser =
localStorage.getItem("user");



savedTasks[index].completedBy =
savedTasks[index].completedBy || [];



if(
!savedTasks[index].completedBy.includes(currentUser)
){

savedTasks[index].completedBy.push(currentUser);

}



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
