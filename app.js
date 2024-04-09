AOS.init();

let i= 0; // variable del boton leer mas
// Boton leer mas//
document.getElementById('readMore').style.display='none';
let button=document.querySelector('#button').addEventListener('click', function(){
  if(i==1){
    document.getElementById('readMore').style.display='inline';
    document.getElementById('button').innerHTML ='Leer menos';
    i= 0;
  }else if(i==0){
    document.getElementById('readMore').style.display='none';
    document.getElementById('button').innerHTML ='Leer más';
    i= 1;

  }
});
// fin Boton leer mas//



//Menu responsive//
const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})





// Add class "active"
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
     

       });
    event.target.classList.add('active');
        

  });

});
 



//Scroll Efect
let menuContent = document.querySelector('.menu');

 let prevScrollPos = window.pageYOffset;
 let goTop = document.querySelector('.go-top');

window.onscroll = () => {
  
  //Hide & Show - Scroll Menu (Function)
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
  }else{
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;
  
  //Scoll Menu & Go Top & See Down (Styles)
  let arriba = window.pageYOffset;

  //Conditions
  if(arriba <= 600){
    menuContent.style.borderBottom = 'none';

    //Ocultar Go Top
    goTop.style.right = '-100px';
  }else{
    menuContent.style.borderBottom = '3px solid #ff2e63';

    //Mostrar Go Top
    goTop.style.right = '0px';
  }
  
}

//Go Top Click
goTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
  
});

