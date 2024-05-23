const btnOpen=document.querySelector(".btnOpen");
const popup=document.getElementById("popup");
const btnClose=document.querySelector(".btnClose");

btnOpen.addEventListener('click',()=>{
  popup.classList.add("open-popup");
})
btnClose.addEventListener("click",()=>{
  popup.classList.remove("open-popup");
})