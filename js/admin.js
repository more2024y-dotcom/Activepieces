let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function createTask(){

    let title = document.getElementById("taskTitle").value;

    let description = document.getElementById("taskDescription").value;


    if(title === "" || description === ""){
        alert("Please fill in all fields");
        return;
    }


    let task = {

        title: title,

        description: description,

        status: "Pending"

    };


    tasks.push(task);


    localStorage.setItem("tasks", JSON.stringify(tasks));


    displayTasks();


    document.getElementById("taskTitle").value = "";

    document.getElementById("taskDescription").value = "";

}



function displayTasks(){

    let taskList = document.getElementById("taskList");


    taskList.innerHTML = "";


    tasks.forEach(function(task){


        taskList.innerHTML += `

        <div class="task">

            <h3>${task.title}</h3>

            <p>${task.description}</p>

            <button>
            Assign Task
            </button>

        </div>

        `;


    });

}


displayTasks();
