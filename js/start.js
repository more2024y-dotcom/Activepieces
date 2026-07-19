let orderPrice = 100;


let commissionRate = 0.005;


let profit = orderPrice * commissionRate;


document.getElementById("profit").innerHTML =
profit.toFixed(2);



function completeOrder(){


alert(
"Order Completed! Profit added: $" 
+ profit.toFixed(2)
);


}
