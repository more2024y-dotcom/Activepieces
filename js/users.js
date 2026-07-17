let users = JSON.parse(localStorage.getItem("users")) || [];



function addUser(){

let username =
document.getElementById("newUser").value.trim();



if(username === ""){

alert("Enter username");

return;

}



if(users.includes(username)){

alert("User already exists");

return;

}



users.push(username);



localStorage.setItem(
"users",
JSON.stringify(users)
);



document.getElementById("newUser").value = "";



loadUsers();

loadUserDropdown();

}




function loadUsers(){


let list =
document.getElementById("userList");



if(!list) return;



list.innerHTML = "";



users.forEach((user)=>{


list.innerHTML += `

<p>
${user}
</p>

`;

});


}




function loadUserDropdown(){


let dropdown =
document.getElementById("taskUser");



if(!dropdown) return;



dropdown.innerHTML = `

<option value="All Users">
All Users
</option>

`;



users.forEach((user)=>{


dropdown.innerHTML += `

<option value="${user}">
${user}
</option>

`;

});


}




loadUsers();

loadUserDropdown();
