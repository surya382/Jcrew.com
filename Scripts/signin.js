let form = document.querySelector("form");

let signupLs = JSON.parse(localStorage.getItem("signup")) || [];

form.addEventListener("submit", function () {
  event.preventDefault();

  if (signupLs.length === 0) {
    alert("User Not found");
    return;
  }

  let obj = {
    email: form.email.value,
    password: form.password.value,
  };
  let isSignedin = true;
  signupLs.forEach(function (ele) {
    if (ele.email === obj.email && ele.password === obj.password) {
      isSignedin = false;
      localStorage.setItem("signin", JSON.stringify(ele));
      alert("Sign in sucessfull");
      window.location.href = "./index.html";
      
    }
  });

  if ((flag = isSignedin)) {
    alert("User doesn't Exist");
  }
});