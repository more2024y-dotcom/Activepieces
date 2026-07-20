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
let reviewStars = 0;


function automaticReview(){

reviewStars++;


if(reviewStars > 4){

reviewStars = 0;

}


let starDisplay = "";

for(let i=0;i<reviewStars;i++){

starDisplay += "⭐";

}


for(let i=reviewStars;i<4;i++){

starDisplay += "☆";

}


document.getElementById("stars").innerHTML = starDisplay;



if(reviewStars === 0){

document.getElementById("review-text").innerHTML =
"No review yet.";

}

else{

document.getElementById("review-text").innerHTML =
"Excellent product with premium quality. Highly recommended.";

}


}
