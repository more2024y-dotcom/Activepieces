let completed = 15;
let remaining = 25;


function completeTask(button){

    button.innerHTML = "Completed";
    button.style.background = "green";

    completed++;
    remaining--;

    document.getElementById("completed").innerHTML = completed;
    document.getElementById("remaining").innerHTML = remaining;

}
