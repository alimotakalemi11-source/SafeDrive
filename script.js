'use strict';
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const track = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;
function updateCarusell(){
    const width = slides[0].clientWidth;
    track.style.transform=`translateX(-${index*width}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
};
next.addEventListener('click',()=>{
    index++;
    if(index >= slides.length){
        index=0;
    }
    updateCarusell();
});
prev.addEventListener('click',()=>{
    index--;
    if(index < 0){
        index = slides.length-1;
    }
    updateCarusell();
});
dots.forEach((dot,i)=>{
    dot.addEventListener('click', ()=>{
        index=i;
        updateCarusell();
    });
});
const form = document.querySelector("form");
const popup = document.getElementById("successPopup");
const closeBtn = document.getElementById("closeBtn");
form.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const response=await fetch(form.action,{
        method: "POST",
        body: data,
        headers:{
            "accept": "application/json"
        }
    });
    if(response.ok){
        document.getElementById("KontaktForm").reset();
        popup.style.display = "block";

    }else{
        alert("fehler beim Senden!");
    }
});
closeBtn.addEventListener('click', function(){
    popup.style.display="none";
});