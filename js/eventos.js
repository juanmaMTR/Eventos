'use strict'
//Juan Manuel Toscano Reyes

window.onload=iniciar


function iniciar(){
  let img=document.getElementsByTagName('img')[0]
  //img.onclick=manejadorClick
  img.addEventListener('click',manejadorClick)
  img.addEventListener('click',manejadorClick2)
}


function manejadorClick(){
  console.log('TRON');

}
function manejadorClick2(){
  console.log('TRON2');

}
