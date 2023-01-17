let user = JSON.parse(localStorage.getItem("signin"));
if (user != null) {
  document.querySelector("#login").innerText = "My Account";
  document.querySelector("#show-account").hidden=false;
}

let signout = document.querySelector("#signout")

signout.addEventListener("click",function(){
  localStorage.removeItem("signin");
  document.querySelector("#login").innerText = "Sign In";
  document.querySelector("#show-account").hidden=true;
})
  
document.querySelector("#login").addEventListener("click",function(){
  if( document.querySelector("#login").innerText !="Sign In"){
    window.location.href = "#"
  } else {
    window.location.href = "./signin.html"
  }
})


let form = document.querySelector("form");

document.querySelector("#subscribe-btn").addEventListener("click",function(){
  if(form.subscribe.value!=""){
    event.preventDefault()
    document.querySelector("#show-subcribe").innerText = "Your email has been added to the jcrew.com email list"
  }
})






  


