const API="https://api.escuelajs.co/api/v1/products";

let btn=document.querySelector("#search");
let product=document.querySelector("#producto")
let productName=document.querySelector(".product-name")
let productImage=document.querySelector(".product-image")

let productNumber=0;
product.value=0;

btn.addEventListener("click",()=>{
    productNumber=product.value
    fetch(API)
    .then(res=>res.json())
    .then(productos=>{
        console.log(productos[productNumber])
        productName.innerHTML=productos[productNumber].title
        productImage.src=productos[productNumber].images[0]
    })
})