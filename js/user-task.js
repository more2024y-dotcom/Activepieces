let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function loadUserTasks(){

    let taskContainer = document.querySelector(".tasks");


    if(!taskContainer){
        return;
    }


    taskContainer.innerHTML = "";


    tasks.forEach(function(task, index){

        taskContainer.innerHTML += `

        <div class="task">

            <h3>Task #${index + 1}</h3>

            <p>${task.title}</p>

            <p>${task.description}</p>


            <button onclick="completeTask(this)">
                Start Task
            </button>

        </div>

        `;

    });

}



function completeTask(button){

    button.innerHTML = "Completed";

    button.style.background = "green";

}


loadUserTasks();
