
let dal=JSON.parse(localStorage.getItem("list")) || [];
    
display(dal);

function display(dal){

    dal.forEach(function(el){

    let image=document.createElement("img");
    image.setAttribute("src",el.image_url);
    image.style.width="100%";


    let head=document.createElement("h3");
    head.innerText=el.name;

     let price=document.createElement("p");
     price.innerText="INR"+" "+el.price;
     

     let p=document.createElement("p");
     p.innerText="Size:";
     
     let size=document.createElement("div")
     size.setAttribute("id","siz"); 
     
     

     let div1=document.createElement("div");
     div1.innerText="xl";
     

     let div2=document.createElement("div");
     div2.innerText="xxl";

     let div3=document.createElement("div");
     div3.innerText="small";

     let div4=document.createElement("div");
     div4.innerText="large";

     let div5=document.createElement("div");
     div5.innerText="Medium";

     
     
    


     
              
        let but=document.createElement("div");

          let btn=document.createElement("button");
          btn.innerText="ADD TO BAG";
          btn.setAttribute("id","btn");
          btn.addEventListener("click",function(){
               add(el);
          })

     
          let pd=document.createElement("h4");
         pd.innerText="Product Details";

          let det=document.createElement("p");
          det.innerText="When it comes to quality and color, no one does cashmere quite like we do. What could be more cozy (or make a more perfect gift) than cashmere socks?"
             
          let ul=document.createElement("ul");
           let li1=document.createElement("li");
           li1.innerText="Cashmere/polyamide /elastodiene/other fibers."
            
           let li2=document.createElement("li");
           li2.innerText="Hand wash."
              
           let li3=document.createElement("li");
           li3.innerText="Import."

           let li4=document.createElement("li");
           li4.innerText="Select stores."

                 

           ul.append(li1,li2,li3,li4)
         
          but.append(btn);

          
                     
     size.append(div1,div2,div3,div4,div5);
    
     document.querySelector("#pic").append(image)
document.querySelector("#cont").append(head,price,p,size,but,pd,det,ul)

    })
}



let procArr=JSON.parse(localStorage.getItem("check"))||[];

function add(el){
  procArr.push(el);
  localStorage.setItem("check",JSON.stringify(procArr));  
}

