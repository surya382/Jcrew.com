let ishiiden = true

let form = document.querySelector("form");

form.addEventListener("submit",function(){
  event.preventDefault();
  if(form.cardNumber.value =="123456789" && form.cvv.value =="123" && form.date.value=="12-09-2022"){

  document.getElementById("otp").hidden=false
  document.getElementById("otplabel").hidden=false

  let isotpCorrect = true

  if(form.otp.value=="1234"){
      alert("Thank You! Payment Successful");
      
      window.location.href = "./index.html"
  }

  } else {
      alert("Data not found")
  }

})