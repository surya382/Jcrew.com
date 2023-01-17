let listCart = JSON.parse(localStorage.getItem("cart-page")) || [];

let totalPrice = document.getElementById("total-price");
let totalItems = document.getElementById("total-items");
let coupon = document.getElementById("coupon");

let total;
let discountPrice = document.getElementById("discount-price");
let subbtn = document.getElementById("sub");

subbtn.addEventListener("click", function () {
  if (coupon.value == "masai30") {
    discountPrice.innerText = Math.floor(total - (total * 30) / 100);
  } else{
    alert("Your promo could not be applied. Please try again!")
  }
});

display(listCart);

function display(listCart) {
  document.querySelector("#container").innerHTML = "";
  total = 0;
  let items = 0;
  listCart.forEach(function (elem, i) {
    total += Number(elem.price);
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", elem.image_url);
    discountPrice.innerText = total;

    let name = document.createElement("h2");
    name.innerText = elem.name;

    let price = document.createElement("span");
    price.innerText = "INR " + elem.price;
    
    let strikedPrice = document.createElement("span");
    strikedPrice.innerText =  elem.strikedoffprice;

    let type = document.createElement("p");
    type.innerText =  elem.type

    let trending = document.createElement("p");
    trending.innerText = elem.trending;
    let label = document.createElement("label");
    label.innerText = "QTY:";
    let qty = document.createElement("input");

    qty.setAttribute("type", "number");
    qty.setAttribute("id", "quantity");
    qty.setAttribute("value", "1");

    items += Number(qty.value);

    let deleBtn = document.createElement("button");
    deleBtn.innerText = "Delete";
    deleBtn.addEventListener("click", function () {
      deleCart(elem, i);
    });

    document.querySelector("#container").append(div);
    div.append(img,trending, name, strikedPrice,price,type, label, qty, deleBtn);
    totalPrice.textContent = "INR " + total;
    totalItems.textContent = items;
  });
}

function deleCart(elem, i) {
  listCart.splice(i, 1);
  localStorage.setItem("cart-page", JSON.stringify(listCart));
  display(listCart);
}

document.getElementById("pay").addEventListener("click",function(){
  window.location.href="./payment.html"
})


// let user = JSON.parse(localStorage.getItem("signin"));
// if (user != null) {
//   document.querySelector("#login").innerText = "My Account";
//   document.querySelector("#show-account").hidden=false;
// }