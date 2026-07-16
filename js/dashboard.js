let completed = 15;

function completeTask(button){

    button.innerHTML = "Completed";
    button.disabled = true;

    completed++;

    document.getElementById("completed").innerHTML = completed;

    let remaining = 40 - completed;

    document.getElementById("remaining").innerHTML = remaining;
}
