console.log("ADMIN JS LOADED");


// Create Task

async function createTask(){


    let title =
    document.getElementById("taskTitle").value;


    let description =
    document.getElementById("taskDescription").value;



    let priority =
    document.getElementById("taskPriority").value;


    let dueDate =
    document.getElementById("taskDueDate").value;


    let user =
    document.getElementById("taskUser").value;



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

        alert("Error creating task");

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






// Load Tasks From Supabase

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



    list.innerHTML = "";



    data.forEach((task)=>{


        list.innerHTML += `


        <div class="task">


            <h3>
            ${task.title}
            </h3>


            <p>
            ${task.description}
            </p>


            <p>
            Status:
            ${task.status}
            </p>



            <button onclick="deleteTask(${task.ID})">

            Delete

            </button>


        </div>


        `;


    });


}







// Delete Task

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


}






// Stats

async function updateStats(){



    const { data, error } =
    await supabaseClient

    .from("tasks")

    .select("*");



    if(error){

        console.log(error);

        return;

    }



    let total =
    data.length;



    let completed =
    data.filter(task =>
        String(task.status).toLowerCase()
        === "completed"
    ).length;



    let active =
    total - completed;




    if(document.getElementById("totalTasks")){

        document.getElementById("totalTasks").innerHTML =
        total;

    }



    if(document.getElementById("completedTasks")){

        document.getElementById("completedTasks").innerHTML =
        completed;

    }



    if(document.getElementById("activeTasks")){

        document.getElementById("activeTasks").innerHTML =
        active;

    }



}







loadAdminTasks();

updateStats();
