async function createAccount(){


let username =
document.getElementById("username").value;


let phone =
document.getElementById("phone").value;


let transaction_password =
document.getElementById("transactionPassword").value;


let login_password =
document.getElementById("loginPassword").value;


let gender =
document.getElementById("gender").value;


let invite_code =
document.getElementById("inviteCode").value;



const {data,error} = await supabaseClient

.from("profiles")

.insert([

{

username,
phone,
transaction_password,
login_password,
gender,
invite_code

}

]);



if(error){

console.log(error);

alert(error.message);

return;

}


alert("Account Created Successfully");


window.location.href="login.html";


}
