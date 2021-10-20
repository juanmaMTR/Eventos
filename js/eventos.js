'use strict'
//Juan Manuel Toscano Reyes

window.onload=iniciar
let mapa=null

function iniciar(){
  mapa=document.getElementById('imgMapa')
  //img.onclick=manejadorClick
  //img.addEventListener('click',manejadorClick)
  //img.addEventListener('click',manejadorClick2)
  mapa.onclick=ponerSeta

}

/*
function manejadorClick(){
  console.log('TRON');

}
function manejadorClick2(){
  console.log('TRON2');

}
*/
function ponerSeta(evento){
  let seta=document.createElement('img')
  seta.setAttribute('src','img/seta.png')
  seta.classList.add('seta')
  seta.style.top=`${evento.clientY -25}px`
  seta.style.left=`${evento.clientX -25}px`
  document.body.appendChild(seta)
  seta.onContextMenu=eliminarSeta
}
function eliminarSeta(evento){
  console.log(evento);
}
