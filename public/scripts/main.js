
const mobileButton = document.querySelector("#mobile-button");
const headerNav = document.querySelector("#header-nav");
let display = headerNav.setAttribute("display", "none");
let responsive;

mobileButton.addEventListener("click", () => { 
   if(headerNav.style.display == "none"){
        headerNav.style.display = "flex";
   }else{ 
        headerNav.style.display = "none";
   };
});