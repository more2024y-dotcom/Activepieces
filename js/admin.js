function createTask(){

let title =
document.getElementById("task-title").value;


let description =
document.getElementById("task-description").value;


let user =
document.getElementById("task-user").value;


let task = {

title:title,

description:description,

user:user,

status:"Active"

};


let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];


tasks.push(task);


localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);


alert("Task Created Successfully");


}
