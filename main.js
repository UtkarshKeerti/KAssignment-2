var side_menu=document.getElementsByClassName('side-b')[0];
function show(){
    side_menu.classList.toggle('active');
    btn1.classList.toggle('a');
}
var btn1=document.getElementsByClassName('t-btn')[0];
function btn(){
    btn1.classList.toggle('act');
}
var carousel= document.getElementById('projects');
carousel.addEventListener('mousemove', change);
function change(e){
    console.log('EVENT TYPE: '+e.type);
    carousel.style.border="3px solid rgb("+e.offsetX+","+e.offsetY+", 40)";
}

//  loader page
 function timer(){
     setTimeout(load,3000);
 } 

 function load(){
 var loader= document.getElementsByClassName('loading')[0].style.display="none";
}
