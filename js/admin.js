console.log("ADMIN JS LOADED");


// ===============================
// CREATE TASK
// ===============================

async function createTask(){


    console.log("Create button clicked");


    let title = document.getElementById("taskTitle").value;

    let description = document.getElementById("taskDescription").value;

    let priority = document.getElementById("taskPriority").value;

    let dueDate = document.getElementById("taskDueDate").value;

    let user = document.getElementById("taskUser").value;



    if(!title || !description){

        alert("Please enter title and description");

        return;

    }



    const { data, error } = await supabaseClient

        .from("tasks")

        .insert([

            {

                title:title,

                description:description,

                priority:priority,

                due_date:dueDate,

                user:user,

                status:"Pending"

            }

        ])

        .select();



    if(error){

        console.log(
            "Create Task Error:",
            error
        );


        alert(
            error.message
        );

        return;

    }



    console.log(
        "Task Created:",
        data
    );


    alert(
        "Task Created Successfully"
    );



    loadAdminTasks();

    updateStats();


}






// ===============================
// LOAD TASKS
// ===============================

async function loadAdminTasks(){


    const { data, error } = await supabaseClient

        .from("tasks")

        .select("*")

        .order(
            "created_at",
            {
                ascending:false
            }
        );



    if(error){

        console.log(
            "Load Error:",
            error
        );

        return;

    }



    let list =
    document.getElementById("taskList");



    if(!list){

        console.log(
            "taskList not found"
        );

        return;

    }



    list.innerHTML = "";



    data.forEach((task)=>{


        list.innerHTML += `

        <div class="task">

            <h3>${task.title}</h3>


            <p>
            ${task.description}
            </p>


            <p>
            Status: ${task.status}
            </p>


            <button onclick="deleteTask(${task.ID})">

            Delete

            </button>


        </div>

        `;


    });


}







// ===============================
// DELETE TASK
// ===============================

async function deleteTask(id){



    const { error } = await supabaseClient

        .from("tasks")

        .delete()

        .eq(
            "ID",
            id
        );



    if(error){

        console.log(
            "Delete Error:",
            error
        );

        return;

    }



    loadAdminTasks();

    updateStats();


}








// ===============================
// UPDATE STATS
// ===============================

async function updateStats(){



    const { data, error } = await supabaseClient

        .from("tasks")

        .select("*");



    if(error){

        console.log(error);

        return;

    }



    let total = data.length;


    let completed =
    data.filter(task =>
        String(task.status).toLowerCase()
        === "completed"
    ).length;



    let active =
    total - completed;




    let totalTasks =
    document.getElementById("totalTasks");


    let completedTasks =
    document.getElementById("completedTasks");


    let activeTasks =
    document.getElementById("activeTasks");



    if(totalTasks){

        totalTasks.innerHTML = total;

    }



    if(completedTasks){

        completedTasks.innerHTML = completed;

    }



    if(activeTasks){

        activeTasks.innerHTML = active;

    }



}






// START

loadAdminTasks();

updateStats();
