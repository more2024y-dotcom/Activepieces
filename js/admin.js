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

status: "Active"

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


}




function loadAdminTasks(){


let list =
document.getElementById("taskList");



let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];



list.innerHTML = "";



tasks.forEach((task)=>{


list.innerHTML += `

<div class="task">

<h3>${task.title}</h3>

<p>
${task.description}
</p>

<p>
Assigned: ${task.user}
</p>

<p>
Status: ${task.status}
</p>


</div>

`;

});


}



loadAdminTasks();
