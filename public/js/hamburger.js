const toggleMenu=document.querySelector("#toggleMenu"),navList=document.querySelector("#nav-list");toggleMenu.addEventListener("click",(()=>{navList.style.display="flex",navList.style.top="0"})),document.addEventListener("mouseup",(e=>{navList.contains(e.target)||(navList.style.top="-100%")})),window.addEventListener("scroll",(()=>{(window.scrollY=400)&&(console.log(window.scrollY),navList.style.top="-100%")}));