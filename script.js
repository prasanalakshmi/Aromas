let quantityBoxes=document.querySelectorAll(".food_quantity");
let cartIcon=document.querySelector(".fa-cart-shopping");
let cartItemsCount=document.getElementById("cart_items");
let cartPrice=document.getElementById("price");

// console.log(quantityBoxes);
// console.log(cartIcon);
// console.log(cartItemsCount);
// console.log(cartPrice);



let cartPopup= document.createElement("div");
document.body.appendChild(cartPopup);
cartPopup.id="cart_popup";
cartPopup.style.backgroundColor="white";
// cartPopup.style.height="200px";
cartPopup.style.width="300px";
cartPopup.style.border="2px solid black";
cartPopup.style.position="fixed";
cartPopup.style.top="80px";
cartPopup.style.right="20px";
cartPopup.style.borderRadius="20px";
cartPopup.style.padding="15px";
cartPopup.style.display="none";


cartIcon.addEventListener("click", ()=>{
    if( cartPopup.style.display== "none"){
        cartPopup.style.display="block";
    }else{
        cartPopup.style.display="none";
    }
});

let cart={}

quantityBoxes.forEach((box)=>{
    let icons= box.querySelectorAll("i");
   let minusBtn= icons[0];
   let plusBtn= icons[1];
   let card= box.closest(".card_container");
   let title= card.querySelector(".food_title").innerText
   let price= parseInt(card.querySelector(".food_price").innerText)

   minusBtn.addEventListener("click",()=>{
    let current = parseInt(box.innerText)
    if(current>0){
        current--
        if(current==0){
            delete cart[title]
        }else{
            cart[title].quantity = current
        }
    }
    updateCart()
    setQuantity(current)
    
})
    




 function updateCart() {
    let totalQty=0;
    let totalPrice=0;
    cartPopup.innerHTML=""


    for (let item in cart){
        let qty = cart[item].quantity
        let itemPrice = cart[item].price
        totalQty += qty
        totalPrice += qty*itemPrice
        cartPopup.innerHTML += `<p>${item} x ${qty} = <i class="fa-solid fa-indian-rupee-sign"></i> ${qty*itemPrice.toFixed(2)}</p>`
    }
    cartItemsCount.innerHTML = totalQty
    cartPrice.innerHTML = ` <i class="fa-solid fa-indian-rupee-sign"></i> ${totalPrice.toFixed(2)}`
 }

function setQuantity(qty){
    box.innerText="";
    box.append(minusBtn,qty,plusBtn);
 }



plusBtn.addEventListener("click",()=>{
    let current = parseInt(box.innerText)
    current++
    cart[title]={
        quantity:current,
        price:price
    }
    updateCart()
    setQuantity(current)
})

})






// @after this make code responsive and use netlify to create link and deploye it in github