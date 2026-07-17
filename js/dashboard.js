let completed = 0;
let total = 40;



function updateProgress(){


let percent = Math.floor((completed / total) * 100);



document.getElementById("completed").innerHTML =
completed;



document.getElementById("remaining").innerHTML =
total - completed;



document.getElementById("progress").style.width =
percent + "%";



document.getElementById("progress-text").innerHTML =
percent + "% Completed";


}
