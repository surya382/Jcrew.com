
document.querySelector("#cash").addEventListener("change",move);

function move(event){
event.preventDefault();
    let selected=document.querySelector("#cash").value;
    
    if(selected=="For Women")
    {
        window.location.href="forwom.html";}
}




