let completed = 15;
let total = 40;


let tasks = [

{
title: "Task #1",
category: "AI Training Review",
description: "Review and verify AI training data."
},

{
title: "Task #2",
category: "Customer Verification",
description: "Verify customer information and complete review."
},

{
title: "Task #3",
category: "Platform Review",
description: "Review platform data accuracy."
}

];



function loadTasks(){

let container = document.querySelector(".tasks");

container.innerHTML = "";


tasks.forEach((task)=>{


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

button.innerHTML = "Completed ✓";

button.style.background = "green";

button.disabled = true;


completed++;

updateProgress();

}



function updateProgress(){


let percent = Math.floor((completed / total) * 100);


document.getElementById("completed").innerHTML = completed;


document.getElementById("remaining").innerHTML =
total - completed;


document.getElementById("progress").style.width =
percent + "%";


document.getElementById("progress-text").innerHTML =
percent + "% Completed";


}



loadTasks();
