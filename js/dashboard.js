console.log("NEW DASHBOARD JS LOADED");



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



    let completed = data.filter(task =>

        task.status.toLowerCase() === "completed"

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



        let button = "";



        if(task.status.toLowerCase() !== "completed"){


            button = `

            <button 
            class="complete-btn"
            data-id="${task.id}">
            Complete Task
            </button>

            `;


        }else{


            button = `

            <button disabled>
            Completed ✓
            </button>

            `;


        }




        container.innerHTML += `


        <div class="task">


            <h3>${task.title}</h3>


            <p>${task.description}</p>


            <p>
            Status: ${task.status}
            </p>


            ${button}


        </div>


        `;



    });



}






// Start dashboard

loadTasks();






// Click Complete button

document.addEventListener("click", function(event){



    if(event.target.classList.contains("complete-btn")){


        let id = event.target.getAttribute("data-id");


        console.log(
            "Button clicked:",
            id
        );



        completeTask(id);



    }



});









// Update Supabase

async function completeTask(id){


    console.log(
        "Updating task:",
        id
    );



    const { data, error } = await supabaseClient

        .from("tasks")

        .update({

            status:"completed"

        })

        .eq("id", id)

        .select();





    if(error){


        console.log(
            "Update Error:",
            error
        );


        return;


    }





    console.log(
        "Updated:",
        data
    );



    loadTasks();



}
