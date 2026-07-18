async function loadTasks(){

    const { data, error } = await supabaseClient
        .from("tasks")
        .select("*")
        .order("created_at", { ascending: false });


    if(error){

        console.log("Database Error:", error);

        return;

    }


    console.log("Tasks:", data);


    let container = document.querySelector(".tasks");

    container.innerHTML = "";


    data.forEach((task)=>{


        container.innerHTML += `

        <div class="task">

            <h3>${task.title}</h3>

            <p>${task.description}</p>

            <p>Status: ${task.status}</p>

        </div>

        `;


    });


}


loadTasks();
