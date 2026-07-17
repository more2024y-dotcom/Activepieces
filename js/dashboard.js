let completed = 15;
let total = 40;


function completeTask(button){

    button.innerHTML = "Completed ✓";

    button.style.background = "green";

    button.disabled = true;


    completed++;

    updateProgress();

}



function updateProgress(){

    let percent = Math.floor((completed / total) * 100);


    document.getElementById("completed").innerHTML = completed;


    document.getElementById("remaining").innerHTML =
    total - completed;


    document.getElementById("progress").style.width =
    percent + "%";


    document.getElementById("progress-text").innerHTML =
    percent + "% Completed";

}
