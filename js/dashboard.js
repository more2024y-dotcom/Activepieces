async function loadTasks(){

    const { data, error } = await supabaseClient
        .from("tasks")
        .select("*")
        .order("created_at", { ascending:false });


    if(error){

        console.log("Database Error:", error);
        return;

    }


    console.log("Tasks:", data);


    let container = document.querySelector(".tasks");

    container.innerHTML = "";


    let total = data.length;

    let completed = data.filter(
        task => task.status === "completed"
    ).length;


    let remaining = total - completed;


    document.getElementById("total").innerHTML = total;

    document.getElementById("completed").innerHTML = completed;

    document.getElementById("remaining").innerHTML = remaining;



    let percent = 0;

    if(total > 0){

        percent = Math.floor(
            (completed / total) * 100
        );

    }


    document.getElementById("progress-text").innerHTML =
    percent + "% Completed";



    data.forEach((task)=>{


      container.innerHTML += `

<div class="task">

    <h3>${task.title}</h3>

    <p>${task.description}</p>

    <p>Status: ${task.status}</p>


    ${
        task.status !== "completed"
        ?
        `<button onclick="completeTask('${task.id}')">
            Complete Task
        </button>`
        :
        `<button disabled>
            Completed ✓
        </button>`
    }


</div>

`;


    });


}


loadTasks();
async function completeTask(id){

    console.log("Clicked task ID:", id);


    const { error } = await supabaseClient
        .from("tasks")
        .update({
            status:"completed"
        })
        .eq("id", id);



    if(error){

        console.log("Update Error:", error);

        return;

    }


    console.log("Task completed");


    loadTasks();


}
