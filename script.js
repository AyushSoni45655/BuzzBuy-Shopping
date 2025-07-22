const list = document.querySelector(".navlist");
const hamber = document.querySelector(".fa-bars");
hamber.addEventListener("click",()=>{
  hamber.classList.toggle("fa-x");
  list.classList.toggle('active-link');
});