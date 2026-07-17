function createTask(){


let title =
document.getElementById("taskTitle").value;


let description =
document.getElementById("taskDescription").value;


let user =
document.getElementById("taskUser").value;



let task = {

title: title,

description: description,

user: user,

status: "Active",

completedBy: []

};



let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



tasks.push(task);



localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);



alert("Task Created Successfully");


loadAdminTasks();

updateStats();


}





function loadAdminTasks(){


let list =
document.getElementById("taskList");



let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



list.innerHTML = "";



tasks.forEach((task,index)=>{


list.innerHTML += `

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


<button onclick="resetTask(${index})">
Reset
</button>


<button onclick="deleteTask(${index})">
Delete
</button>


</div>

`;

});


}





function deleteTask(index){


let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



tasks.splice(index,1);



localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);



loadAdminTasks();

updateStats();


}





function resetTask(index){


let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



tasks[index].completedBy = [];

tasks[index].status = "Active";



localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);



loadAdminTasks();

updateStats();


}





function updateStats(){


let users =
JSON.parse(localStorage.getItem("users")) || [];


let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



let completed = tasks.filter(task => 
task.completedBy &&
task.completedBy.length > 0
).length;



let active =
tasks.length - completed;



document.getElementById("totalUsers").innerHTML =
users.length;



document.getElementById("totalTasks").innerHTML =
tasks.length;



document.getElementById("completedTasks").innerHTML =
completed;



document.getElementById("activeTasks").innerHTML =
active;


}





loadAdminTasks();

updateStats();
