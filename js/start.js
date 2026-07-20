// =====================
// PRODUCT LIST
// =====================

let products = [

{
name: "iPhone 15 Pro",
image: "assets/products/iphone.png",
price: 100
},

{
name: "Apple Watch",
image: "assets/products/iphone.png",
price: 80
},

{
name: "AirPods Pro",
image: "assets/products/iphone.png",
price: 150
},

{
name: "MacBook Pro",
image: "assets/products/iphone.png",
price: 300
}

];




// =====================
// ORDER SYSTEM
// =====================

let completedOrders =
Number(localStorage.getItem("completedOrders")) || 0;


let currentProduct =
Number(localStorage.getItem("currentProduct")) || 0;




function loadProduct(){


let product =
products[currentProduct];



// Update image

document.getElementById("product-image").src =
product.image;



// Update product name

document.getElementById("product-name").innerHTML =
product.name;



// Update price

document.getElementById("price").innerHTML =
product.price;



// Update commission

document.getElementById("commission").innerHTML =
"0.5%";



// Calculate profit

let profit =
product.price * 0.005;


document.getElementById("profit").innerHTML =
profit.toFixed(2);



// Update order number

document.getElementById("progress").innerHTML =
"Order " + completedOrders + " / 40";


}




loadProduct();





function completeOrder(){



if(completedOrders < 40){



completedOrders++;

currentProduct++;



if(currentProduct >= products.length){

currentProduct = 0;

}



// Save data

localStorage.setItem(
"completedOrders",
completedOrders
);


localStorage.setItem(
"currentProduct",
currentProduct
);



// Load next order

loadProduct();


}



}






// =====================
// AUTOMATIC REVIEW SYSTEM
// =====================

let reviewStars = 0;



function automaticReview(){



reviewStars++;



if(reviewStars > 4){

reviewStars = 0;

}



let starDisplay = "";



for(let i = 0; i < reviewStars; i++){

starDisplay += "⭐";

}



for(let i = reviewStars; i < 4; i++){

starDisplay += "☆";

}



document.getElementById("stars").innerHTML =
starDisplay;



if(reviewStars === 0){


document.getElementById("review-text").innerHTML =
"No review yet.";


}

else{


document.getElementById("review-text").innerHTML =
"Excellent product with premium quality. Highly recommended.";


}



}
