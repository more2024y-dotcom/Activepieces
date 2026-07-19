async function createAccount(){


let username =
document.getElementById("username").value;


let phone =
document.getElementById("phone").value;


let transactionPassword =
document.getElementById("transactionPassword").value;


let loginPassword =
document.getElementById("loginPassword").value;


let gender =
document.getElementById("gender").value;


let inviteCode =
document.getElementById("inviteCode").value;



const {data,error} = await supabaseClient

.from("profiles")

.insert([

{

username:username,

phone:phone,

transaction_password:transactionPassword,

login_password:loginPassword,

gender:gender,

invite_code:inviteCode

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
