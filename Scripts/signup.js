let form = document.querySelector("form");
let signupLs = JSON.parse(localStorage.getItem("signup")) || [];

form.addEventListener("submit", function () {
  event.preventDefault();
  let obj = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
    country:form.country.value,
  };

  if(obj.name=="" || obj.email=="" || obj.mobile ==""|| obj.password==""){
    alert("all fields are mandatory")
  } else {
    signupLs.push(obj);
  localStorage.setItem("signup", JSON.stringify(signupLs));
  alert("Sign In succesfull");
  document.querySelector("a").innerHTML = window.location.href="./signin.html"

  }

  form.name.value = "";
  form.email.value="";
  form.mobile.value="";
  form.password.value=""

  
});