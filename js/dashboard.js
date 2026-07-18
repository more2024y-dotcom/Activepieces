const SUPABASE_URL = "https://sbrldbbdomfydlynxlsp.supabase.co";

const SUPABASE_KEY = "sb_publishable_UCyYCPiO-Xnbwn0f92z0fw_1Xda2C-s";


const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);



let completed = 0;
let total = 0;



async function loadTasks(){

    const { data, error } = await supabaseClient
        .from("tasks")
        .select("*")
        .order("created_at", { ascending:false });



    if(error){

        console.log("Database Error:", error);

        return;

    }



    const container = document.querySelector(".tasks");

    container.innerHTML = "";



    total = data.length;



    data.forEach((task)=>{


        let card = document.createElement("div");

        card.className = "task-card";



        card.innerHTML = `

        <h3>${task.title}</h3>

        <p>${task.description || ""}</p>

        <p>Status: ${task.status}</p>

        `;



        container.appendChild(card);



    });



    document.getElementById("total").innerHTML = total;


    document.getElementById("remaining").innerHTML =
    total - completed;


}



loadTasks();
