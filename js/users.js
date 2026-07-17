let users = JSON.parse(localStorage.getItem("users")) || [];


function addUser(){

let username =
document.getElementById("newUser").value;


if(username === ""){
    alert("Enter username");
    return;
}


users.push(username);


localStorage.setItem(
"users",
JSON.stringify(users)
);


loadUsers();

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


loadUsers();
