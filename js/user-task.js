window.completed = 0;


function loadTasks(){

completed = 0;


let container = document.querySelector(".tasks");

container.innerHTML = "";


let savedTasks =
JSON.parse(localStorage.getItem("tasks")) || [];


let currentUser =
localStorage.getItem("user");



savedTasks.forEach((task,index)=>{


if(
task.user === currentUser ||
task.user === "All Users"
){


let isCompleted =
task.completedBy &&
task.completedBy.includes(currentUser);



if(isCompleted){

completed++;

}



container.innerHTML += `

<div class="task">

<h3>
${task.title}
</h3>


<p>
${task.description}
</p>
<p>
Product: ${task.productName || "No Product"}
</p>

<p>
Priority: ${task.priority || "Medium"}
</p>


<p>
Due Date: ${task.dueDate || "No Due Date"}
</p>


<p>
Assigned: ${task.user}
</p>

<p>
Status: ${isCompleted ? "Completed" : "Active"}
</p>



${!isCompleted ? `

<div class="rating">

<p>Your Rating:</p>

<select id="rating-${index}">

<option value="1">
⭐
</option>

<option value="2">
⭐⭐
</option>

<option value="3">
⭐⭐⭐
</option>

<option value="4">
⭐⭐⭐⭐
</option>

<option value="5">
⭐⭐⭐⭐⭐
</option>

</select>


<button onclick="submitReview(${index})">

Submit Review

</button>

</div>

` : `

<p>
Rating: ${task.rating || "No Rating"}
</p>

<button disabled>
Completed ✓
</button>

`}


</div>

`;

}


});


updateProgress();

}





function completeTask(index){


let savedTasks =
JSON.parse(localStorage.getItem("tasks")) || [];


let currentUser =
localStorage.getItem("user");



savedTasks[index].completedBy =
savedTasks[index].completedBy || [];



if(
!savedTasks[index].completedBy.includes(currentUser)
){

savedTasks[index].completedBy.push(currentUser);

}



localStorage.setItem(
"tasks",
JSON.stringify(savedTasks)
);



loadTasks();


}





function updateProgress(){


document.getElementById("completed").innerHTML =
completed;



let remaining = 40 - completed;


document.getElementById("remaining").innerHTML =
remaining;



let percent = Math.floor(
(completed / 40) * 100
);



document.getElementById("progress").style.width =
percent + "%";



document.getElementById("progress-text").innerHTML =
percent + "% Completed";


}





loadTasks();
