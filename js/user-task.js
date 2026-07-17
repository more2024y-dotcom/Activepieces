let completed = 0;

let tasks = [];


function loadTasks(){

let container = document.querySelector(".tasks");


container.innerHTML = "";


let savedTasks =
JSON.parse(localStorage.getItem("tasks")) || [];



savedTasks.forEach((task)=>{


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


<button onclick="completeTask(this)">
Start Task
</button>


</div>

`;

});


}


function loadTasks(){

let container = document.querySelector(".tasks");

container.innerHTML = "";


tasks.forEach((task,index)=>{


container.innerHTML += `

<div class="task">

<h3>${task.title}</h3>

<p>
${task.category}
<br>
${task.description}
</p>


<button onclick="completeTask(this)">
Start Task
</button>


</div>

`;

});


}



function completeTask(button){


button.innerHTML="Completed";

button.disabled=true;


completed++;


document.getElementById("completed").innerHTML = completed;


let remaining = 40 - completed;


document.getElementById("remaining").innerHTML = remaining;



let percent = Math.floor((completed/40)*100);



document.getElementById("progress").style.width =
percent + "%";



document.getElementById("progress-text").innerHTML =
percent + "% Completed";


}



loadTasks();
